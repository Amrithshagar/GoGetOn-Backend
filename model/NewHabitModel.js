const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newhabitsSchema = new Schema (
  {
    newhabitname: {
        type: String,
    },
    description: {
        type: String,
    },
    intervaltype: {
        type: String,
    },
    intervaloption: {
        type: String,
    },
    prioritylevel: {
        type: Number,
    },
    remindertype: {
        type: String,
    },
    preferedtime: {
        type: String,
    }   
  },
  { timestamps: true }   
);

const NewHabitModel = mongoose.model("NewHabitModel", newhabitsSchema);
module.exports = NewHabitModel;