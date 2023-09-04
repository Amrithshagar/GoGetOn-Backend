const express = require("express");
const router = express.Router();

const TaskController = require("../controller/TaskController");

router.post("/saveTask", TaskController.saveTask);
router.post("/", TaskController.index);

module.exports = router;
