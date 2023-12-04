import { createSlice } from "@reduxjs/toolkit";
import { notifyError, notifySuccess } from "../../helper/toast";
import {
  getApiKey,
  getTask,
  postTasks,
} from "../middlewares/trelloMiddlewares";

const initialState = {
  columns: [],
  tasks: [],
  apiKey: localStorage.getItem("apiKey")
    ? localStorage.getItem("apiKey")
    : null,
  status: "idle",
  toggle: false,
};

export const trelloSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    addCol: (state, action) => {
      const newColumn = {
        id: Math.floor(Math.random() * 10001),
        title: `Column ${state.columns.length + 1}`,
      };
      state.columns = [...state.columns, newColumn];
      state.toggle = true;
    },
    deleteCol: (state, action) => {
      const filterColumns = state.columns.filter(
        (col) => +col.id !== +action.payload
      );
      state.columns = filterColumns;

      const newTasks = state.tasks.filter(
        (task) => task.columnId !== action.payload
      );
      state.tasks = newTasks;
      state.toggle = true;
    },
    updateCol: (state, action) => {
      const newColumns = state.columns.map((col) => {
        if (+col.id !== +action.payload.id) return col;
        const title = action.payload.title;
        return { ...col, title };
      });
      state.columns = newColumns;
      state.toggle = true;
    },
    changeCol: (state, action) => {
      state.columns = action.payload;
    },
    addTask: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 10001),
        columnId: action.payload,
        content: `Task ${state.tasks.length}`,
      };
      state.tasks = [...state.tasks, newTask];
      state.toggle = true;
    },
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = newTasks;
      state.toggle = true;
    },
    updateTask: (state, action) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id + "" !== action.payload.taskId + "") {
          return task;
        }
        return { ...task, content: action.payload.newContent };
      });
      state.tasks = newTasks;
      state.toggle = true;
    },
    changeTask: (state, action) => {
      state.tasks = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getApiKey.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getApiKey.fulfilled, (state, action) => {
      localStorage.setItem("apiKey", action.payload);
      state.apiKey = action.payload;
      state.status = "fulfilled";
      notifySuccess("Chào mừng bạn đến với Chơi Lô à nhầm Trello :))");
    });
    builder.addCase(getApiKey.rejected, (state) => {
      state.status = "rejected";
      notifyError("Email khum tồn tại!");
    });

    builder.addCase(getTask.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.status = "fulfilled";
      if (+action.payload.code === +200) {
        state.columns = action.payload.data.columns.map((column) => {
          return {
            id: column.column,
            title: column.columnName,
          };
        });
        state.tasks = action.payload.data.tasks.map((task) => {
          return {
            id: task._id,
            columnId: task.column,
            content: task.content,
          };
        });
      }
      if (+action.payload.code === 401) {
        localStorage.clear();
        location.reload();
      }
    });
    builder.addCase(getTask.rejected, (state) => {
      state.status = "rejected";
      localStorage.clear();
      location.reload();
    });

    builder.addCase(postTasks.pending, (state) => {
      state.status = "pending-post";
    });
    builder.addCase(postTasks.fulfilled, (state, action) => {
      state.status = "fulfilled-post";
      if (action.payload) {
        state.toggle = false;
        notifySuccess("Cập nhật thành công gòi nghen");
      } else {
        localStorage.clear();
        location.reload();
      }
    });
    builder.addCase(postTasks.rejected, (state) => {
      state.status = "rejected-post";
      localStorage.clear();
      location.reload();
    });
  },
});
