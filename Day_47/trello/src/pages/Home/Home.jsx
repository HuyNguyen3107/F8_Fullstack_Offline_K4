import React, { useEffect, useMemo, useState } from "react";
import "./Home.css";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import { createPortal } from "react-dom";
import TaskCard from "../../components/TaskCard/TaskCard";
import { useSelector, useDispatch } from "react-redux";
import { trelloSlice } from "../../redux/slice/trelloSlice";
const { addCol, changeCol, changeTask } = trelloSlice.actions;
import { client } from "../../config/client";
import Loading from "../../components/Loading/Loading";
import { getTask, postTasks } from "../../redux/middlewares/trelloMiddlewares";
// import { debounce } from "../../helper/debounce";

function Home() {
  useEffect(() => {
    client.setToken(localStorage.getItem("apiKey"));
    dispatch(getTask());
  }, []);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.trello.status);
  const columns = useSelector((state) => state.trello.columns);
  const toggle = useSelector((state) => state.trello.toggle);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeCol, setActiveCol] = useState(null);
  const [activeTask, setActiveTask] = useState(null);
  const tasks = useSelector((state) => state.trello.tasks);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  window.addEventListener("beforeunload", () => {
    localStorage.setItem("columns", JSON.stringify(columns));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  let timerId;
  const debounce = (callback, timerId) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, 50);
  };

  useEffect(() => {
    if (toggle) {
      dispatch(
        postTasks(
          tasks.map((task) => {
            return {
              content: task.content,
              columnName: columns.find((column) => column.id === task.columnId)
                .title,
              column: task.columnId,
            };
          })
        )
      );
    }
  }, [toggle]);

  const handleAddColumn = () => {
    dispatch(addCol());
  };

  const onDragStart = (e) => {
    if (e.active.data.current?.type === "Column") {
      setActiveCol(e.active.data.current.column);
      return;
    }
    if (e.active.data.current?.type === "Task") {
      setActiveTask(e.active.data.current.task);
      return;
    }
  };
  const onDragEnd = (e) => {
    dispatch(
      postTasks(
        tasks.map((task) => {
          return {
            content: task.content,
            columnName: columns.find((column) => column.id === task.columnId)
              .title,
            column: task.columnId,
          };
        })
      )
    );
    setActiveCol(null);
    setActiveTask(null);
    const { active, over } = e;
    if (!over) return;
    const activeColId = active.id;
    const overColId = over.id;
    if (activeColId === overColId) return;
    const activeColIndex = columns.findIndex((col) => col.id === activeColId);
    const overColIndex = columns.findIndex((col) => col.id === overColId);
    const arrSorted = arrayMove(columns, activeColIndex, overColIndex);
    dispatch(changeCol(arrSorted));
  };

  const onDragOver = (e) => {
    const { active, over } = e;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    if (isActiveTask && isOverTask) {
      const activeIndex = tasks.findIndex((task) => task.id === activeId);
      const overIndex = tasks.findIndex((task) => task.id === overId);
      let arrSorted;
      if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
        const newTasks = tasks.map((task, index) => {
          if (index === activeIndex) {
            return {
              ...task,
              columnId: tasks[overIndex].columnId,
            };
          }
          return task;
        });
        arrSorted = arrayMove(newTasks, activeIndex, overIndex);
      } else {
        arrSorted = arrayMove(tasks, activeIndex, overIndex);
      }
      debounce(() => {
        dispatch(changeTask(arrSorted));
      }, timerId);
    }

    const isOverColumn = over.data.current?.type === "Column";

    if (isActiveTask && isOverColumn) {
      const activeIndex = tasks.findIndex((task) => task.id === activeId);

      const newTasks = tasks.map((task, index) => {
        if (index === activeIndex) {
          return {
            ...task,
            columnId: overId,
          };
        }
        return task;
      });
      const arrSorted = arrayMove(newTasks, activeIndex, activeIndex);
      debounce(() => {
        dispatch(changeTask(arrSorted));
      }, timerId);
    }
  };
  return (
    <div className="container">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="trello">
          <div className="row">
            <SortableContext items={columnsId}>
              {columns.map((column) => {
                return (
                  <ColumnContainer
                    key={column.id}
                    column={column}
                    tasks={tasks.filter(
                      (tasks) => tasks.columnId === column.id
                    )}
                  />
                );
              })}
            </SortableContext>
          </div>
          <button
            className="btn-add-column"
            onClick={() => {
              handleAddColumn();
            }}
          >
            <i className="pi pi-plus-circle"></i>
            Add Column
          </button>
        </div>

        {createPortal(
          <DragOverlay>
            {activeCol && (
              <ColumnContainer
                column={activeCol}
                tasks={tasks.filter((tasks) => tasks.columnId === activeCol.id)}
              />
            )}
            {activeTask && <TaskCard task={activeTask} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      {status === "pending" ? <Loading isLoading={true} /> : ""}
      {status === "pending-post" ? (
        <span className="server">Đang đồng bộ dữ liệu với server.....</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
