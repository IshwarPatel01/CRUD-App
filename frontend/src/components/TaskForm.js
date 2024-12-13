import React, { useState } from 'react';
import axios from '../utils/axios';

const TaskForm = ({ task, setTask, updateTask }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [completed, setCompleted] = useState(task ? task.completed : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      // Update existing task
      axios.put(`/tasks/${task._id}`, { title, description, completed })
        .then(response => {
          updateTask(response.data);
          setTask(null); // Clear task after update
        })
        .catch(error => console.error('Error updating task:', error));
    } else {
      // Create new task
      axios.post('/tasks', { title, description, completed })
        .then(response => {
          setTask(null); // Clear form after adding task
        })
        .catch(error => console.error('Error creating task:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <h2 className="text-xl font-bold mb-4">{task ? 'Edit Task' : 'Create Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-3 p-2 border border-gray-300 rounded-md w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-3 p-2 border border-gray-300 rounded-md w-full"
        required
      ></textarea>
      <div className="flex items-center">
        <label className="mr-2">Completed</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        {task ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  );
};

export default TaskForm;
