const {tutorials} = require("../models");
const Sequelize = require("sequelize");

createTutorial = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutoriall
    const tutorial = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Tutorial in the database
    tutorials.create(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  getAllTutorial = (req,res) =>{
    tutorials.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  };
  
  findOneTutorialbyId = (req,res) => {
    const id = req.params.id;
    tutorials.findByPk(id).then(data =>{
        console.log("data", data)
        if (data) {
            res.send(data);
          } else {
            res.status(404).send({
              message: `Cannot find Tutorial with id=${id}.`
            });
          }
    });

  } 

  updateTutorial =(req,res) => {
    
    const id = req.params.id;
    tutorials.update(req.body, {
      where: { id: id }
    }).then((num) => {
        console.log("num", num)
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        })
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        })
      }
    })
  }

  deleteTutorial = (req,res) => {
    const id= req.params.id;
    tutorials.destroy( {where:{id:id}}).then(rowAffected =>{
        if(rowAffected == 1){
            res.send({msg:'Tutorial Deleted successfully.'})
        }
    });

  }



  module.exports ={createTutorial , getAllTutorial, updateTutorial, deleteTutorial, findOneTutorialbyId}




