import { Router } from "express";
const router = Router();

import todoController from "../todoController/todoController.js";

router.get("/getallToDo", todoController.getallToDo); //done tested
router.get("/getbyidToDo/:id", todoController.getById); // done test
router.post("/postToDo", todoController.postTodo); //done test
router.put("/putToDo/:id", todoController.putToDo); // whole resource update
router.patch("/patchToDo/:id", todoController.patchToDo); // partial update
router.delete("/deleteToDo/:id", todoController.deleteToDo); // done tested

export default router;
