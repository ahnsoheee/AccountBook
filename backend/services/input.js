const inputModel = require("../models/input");

class InputService {
  async readCategory(user) {
    let result;
    try {
      result = await inputModel.getCategory(user);
    } catch (err) {
      return false;
    }
    return result;
  }

  async readAccount(user) {
    let result;
    try {
      result = await inputModel.getAccount(user);
    } catch (err) {
      return false;
    }
    return result;
  }

  async deleteCategory(category) {
    let result;
    try {
      result = await inputModel.deleteCategory(category);
    } catch (err) {
      return false;
    }
    return result;
  }
}

const inputService = new InputService();
module.exports = inputService;
