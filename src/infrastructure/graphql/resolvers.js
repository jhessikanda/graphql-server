const {
  updateUserEmail,
  getUserById,
} = require("../controllers/user-controller");

const { listAllBooks } = require("../controllers/book-controller");

module.exports = {
  Query: {
    books: listAllBooks,
    userWithID: getUserById,
  },
  Mutation: {
    updateUserEmail: updateUserEmail,
  },
};
