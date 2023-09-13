const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: process.env.HOST || 'localhost',        // Database host (e.g., localhost)
  user: process.env.USER || 'root',    // Your MySQL username
  password: process.env.PASSWORD || 'Sarika@1234',// Your MySQL password
  database: process.env.DATABASE || 'bookdb',// Your MySQL database name
});

// Connect to the database
dbConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  // Make the database connection available to the rest of your application
module.exports = dbConnection;