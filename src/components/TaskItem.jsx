import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, updatedTask }));
    setEditing(false);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition duration-300 mb-4">
      <div className="flex justify-between items-start">
        <div>
          {editing ? (
            <input
              type="text"
              name="taskName"
              value={updatedTask.taskName}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-md"
            />
          ) : (
            <h3 className="text-xl font-semibold text-gray-800">{task.taskName}</h3>
          )}

          {editing ? (
            <textarea
              name="description"
              value={updatedTask.description}
              onChange={handleChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-md mt-1"
            />
          ) : (
            <p className="text-gray-600 text-sm">{task.description}</p>
          )}

          {editing ? (
            <input
              type="date"
              name="dueDate"
              value={updatedTask.dueDate}
              onChange={handleChange}
              className="px-2 py-1 border border-gray-300 rounded-md mt-1"
            />
          ) : (
            <p className="text-gray-500 text-xs mt-2">Due: {task.dueDate}</p>
          )}
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mt-2">
            <span className="font-medium text-gray-600">Status:</span>
            {editing ? (
              <select
                name="status"
                value={updatedTask.status}
                onChange={handleChange}
                className="px-2 py-1 border border-gray-300 rounded-md"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            ) : (
              <span className="text-gray-500">{task.status}</span>
            )}
          </div>

          <div className="mt-3 flex gap-2">
            <button
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition duration-200"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Cancel" : "Edit"}
            </button>

            {editing && (
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={handleSave}
              >
                Save
              </button>
            )}

            <button
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-200"
              onClick={() => dispatch(deleteTask(task.id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
