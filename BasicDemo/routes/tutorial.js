const express = require("express")
const router = express.Router()
const {
    getAllTutorial, 
    createTutorial,
    getTutorialById,
    updateTutorial,
    deleteTutorial
  } = require("../controller/tutorialController");

  router.get("/", getAllTutorial);
  router.post("/", createTutorial);
  router.get("/:id", getTutorialById);
  router.put("/:id", updateTutorial);
  router.delete("/:id", deleteTutorial);

  module.exports = router;