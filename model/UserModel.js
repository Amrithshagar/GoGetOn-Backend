const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bicrypt = require("bicrypt");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
