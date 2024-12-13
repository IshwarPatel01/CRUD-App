import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   axios.get('/tasks')
  //     .then(response => setTasks(response.data))
  //     .catch(error => console.error('Error fetching tasks:', error));
  // }, []);

  useEffect(() => {
    axios.get('/api/tasks')  // Now this will match the backend route
      .then(response => setTasks(response.data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);
  
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="mb-2 p-3 border border-gray-300 rounded-md">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.completed ? 'Completed' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
