const express = require('express');
const router = express.Router();
const { createtask ,getTasks,getSingleTask,updateTask,DeleteTask} = require("../controllers/Taskcontroller");

// Define the POST route
router.post('/', createtask);
router.get('/', getTasks);
router.get('/:id',getSingleTask);
router.patch('/:id',updateTask);
router.delete('/:id',DeleteTask);
module.exports = router;

