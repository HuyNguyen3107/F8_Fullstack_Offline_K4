import React, { useState } from "react";
import "../TaskCard/TaskCard.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { trelloSlice } from "../../redux/slice/trelloSlice";
const { deleteTask, updateTask } = trelloSlice.actions;

function TaskCard({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return <div ref={setNodeRef} style={style} className="task-shadow"></div>;
  }

  if (editMode) {
    return (
      <div
        className="task"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="task-content-edit"
          defaultValue={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => {
            dispatch(
              updateTask({
                taskId: task.id,
                newContent: e.target.value,
              })
            );
          }}
        ></textarea>
      </div>
    );
  }

  return (
    <div
      className="task"
      onClick={toggleEditMode}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="task-content">
        <pre>{task.content}</pre>
      </div>
      <div
        className="task-delete"
        onClick={() => {
          dispatch(deleteTask(task.id));
        }}
      >
        <i className="pi pi-trash"></i>
      </div>
    </div>
  );
}

export default TaskCard;
