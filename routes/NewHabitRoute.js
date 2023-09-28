const express = require("express");
const router = express.Router();

const NewHabitController = require("../controller/NewHabitController");

router.post("/saveNewHabit", NewHabitController.saveNewHabit);
router.post("/",NewHabitController.indexHabit);
router.delete("/:id", NewHabitController.deleteHabit);

module.exports = router;