const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.json({
          message: "User Added Successfully!",
        });
      })
      .catch((error) => {
        res.json({
          message: "An error ocurred!",
        });
      });
  });
};

const login = (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ name: user.fullname }, "verySecretValue", {
            expiresIn: "1h",
          });
          res.json({
            message: "Login Succesful!",
            token,
          });
        } else {
          console.log(password, user.password);
          res.json({
            message: "Password does not match",
          });
        }
      });
    } else {
      res.json({
        message: "no user found!",
      });
    }
  });
};

module.exports = {
  register,
  login,
};
