import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskToEdit, setTaskToEdit] = useState(null); 

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <div className="mt-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} setTaskToEdit={setTaskToEdit} />
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
