require("dotenv").config();
const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserService {
  async signup(user) {
    let result;
    const salt = await bcrypt.genSalt(10);
    const password = bcrypt.hashSync(user.pw, salt);
    try {
      result = await userModel.create({ id: user.id, pw: password, name: user.name });
    } catch (err) {
      return false;
    }
    return true;
  }

  async signin(user) {
    let result;
    try {
      result = await userModel.findUser(user);
      if (result) {
        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.SECRET_KEY
        );
        return token;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
}

const userService = new UserService();
module.exports = userService;
