const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./Book.modal");
const { ObjectId } = mongoose.Types; 

const port = process.env.PORT || 4040;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("Error connecting to MongoDB:", error));

// Insert a book
app.post("/upload-book", async (req, res) => {
  try {
    // console.log(req)
    const {bookTitle , authorName , imageURL , category , bookDescription , bookPDFURL} = req.body;
    const book = new Book({
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL
    })
    await book.save()
    res.status(200).json(book);
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all books
app.get("/all-books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error getting all books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update a book
app.patch("/book/:id", async (req, res) => {
  const id = req.params.id;
  const updateBookData = req.body;
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, updateBookData, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a book
app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
     res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//find by category
app.get("/all books",async (req,res)=>{
  const result = await bookcollection.find();
  res.send(result);
})

//to get single book data
app.get("/book/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Book.findById(id);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.send(result);
  } catch (error) {
    console.error("Error finding book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
