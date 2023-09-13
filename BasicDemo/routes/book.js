const express = require("express")
const router = express.Router()
const {
  createBook,
  getAllBooks,
  updateBook,
  getBookById
} = require("../controller/booksController")

// Create a new book
router.post("/", createBook)
// Retrieve all books
router.get("/", getAllBooks)
router.put("/:id", updateBook)
module.exports = router
