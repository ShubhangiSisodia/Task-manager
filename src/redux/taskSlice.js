import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage if available
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
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Save tasks to localStorage
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
        localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Save updated tasks to localStorage
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Save tasks to localStorage after deletion
    },
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
