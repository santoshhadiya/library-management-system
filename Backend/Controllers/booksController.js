const BOOKS = require("../Model/booksModel");
const { findById } = require("../Model/userModel");

const addBook = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res
      .status(400)
      .json({ message: "Name and description are required" });
  }
  const book_qua = Number(body.b_quantity);
  const bookCreate = await BOOKS.create({
    b_name: body.b_name,
    b_img: body.b_img,
    b_id: body.b_id,
    b_desc: body.b_desc,
    b_quantity: book_qua,
    b_author: body.b_author,
    b_price:body.b_price,
  });
  res.status(201).json(bookCreate);
};

const sendBooks = async (req, res) => {
  const data = await BOOKS.find({});
  res.json(data);
};

const sendImg = async (req, res) => {
  const { b_id } = req.body;

  try {
    const data = await BOOKS.findOne({ b_id: b_id }, { b_img: 1, _id: 0 });

    if (!data) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(data.b_img); // Return only the image URL
  } catch (error) {
    console.error("Error fetching book image:", error); // Debugging: Log the error
    res
      .status(500)
      .json({ message: "Error fetching book image", error: error.message });
  }
};

const quaManagment = async (req, res) => {
  const { b_id, b_quantity } = req.body;

  try {
    const book_qua = b_quantity - 1;
    const book = await BOOKS.findOneAndUpdate(
      { b_id: b_id },
      {
        b_quantity: book_qua,
      }
    );

    res.json({ val: "ok" });
  } catch (error) {}
};

const quaAdd = async (req, res) => {
  const { b_id, b_quantity } = req.body;

  try {
    const book_qua = b_quantity + 1;
    const book = await BOOKS.findOneAndUpdate(
      { b_id: b_id },
      {
        b_quantity: book_qua,
      }
    );

    res.json({ val: "ok" });
  } catch (error) {}
};

const getBookById = async (req, res) => {
  const { b_id } = req.body;
  const book = await BOOKS.findOne({ b_id: b_id });
  res.json(book.b_quantity);
};

const deleteBook = async (req, res) => {
  const { b_id } = req.body;
  const book = await BOOKS.findOneAndDelete({ b_id: b_id });
  res.status(200).json({
    message: "Book deleted successfully",
    deletedBook: book,
  });
};

// update book controller
const updateBook = async (req, res) => {
  try {
    const body = req.body;

    if (!body.b_id) {
      return res.status(400).json({ message: "Book ID is required" });
    }

    const updatedBook = await BOOKS.findOneAndUpdate(
      { b_id: body.b_id }, // find book by ID
      {
        b_name: body.b_name,
        b_img: body.b_img,
        b_desc: body.b_desc,
        b_quantity: Number(body.b_quantity),
        b_author: body.b_author,
        b_price: body.b_price,
      },
      { new: true } // return updated document
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({
      message: "Book updated successfully",
      updatedBook,
    });
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(500).json({ message: "Server error while updating book" });
  }
};


module.exports = {
  addBook,
  sendBooks,
  sendImg,
  quaManagment,
  getBookById,
  quaAdd,
  deleteBook,
  updateBook,
};
