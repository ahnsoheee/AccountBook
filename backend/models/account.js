const connect = require("../db/mysql");

class Account {
  async getAccount(user) {
    const db = await connect();
    const sql = "SELECT id, name FROM account WHERE user_id = (?)";
    const params = [user.id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async createAccount(account) {
    const db = await connect();
    const sql = "INSERT INTO account(name, asset, user_id) VALUES(?, ?, ?)";
    const params = [account.name, account.asset, account.user_id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async updateAccount(account) {
    const db = await connect();
    const sql = "UPDATE account SET name = (?) asset = (?) WHERE id = (?)";
    const params = [account.name, account.asset, account.id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async deleteAccount(account) {
    const db = await connect();
    const sql = "DELETE FROM account WHERE id = (?)";
    const params = [account.id];
    const [result] = await db.query(sql, params);
    return result;
  }
}

const account = new Account();
module.exports = account;
