import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';  // Import dotenv
import taskRoutes from './routes/taskRoutes.js';
import mongoose from 'mongoose';

dotenv.config();  // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;  // Use the PORT variable from .env
const dbURI = process.env.DATABASE_URL // Replace with your MongoDB Atlas URI


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });


// app.use('/tasks', taskRoutes);  // All item routes will be prefixed with /api
app.use('/api/tasks', taskRoutes);  // Prefix with '/api/tasks' instead of just '/tasks'


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
