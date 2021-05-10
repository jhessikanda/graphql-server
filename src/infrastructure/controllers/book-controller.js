const books = require("../../domain/interactors/list-books")(null);

const BookController = {
  listAllBooks: (parent, args, context) => books(),
};

module.exports = BookController;
