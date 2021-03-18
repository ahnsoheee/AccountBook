const accountModel = require("../models/account");

class AccountService {
  async readAccount(user) {
    let result;
    try {
      result = await accountModel.getAccount(user);
    } catch (err) {
      return false;
    }
    return result;
  }
}

const accountService = new AccountService();
module.exports = accountService;
