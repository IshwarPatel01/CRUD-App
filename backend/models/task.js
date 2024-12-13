import mongoose from 'mongoose';

// Define the schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Create the model
const Task = mongoose.model('Task', taskSchema);

// Export the model
export default Task;
