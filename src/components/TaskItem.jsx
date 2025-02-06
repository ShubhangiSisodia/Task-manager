import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";

const TaskItem = ({ task, setTaskToEdit }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setTaskToEdit(task); 
  };

  return (
    <div className="p-3 border rounded-lg flex justify-between items-center bg-gray-50">
      <div>
        <h3 className="font-bold">{task.taskName}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
