const Book = require("../models/Book.model ");

module.exports.booksController = {
  addBooks: function (req, res) {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    }).then((book) => {
      res.json(book);
    });
  },
  getBooks: function (req, res) {
    Book.find().populate("author").populate("genre").then((books) => {
      res.json(books);
    });
  },
  getBooksByGenre: function (req, res) {
    Book.find({genre: req.params.genreId}).then((books) => {
      res.json(books);
    });
  },

  removeBook: function (req, res) {
    Book.findByIdAndRemove(req.params.boockId).then(() => {
      res.json("deleted");
    });
  },
  updateBook: function (req, res) {
    Book.findByIdAndUpdate(
      req.params.boockId,
      {
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre,
      },
      { new: true }
    ).then((boock) => {
      res.json(boock);
    });
  },
  getBoockById: function (req, res) {
    Book.findById(req.params.boockId).then((boock) => {
      res.json(boock);
    });
  },
};
