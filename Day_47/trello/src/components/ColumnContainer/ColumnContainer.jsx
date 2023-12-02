import { SortableContext, useSortable } from "@dnd-kit/sortable";
import React, { useRef, useState, useMemo } from "react";
import { CSS } from "@dnd-kit/utilities";
import "./ColumnContainer.css";
import TaskCard from "../TaskCard/TaskCard";
import { useDispatch } from "react-redux";
import { trelloSlice } from "../../redux/slice/trelloSlice";
const { deleteCol, updateCol, addTask } = trelloSlice.actions;

function ColumnContainer({ column, tasks }) {
  const dispatch = useDispatch();
  const deleteColRef = useRef();
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={style} className="column-shadow"></div>;
  }

  return (
    <div className="column" ref={setNodeRef} style={style}>
      <div
        className="column-header"
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
      >
        <div>
          <span>0</span>
          <div className="column-title">
            {!editMode && column.title}
            {editMode && (
              <input
                className="title-change"
                defaultValue={column.title}
                onChange={(e) => {
                  dispatch(
                    updateCol({
                      id: column.id,
                      title: e.target.value,
                    })
                  );
                }}
                autoFocus
                onBlur={() => {
                  setEditMode(false);
                }}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setEditMode(false);
                }}
              />
            )}
          </div>
        </div>
        <div>
          <i
            className="pi pi-trash"
            ref={deleteColRef}
            id={column.id}
            onClick={() => {
              dispatch(deleteCol(deleteColRef.current.id));
            }}
          ></i>
        </div>
      </div>
      <div className="column-main">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
        </SortableContext>
      </div>
      <div className="column-footer">
        <button
          className="btn-add-task"
          onClick={() => {
            dispatch(addTask(column.id));
          }}
        >
          <i className="pi pi-plus-circle"></i>
          Add Task
        </button>
      </div>
    </div>
  );
}

export default ColumnContainer;
