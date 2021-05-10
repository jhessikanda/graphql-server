module.exports = (repository) => async (id, email) => ({
  code: 200,
  success: true,
  message: "Updated user email!",
  user: {
    id,
    name: "Jhe",
    email,
  },
});
