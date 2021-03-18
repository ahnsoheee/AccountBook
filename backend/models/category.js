const connect = require("../db/mysql");

class Category {
  async getCategory(user) {
    const db = await connect();
    const sql = "SELECT id, name FROM category WHERE user_id = (?) and type = (?)";
    const params = [user.id, user.type];
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

const category = new Category();
module.exports = category;
