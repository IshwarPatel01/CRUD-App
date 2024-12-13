import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';  // Import dotenv
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();  // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;  // Use the PORT variable from .env

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });


app.use('/api', itemRoutes);  // All item routes will be prefixed with /api


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
