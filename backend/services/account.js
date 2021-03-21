const accountModel = require("../models/account");

class AccountService {
  async read(user) {
    let result;
    try {
      result = await accountModel.read(user);
    } catch (err) {
      return false;
    }
    return result;
  }
  async create(account) {
    let result;
    try {
      result = await accountModel.create(account);
    } catch (err) {
      return false;
    }
    return result;
  }

  async update(account) {
    let result;
    try {
      result = await accountModel.update(account);
    } catch (err) {
      return false;
    }
    return result;
  }

  async delete(account) {
    let result;
    try {
      result = await accountModel.delete(account);
    } catch (err) {
      return false;
    }
    return result;
  }
}

const accountService = new AccountService();
module.exports = accountService;
