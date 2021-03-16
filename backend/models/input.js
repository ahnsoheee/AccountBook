const connect = require("../db/mysql");

class Input {
  async getCategory(user) {
    const db = await connect();
    const sql = "SELECT id, name FROM category WHERE user_id = (?) and type = (?)";
    const params = [user.id, user.type];
    const [result] = await db.query(sql, params);
    return result;
  }

  async getAccount(user) {
    const db = await connect();
    const sql = "SELECT id, name FROM account WHERE user_id = (?)";
    const params = [user.id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async deleteCategory(category) {
    const db = await connect();
    const sql = "DELETE FROM category WHERE id = (?)";
    const params = [category.id];
    const [result] = await db.query(sql, params);
    return result;
  }
}

const input = new Input();
module.exports = input;
