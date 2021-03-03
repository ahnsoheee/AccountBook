require("dotenv").config();
const userModel = require("../models/user");

class UserService {
  async signup(user) {
    let result;
    try {
      result = await userModel.create(user);
    } catch (err) {
      return false;
    }
    return true;
  }
}

const userService = new UserService();
module.exports = userService;
