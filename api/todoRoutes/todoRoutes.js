const express = require("express");
const router = express.Router();

const todoController = require("../todoController/todoController");

router.get("/get", todoController.getallToDo);
router.post("/postTodo", todoController.postTodo);
router.put("/put'", todoController.putToDo);
router.patch("/patch", todoController.patchToDo);
router.delete("/delete", todoController.delteToDo);

module.exports = router;
