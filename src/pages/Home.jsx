import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import { useSelector } from "react-redux";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <TaskForm />
      <div className="mt-6">
        <div className="mb-6 flex gap-4 justify-center">
          <button
            className={`px-6 py-2 text-sm font-medium rounded-lg transition duration-300 ${
              filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-lg transition duration-300 ${
              filter === "Pending" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-lg transition duration-300 ${
              filter === "In Progress" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("In Progress")}
          >
            In Progress
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-lg transition duration-300 ${
              filter === "Completed" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p className="text-center text-gray-500">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
