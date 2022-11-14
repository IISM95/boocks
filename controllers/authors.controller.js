const Author = require("../models/Author.model");

module.exports.authorController = {
  addAuther: function (req, res) {
    Author.create({
      authorName: req.body.authorName,
      description: req.body.description,
    }).then((author) => {
      res.json(author);
    });
  },
  getAuther: function (req, res) {
    Author.find().then((author) => {
      res.json(author);
    });
  },
};
