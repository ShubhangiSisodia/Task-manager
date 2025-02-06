import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now(), ...action.payload };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
        localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
