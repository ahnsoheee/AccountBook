require("dotenv").config();
const userService = require("../services/user");

exports.signup = async (req, res, next) => {
  const userDTO = req.body;
  const result = await userService.signup(userDTO);
  res.json({ result: result });
};
