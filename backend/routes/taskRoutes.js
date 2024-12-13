// /*
// what is express router do? 


// */


// import express from 'express'; // Import express using ES modules  // #
// const router = express.Router(); // #

// // In-memory "database" for demo purposes
// let items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];  // this is only for demp purpose  // #

// // GET /items - Get all items
// router.get('/items', (req, res) => {
//   res.json(items);  // Send the list of items as the response
// });

// // GET /items/:id - Get a specific item by ID
// router.get('/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');
//   res.json(item);  // Send the found item as the response
// });

// // POST /items - Create a new item
// router.post('/items', (req, res) => {
//   const newItem = { id: items.length + 1, name: req.body.name }; // Create a new item
//   items.push(newItem);  // Add it to the list
//   res.status(201).json(newItem);  // Respond with the created item
// });

// // PUT /items/:id - Update an existing item by ID
// router.put('/items/:id', (req, res) => {
//   const item = items.find(i => i.id === parseInt(req.params.id));
//   if (!item) return res.status(404).send('Item not found');
//   item.name = req.body.name;  // Update the item
//   res.json(item);  // Respond with the updated item
// });

// // DELETE /items/:id - Delete an item by ID
// router.delete('/items/:id', (req, res) => {
//   const index = items.findIndex(i => i.id === parseInt(req.params.id));
//   if (index === -1) return res.status(404).send('Item not found');
//   items.splice(index, 1);  // Remove the item from the list
//   res.status(204).send();  // No content, just a success status
// });

// export default router;  // Export the router



import express from 'express';
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

// Create a new task
router.post('/', createTask);

// Get all tasks
router.get('/', getTasks);

// Get a task by IDs
router.get('/:id', getTaskById);

// Update a task by ID
router.put('/:id', updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

export default router;
