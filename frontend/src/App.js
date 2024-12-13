import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [task, setTask] = useState(null);

  const updateTask = (updatedTask) => {
    // Update the task in the list
    setTask(updatedTask);
  };

  return (
    <div className="container mx-auto">
      <TaskList />
      <TaskForm task={task} setTask={setTask} updateTask={updateTask} />
    </div>
  );
};

export default App;
