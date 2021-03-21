const connect = require("../db/mysql");

class Account {
  async read(user) {
    const db = await connect();
    const sql = "SELECT id, name, asset FROM account WHERE user_id = (?)";
    const params = [user.id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async create(account) {
    const db = await connect();
    let sql, params;
    sql = "SELECT id FROM account WHERE name = (?) and user_id = (?)";
    params = [account.name, account.user_id];
    const [prev] = await db.query(sql, params);
    if (!prev.length) {
      sql = "INSERT INTO account(name, asset, user_id) VALUES(?, ?, ?)";
      params = [account.name, account.asset, account.user_id];
      const [result] = await db.query(sql, params);
      return result;
    }
    return false;
  }

  async update(account) {
    const db = await connect();
    const sql = "UPDATE account SET name = (?) asset = (?) WHERE id = (?)";
    const params = [account.name, account.asset, account.id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async delete(account) {
    const db = await connect();
    const sql = "DELETE FROM account WHERE id = (?)";
    const params = [account.id];
    const [result] = await db.query(sql, params);
    return result;
  }
}

const account = new Account();
module.exports = account;
