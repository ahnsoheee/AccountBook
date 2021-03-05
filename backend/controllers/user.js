require("dotenv").config();
const userService = require("../services/user");

exports.signup = async (req, res, next) => {
  const userDTO = req.body;
  try {
    const result = await userService.signup(userDTO);
    res.json({ result: result });
  } catch (err) {
    console.error(err);
    res.json({ result: false });
  }
};

exports.signin = async (req, res, next) => {
  const userDTO = req.body;
  try {
    const token = await userService.signin(userDTO);
    if (token) {
      res.cookie("token", token, { httpOnly: true });
    }
    res.json({ result: token });
  } catch (err) {
    console.log(err);
    res.json({ result: false });
  }
};

exports.auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token) {
      const user = await userService.auth(token);
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.json({ result: false });
  }
};

exports.logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.json({ result: true });
  } catch (err) {
    console.error(err);
    res.json({ result: false });
  }
};
