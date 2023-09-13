
const dbConnection = require('../server'); // Import the database connection

getData = (req, res) => {
  const data = dbConnection.query(`select * from book`);
  res.json(JSON.stringify(data));
}
// Create a new book
createBook = (req, res) => {
    const newbook = req.body;
    books.push(newbook);
    res.status(201).json(newbook);
  };

  // Retrieve all books
getAllBooks = (req, res) => {
  dbConnection.query('SELECT * FROM book', (err, results) => {
    if (err) {
      console.error('Error retrieving items:', err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(200).json(results);
    }
  });
    //res.status(200).json(books);
  };

// Update an item by ID
  updateBook = (req, res) => {
    const id = req.params.id;
    const updateBook = req.body;
    const index = books.findIndex((item) => item.id === id);
    if (index === -1) {
      res.status(404).json({ message: 'Item not found' });
    } else {
        books[index] = updateBook;
       res.status(200).json(updateBook);
    }
  };
  
  module.exports ={
    updateBook, getAllBooks, createBook, getData
  }