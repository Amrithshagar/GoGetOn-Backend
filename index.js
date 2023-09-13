const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const UserRoute = require("./routes/UserRoute");
const AuthRoute = require("./routes/AuthRoute");
const TasksRoute = require("./routes/TasksRoute");

const username = "amrithshagar20";
const password = "Amrith2000"; // Provide the raw password
const clusterName = "clusteridealize";
const databaseName = "idealize_data";

const uri = process.env.MONGODB_URI;
// const uri = `mongodb+srv://${username}:${encodeURIComponent(
//   password
// )}@${clusterName}.sncus4j.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});
db.once("open", (err) => {
  console.log("Database connection established");
});
const app = express();

app.use(morgan("dev"));

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Backend",
  });
});
app.use("/api/UserRoute", UserRoute);
app.use("/api", AuthRoute);
app.use("/api/TasksRoute", TasksRoute);
module.exports = app;
