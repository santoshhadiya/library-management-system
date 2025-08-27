const ISSUE = require("../Model/issueBookModel");
const BOOKS = require("../Model/booksModel");
const BOOK_HIST = require("../Model/HistModel");

const addHistory = (req, res) => {
  const { entity_id, entity_type, book_id, date, task,name } = req.body;

  const result = BOOK_HIST.create({
    entity_id,
    entity_type,
    book_id,
    date,
    task,
    name,
  });
};

const send_Hist_Data = async (req, res) => {
  try {
    const data = await BOOK_HIST.find(); // wait for data
    res.json(data); // send as JSON
  } catch (error) {
    console.error("Error fetching add history:", error);
    res.status(500).json({ message: "Failed to fetch history" });
  }
};

module.exports = {
  addHistory,
  send_Hist_Data,
};
