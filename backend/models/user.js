const connect = require("../db/mysql");

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
    const sql = "SELECT id, pw, name FROM user WHERE id = (?) and pw = (?)";
    const params = [user.id, user.pw];
    const [result] = await db.query(sql, params);
    return result[0];
  }
}

const user = new User();
module.exports = user;
