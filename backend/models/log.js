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

  // async add(log) {
  //   const db = await connect();
  //   let sql, params;
  //   sql = "SELECT name FROM account WHERE id = (?)";
  //   params = [log.accountId];
  //   const [account] = await db.query(sql, params);
  //   sql = "INSERT INTO board(user_id, type, category, account, title, date, cost) VALUES (?, ?, ?, ?, ?, ?, ?)";
  //   params = [log.user, log.type, log.category, account[0].name, log.title, log.date, log.cost];
  //   const [result] = await db.query(sql, params);
  //   if (result.affectedRows) {
  //     return await this.update(db, log, "add");
  //   }
  //   return result;
  // }

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

  // async update(db, log, method) {
  //   let sql;
  //   if ((method === "add" && log.type === "수입") || (method === "delete" && log.type === "지출")) {
  //     sql = "UPDATE account SET asset = asset+(?) WHERE id = (?)";
  //   } else {
  //     sql = "UPDATE account SET asset = asset-(?) WHERE id = (?)";
  //   }
  //   const params = [log.cost, log.accountId];
  //   const [res] = await db.query(sql, params);
  //   return res;
  // }

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
