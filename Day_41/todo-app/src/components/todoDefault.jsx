import React, { Component } from "react";
import "../assets/css/home.css";

export class TodoDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props._id,
      todo: props.todo,
      onDeleteTodo: props.onDeleteTodo,
      onChange: props.onChange,
    };
  }
  render() {
    return (
      <div className="edit">
        <button
          className="change"
          onClick={(e) => {
            const inputEL = e.target.parentElement.previousElementSibling;
            inputEL.disabled = false;
            inputEL.value = this.state.todo;
            this.state.onChange(true, this.state._id);
          }}
        >
          Sửa
        </button>
        <button
          className="delete"
          onClick={() => {
            this.state.onDeleteTodo(this.state._id);
          }}
        >
          Xóa
        </button>
      </div>
    );
  }
}

export default TodoDefault;
