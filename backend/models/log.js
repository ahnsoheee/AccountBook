const connect = require("../db/mysql");

class Log {
  async findById(user) {
    const db = await connect();
    const sql =
      "SELECT id, category_id, (SELECT c.type FROM category c WHERE b.category_id=c.id) AS type, (SELECT c.name FROM category c WHERE b.category_id=c.id) AS category, title, date, cost, account_id, (SELECT a.name FROM account a WHERE a.id=b.account_id) AS account FROM board b WHERE user_id=(?) ORDER BY date DESC";
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
      return await this.addAccount(db, log);
    }
    return result;
  }

  async addAccount(db, log) {
    let sql;
    if (log.income) sql = "UPDATE account SET asset = asset+(?) WHERE id = (?)";
    else sql = "UPDATE account SET asset = asset-(?) WHERE id = (?)";
    const params = [log.cost, log.account_id];
    const [result] = await db.query(sql, params);
    return result;
  }

  async update(log) {
    const db = await connect();
    let sql, params;
    sql = "SELECT account_id, cost FROM board WHERE id=(?)";
    params = [log.id];
    const [prev] = await db.query(sql, params);

    sql = "UPDATE board SET category_id=(?), account_id=(?), title=(?), date=(?), cost=(?) WHERE id = (?)";
    params = [log.category_id, log.account_id, log.title, log.date, log.cost, log.id];
    const [result] = await db.query(sql, params);
    if (result.affectedRows) {
      return await this.updateAccount(db, log, prev);
    }
    return result;
  }

  async updateAccount(db, log, prev) {
    let sql, params;
    if (log.income) sql = "UPDATE account SET asset = asset-(?) WHERE id = (?)";
    else sql = "UPDATE account SET asset = asset+(?) WHERE id = (?)";
    params = [prev.cost, prev.account_id];
    const [result] = await db.query(sql, params);

    if (result) {
      return await this.addAccount(db, log);
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
