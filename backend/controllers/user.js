require("dotenv").config();
const userService = require("../services/user");

exports.signup = async (req, res, next) => {
  const userDTO = req.body;
  const result = await userService.signup(userDTO);
  res.json({ result: result });
};

exports.signin = async (req, res, next) => {
  const userDTO = req.body;
  const token = await userService.signin(userDTO);
  if (token) {
    res.cookie("token", token, { httpOnly: true });
  }
  res.json({ result: token });
};

exports.auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    const user = await userService.auth(token);
    res.json({ result: user });
  }
};
