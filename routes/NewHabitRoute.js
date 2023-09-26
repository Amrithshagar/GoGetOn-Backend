const express = require("express");
const router = express.Router();

const NewHabitController = require("../controller/NewHabitController");

router.post("/saveNewHabit", NewHabitController.saveNewHabit);
router.post("/",NewHabitController.indexHabit);

module.exports = router;