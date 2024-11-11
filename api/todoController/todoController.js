const todoList = [];
let idCounter = 1; // Initialize a counter outside the function

const getallToDo = (req, res) => {
  res.status(400).json(todoList);
};

const postTodo = (req, res) => {
  const { todo, status } = req.body;
  let counter = idCounter++;
  const dateTime = new Date().toISOString(); // Get the current date and time in ISO format

  console.log(todoList, "checking todoList");
  try {
    if (!todo || typeof status === "undefined") {
      // Check if todo or status is missing
      res.status(401).json({ message: "missing data" });
    } else {
      todoList.push({ dateTime, counter, todo, status });
      res.status(200).json(todoList);
    }
  } catch (e) {
    console.log(e, "getting error");
    res.status(500).json({ message: "Internal server error" });
  }
};

const putToDo = (req, res) => {
  console.log("checking put");
  res.status(400).json({ message: " post todo list" });
};
const patchToDo = (req, res) => {
  res.status(400).json({ message: " patch todo list" });
};
const delteToDo = (req, res) => {
  res.status(400).json({ message: " delete todo list" });
};

module.exports = { getallToDo, postTodo, putToDo, patchToDo, delteToDo };
