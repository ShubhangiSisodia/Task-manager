import React from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
      <TaskForm />
      <div className="mt-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="text-gray-500 text-center">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
