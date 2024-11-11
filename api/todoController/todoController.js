const getallToDo = (req, res) => {
  res.status(400).json({ message: "all all todo list" });
};

const postTodo = (req, res) => {
  res.status(400).json({ message: " post todo list" });
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
