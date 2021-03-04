const connect = require("../db/mysql");
const bcrypt = require("bcrypt");

class User {
  async create(user) {
    const db = await connect();
    const sql = "INSERT INTO user(id, pw, name) VALUES (?, ?, ?)";
    const params = [user.id, user.pw, user.name];
    const [result] = await db.query(sql, params);
    return result;
  }

  async findUser(user) {
    const db = await connect();
    const sql = "SELECT id, pw, name FROM user WHERE id = (?)";
    const params = [user.id];
    const [result] = await db.query(sql, params);
    if (result) {
      const res = bcrypt.compareSync(user.pw, result[0].pw);
      return res;
    }
  }
}

const user = new User();
module.exports = user;
