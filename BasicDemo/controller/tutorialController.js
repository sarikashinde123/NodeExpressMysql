const dbConnection = require('../server'); // Import the database connection
// ID int,Title varchar(255),Description varchar(255),published boolean
//create tutorial

createTutorial = (req,res) =>{
    const body = req.body;
    console.log("body", body)
    const sql = 'INSERT INTO Tutorial (ID, Title, Description, published) VALUES (?, ?, ?, ?)';
    const values = [body.ID, body.Title, body.Description, body.published];
    dbConnection.query(sql,values, (err, results) => {
        if (err) {
          console.error('Error retrieving items:', err);
          res.status(500).json({ message: 'Internal server error' });
        } else {
          res.status(200).json(results);
        }
      });
}

getAllTutorial = (req,res) => {
     dbConnection.query("Select * from Tutorial",(err, results) =>{
        if (err) {
            console.error('Error retrieving items:', err);
            res.status(500).json({ message: 'Internal server error' });
          } else {
            res.status(200).json(results);
          }
     });
}

getTutorialById =( req,res) =>{
    const sql= "select * from Tutorial where ID = ?";
    const values = [req.params.id];
    dbConnection.query(sql,values, (err, results) => {
        if (err) {
            console.error('Error retrieving items:', err);
            res.status(500).json({ message: 'Internal server error' });
          } else {
            res.status(200).json(results);
          }
    });
}

updateTutorial = (req,res) => {
     const sql = "UPDATE Tutorial SET Title = ?, Description = ? where ID = ?";
     console.log("req.body.Title", req.body)
     const values = [req.body.Title, req.body.Description, req.params.id];
     dbConnection.query(sql,values, (err, results) => {
        if (err) {
            console.error('Error retrieving items:', err);
            res.status(500).json({ message: 'Internal server error' });
          } else {
            res.status(200).json({ message: 'Item updated successfully', affectedRows: results.affectedRows });
          }
    });
}

deleteTutorial = (req,res) =>{
    const sql =" DELETE from Tutorial where ID = ?"
    const value = [req.params.id];
    dbConnection.query(sql,value, (err,results) => {
        if (err) {
            console.error('Error retrieving items:', err);
            res.status(500).json({ message: 'Internal server error' })
        } else {
           res.status(200).json({ message: 'Item deleted successfully', affectedRows: results.affectedRows });
        }
        
    })

}

module.exports ={
    createTutorial,
    getAllTutorial,
    getTutorialById,
    updateTutorial,
    deleteTutorial
  }