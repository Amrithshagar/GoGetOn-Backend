const NewHabit = require("../model/NewHabitModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saveNewHabit = (req,res,next)=>{
    let newhabit = new NewHabit({
        newhabitname: req.body.newhabitname,
        description: req.body.description,
        intervaltype: req.body.intervaltype,
        intervaloption: req.body.intervaloption,
        prioritylevel: req.body.prioritylevel,
        remindertype: req.body.remindertype,
        preferedtime: req.body.preferedtime,
    });
    newhabit
        .save()
        .then((response)=>{
            res.json({
                message: "Habit Added Successfully",
            });
        })
        .catch((error)=>{
            console.error("Error in Adding Habits: ", error);
            res.status(500).json({
                message: "An error occurred while adding the Habit.",
                error: error.message,
            });
        });
};

const indexHabit = (req,res,next)=>{
    NewHabit.find()
        .then((response)=>{
            res.json({
                response,
                message: "Fetched Habits successfully",
            });
        })
        .catch((error)=>{
            console.log("Error fetching Habits:", error);
            res.status(500).json({
                message: "An error occurred while fetching the tasks.",
                error: error.message,
            });
        });
};

const deleteHabit = (req, res, next) => {
    const habitId = req.params.id;
  
    // Use mongoose to find and remove the habit by its ID
    NewHabit.findByIdAndRemove(habitId)
      .then((response) => {
        if (!response) {
          return res.status(404).json({
            message: "Habit not found",
          });
        }
        res.json({
          message: "Habit deleted successfully",
        });
      })
      .catch((error) => {
        console.error("Error deleting Habit: ", error);
        res.status(500).json({
          message: "An error occurred while deleting the Habit.",
          error: error.message,
        });
      });
  };

module.exports = {
    saveNewHabit,
    indexHabit,
    deleteHabit,
};