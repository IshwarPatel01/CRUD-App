import Task from '../models/task.js'; // Importing the Task model using the ES module syntax

export const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getTasks = async (req, res) => {
    try {
      // Fetch tasks from the database
      const tasks = await Task.find();
      
      // Send the tasks in the response
      res.status(200).json(tasks);
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error(error);
      res.status(500).json({ message: 'Error fetching tasks', error });
    }
  };
  
  

// export const getTasks = (req, res) => {
//     // Example: Fetch tasks from database (MongoDB)
//   };
  





export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.status(200).send('Task deleted');
    } catch (error) {
        res.status(500).send(error);
    }
};
