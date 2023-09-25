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
                message: "An error occurred while adding the tasks.",
                error: error.message,
            });
        });
};

module.exports = {
    saveNewHabit,
};