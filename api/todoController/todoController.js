import toDoModel from "../Model/toDoModel.js";
let idCounter = 1; // Initialize a counter outside the function

const getallToDo = async (req, res) => {
  const todoList = await toDoModel.find();
  if (!todoList.length) {
    return res.status(404).json({ message: "No to-do items found" });
  }

  res.status(400).json(todoList);
};

const postTodo = async (req, res) => {
  const { todo, status } = req.body;

  // Generate a counter for each new to-do item
  let counter = idCounter++;

  // Get the current date and time in ISO format (with only the date portion)
  const dateTime = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format

  try {
    // Check if 'todo' or 'status' is missing
    if (!todo || typeof status === "undefined") {
      return res.status(400).json({ message: "Missing data" });
    }

    // Create a new to-do item with the received data and additional properties
    const data = new toDoModel({
      todo: todo, // Using 'todo' from the request body
      status: status, // Using 'status' from the request body
      dateTime: dateTime, // Add the dateTime
      counter: counter, // Add the counter
    });

    // Save the new to-do item to the database
    const savedTodo = await data.save();
    console.log(savedTodo); // Optionally log the saved document for debugging

    // Return a success response
    res
      .status(201)
      .json({ message: "Successfully submitted", data: savedTodo });
  } catch (e) {
    console.error("Error saving to-do item:", e);
    res.status(500).json({ message: "Internal server error" });
  }
};

const putToDo = (req, res) => {
  const { id } = req.params;
  const position = parseInt(id);

  const { todo, status } = req.body;
  try {
    if (isNaN(position) || position < 0 || position >= todoList.length) {
      res.status(500).json({ message: "the id is not correct" });
    } else {
      res.status(200).json({ todoList: { todo, status } });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const patchToDo = (req, res) => {
  const { id } = req.params;
  const position = parseInt(id);

  const { todo, status } = req.body;
  try {
    if (isNaN(position) || position < 0 || position >= todoList.length) {
      res.status(500).json({ message: "The id is not correct" });
    } else {
      // Update only provided fields
      const updatedToDo = { ...todoList[position] };
      if (todo !== undefined) updatedToDo.todo = todo;
      if (status !== undefined) updatedToDo.status = status;

      // Update the todoList
      todoList[position] = updatedToDo;

      res.status(200).json({ todoList: updatedToDo });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteToDo = (req, res) => {
  const { id } = req.params;
  const position = parseInt(id);

  try {
    if (isNaN(position) || position < 0 || position >= todoList.length) {
      res.status(500).json({ message: "The id is not correct" });
    } else {
      // Remove the item at the specified position
      let updateList = todoList.splice(position - 1, 1);

      res.status(200).json({ message: "Successfully deleted", updateList });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getById = (req, res) => {
  const { id } = req.params;
  const position = parseInt(id);
  try {
    if (isNaN(position) || position < 0 || position >= todoList.length) {
      res.status(500).json({ message: "The id is not correct" });
    } else {
      // Remove the item at the specified position
      let obj = todoList.find((o) => o.counter === position);

      res.status(200).json({ obj });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  getallToDo,
  postTodo,
  putToDo,
  patchToDo,
  deleteToDo,
  getById,
};
