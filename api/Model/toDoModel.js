import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const ToDoSchema = new Schema({
  todo: {
    // Renaming 'toDo' to 'todo' for consistency
    type: String,
    required: true,
  },
  counter: {
    type: Number,
    required: true,
  },
  status: {
    // Renaming 'Status' to 'status' for consistency and to match common conventions
    type: String,
    enum: ["in-progress", "completed", "pending"], // Assuming task status as options
    default: "pending",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const todoModel = model("todoModel", ToDoSchema);

export default todoModel;
