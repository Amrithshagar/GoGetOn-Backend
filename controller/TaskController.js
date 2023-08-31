const Tasks = require("../model/TasksModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saveTask = (req, res, next) => {
  let tasks = new Tasks({
    taskGroup: req.body.taskGroup,
    taskName: req.body.taskName,
    startTime: req.body.startTime,
    startDate: req.body.startDate,
    endTime: req.body.endTime,
    endDate: req.body.endDate,
    priority: req.body.priority,
    deadline: req.body.deadline,
  });
  tasks
    .save()
    .then((response) => {
      res.json({
        message: "Task Added Successfully",
      });
    })
    .catch((error) => {
      console.error("Error adding tasks:", error);
      res.status(500).json({
        message: "An error occurred while adding the tasks.",
        error: error.message,
      });
    });
};

const index = (req, res, next) => {
  Tasks.find()
    .then((response) => {
      res.json({
        response,
        message: "Fetched tasks successfully",
      });
    })
    .catch((error) => {
      console.error("Error fetching tasks:", error);
      res.status(500).json({
        message: "An error occurred while fetching the tasks.",
        error: error.message,
      });
    });
};

module.exports = {
  saveTask,
  index,
};
