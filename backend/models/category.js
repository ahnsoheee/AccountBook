const connect = require("../db/mysql");

class Category {
  async read(user) {
    const db = await connect();
    const sql = "SELECT id, name FROM category WHERE user_id = (?) and type = (?)";
    const params = [user.id, user.type];
    const [result] = await db.query(sql, params);
    return result;
  }

  async create(category) {
    const db = await connect();
    let sql;
    const params = [category.type, category.name, category.user_id];
    sql = "SELECT id FROM category WHERE type = (?) and name = (?) and user_id = (?)";
    const [prev] = await db.query(sql, params);
    if (!prev.length) {
      sql = "INSERT INTO category(type, name, user_id) VALUES(?, ?, ?)";
      const [result] = await db.query(sql, params);
      return result;
    }
    return false;
  }

  async update(category) {
    const db = await connect();
    const sql = "UPDATE category SET name = (?) WHERE id = (?)";
    const params = [category.name, category.id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async delete(category) {
    const db = await connect();
    const sql = "DELETE FROM category WHERE id = (?)";
    const params = [category.id];
    const [result] = await db.query(sql, params);
    return result;
  }
}

const category = new Category();
module.exports = category;
