const todoList = [];
let idCounter = 1; // Initialize a counter outside the function

const getallToDo = (req, res) => {
  res.status(400).json(todoList);
};

const postTodo = (req, res) => {
  const { todo, status } = req.body;
  let counter = idCounter++;
  const dateTime = new Date().toISOString().slice(1, 10); // Get the current date and time in ISO format
  try {
    if (!todo || typeof status === "undefined") {
      // Check if todo or status is missing
      res.status(401).json({ message: "missing data" });
    } else {
      todoList.push({ dateTime, counter, todo, status });
      res.status(200).json({ message: "successfully submitted" });
    }
  } catch (e) {
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
