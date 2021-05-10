const { UserInputError } = require("apollo-server");
const updateUserEmail = require("../../domain/interactors/update-user-email")(
  null
);
const getUserById = require("../../domain/interactors/get-user-by-id")(null);

const UserController = {
  updateUserEmail: async (parent, args, context) => {
    if (args.id < 1) {
      throw new UserInputError("Invalid argument value", {
        argumentName: "id",
      });
    }

    return updateUserEmail(args.id, args.email);
  },

  getUserById: async (parent, args, context) => {
    if (args.id < 1) {
      throw new UserInputError("Invalid argument value", {
        argumentName: "id",
      });
    }

    return getUserById(args.id);
  },
};

module.exports = UserController;
