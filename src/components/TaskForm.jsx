import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/taskSlice";

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({ taskName: "", description: "", dueDate: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskToEdit) {
      setTask({
        taskName: taskToEdit.taskName,
        description: taskToEdit.description,
        dueDate: taskToEdit.dueDate,
      });
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.taskName || !task.description) return;

    if (taskToEdit) {
      dispatch(editTask({ id: taskToEdit.id, updatedTask: task }));
    } else {
      dispatch(addTask({ ...task, status: "Pending" }));
    }

    setTask({ taskName: "", description: "", dueDate: "" });
    setTaskToEdit(null); 
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.taskName}
        onChange={(e) => setTask({ ...task, taskName: e.target.value })}
        className="border p-2 rounded"
      />
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={task.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
