const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bicrypt = require("bicrypt");

const tasksSchema = new Schema(
  {
    taskGroup: {
      type: String,
    },
    taskName: {
      type: String,
    },
    startTime: {
      type: Date,
    },
    startDate: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    priority: {
      type: String,
    },
    deadline: {
      type: Date,
    },
  },
  { timestamps: true }
);

const TasksModel = mongoose.model("TasksModel", tasksSchema);
module.exports = TasksModel;
