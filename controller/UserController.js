const User = require("../model/UserModel");

const index = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "an error occured in UserController when finding user!",
      });
    });
};
const show = (req, res, next) => {
  let userName = req.body.user_name;
  User.findOne({ user_name: userName })
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      console.error("Error adding user:", error);
      res.status(500).json({
        message: "An error occurred while finding the user.",
        error: error.message,
      });
    });
};

const store = (req, res, next) => {
  let user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
  });
  user
    .save()
    .then((response) => {
      res.json({
        message: "User Added Succesfully",
      });
    })
    .catch((error) => {
      console.error("Error adding user:", error);
      res.status(500).json({
        message: "An error occurred while adding the user.",
        error: error.message,
      });
    });
};
const update = (req, res, next) => {
  let userName = req.body.user_name;
  let updatedData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
  };
  User.findOneAndUpdate(
    { user_name: userName },
    { $set: updatedData },
    { new: true } // Move this option here
  )
    .then((response) => {
      res.json({
        message: "User Updated Successfully",
        updatedUser: response, // You might want to send back the updated user for confirmation
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occurred while updating the user.",
      });
    });
};

const destroy = (req, res, next) => {
  let userName = req.body.user_name;
  User.findOneAndRemove({ user_name: userName })
    .then((response) => {
      res.json({
        message: "User removed successfuly!",
      });
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
      res.status(500).json({
        message: "An error occurred while deleting the user.",
        error: error.message,
      });
    });
};
module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
