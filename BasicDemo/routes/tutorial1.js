const express = require("express")
const router = express.Router()
const tutorials = require("../controller/tutorialController1");
  // Create a new Tutorial
  router.post("/create", tutorials.createTutorial);
  router.get('/getAllTutorial', tutorials.getAllTutorial);
  router.put('/updateTutorial/:id', tutorials.updateTutorial);
  router.delete("/deleteTutorial/:id", tutorials.deleteTutorial);
  router.get('/findone/:id', tutorials.findOneTutorialbyId);
  module.exports = router;