const connect = require("../db/mysql");

class Account {
  async getAccount(user) {
    const db = await connect();
    const sql = "SELECT id, name FROM account WHERE user_id = (?)";
    const params = [user.id];
    const [result] = await db.query(sql, params);
    return result;
  }
}

const account = new Account();
module.exports = account;
