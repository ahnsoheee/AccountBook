const connect = require("../db/mysql");

class Log {
  async findById(user) {
    const db = await connect();
    const sql =
      "SELECT id, (SELECT c.type FROM category c WHERE b.category_id=c.id) AS type, (SELECT c.name FROM category c WHERE b.category_id=c.id) AS category, title, date, cost, (SELECT a.name FROM account a WHERE a.id=b.account_id) AS account FROM board b WHERE user_id=(?) ORDER BY date DESC";
    const params = [user];
    const [result] = await db.query(sql, params);
    return result;
  }

  async add(log) {
    const db = await connect();
    const sql = "INSERT INTO board(user_id, category_id, account_id, title, date, cost) VALUES (?, ?, ?, ?, ?, ?)";
    const params = [log.user_id, log.category_id, log.account_id, log.title, log.date, log.cost];
    const [result] = await db.query(sql, params);
    if (result.affectedRows) {
      return await this.update(db, log);
    }
    return result;
  }

  // async delete(id) {
  //   const db = await connect();
  //   let sql;
  //   sql = "SELECT type, account, cost FROM board WHERE id = (?)";
  //   const params = [id];
  //   const [record] = await db.query(sql, params);
  //   sql = "DELETE FROM board WHERE id = (?)";
  //   const [result] = await db.query(sql, params);
  //   if (result.affectedRows) {
  //     return await this.update(db, id, record[0], "delete");
  //   }
  //   return result;
  // }

  async update(db, log) {
    let sql, params;
    sql = "SELECT type FROM category WHERE id = (?)";
    params = [log.category_id];
    const [res] = await db.query(sql, params);
    if (res[0].type === "수입") sql = "UPDATE account SET asset = asset+(?) WHERE id = (?)";
    else sql = "UPDATE account SET asset = asset-(?) WHERE id = (?)";
    params = [log.cost, log.account_id];
    const [result] = await db.query(sql, params);
    return result;
  }

  // async findByType(id, type) {
  //   const db = await connect();
  //   const sql =
  //     "SELECT board.id, board.category, board.account, board.title, board.date, board.cost FROM board, type WHERE board.user_id = (?) and type.name = (?) ";
  //   const params = [id, type];
  //   const [result] = await db.query(sql, params);
  //   return result;
  // }
}

const log = new Log();
module.exports = log;
