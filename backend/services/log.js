const logModel = require("../models/log");
class LogService {
  async read(user) {
    let result;
    try {
      result = await logModel.findById(user.id);
    } catch (err) {
      return false;
    }
    return result;
  }

  async create(log) {
    let result;
    try {
      result = await logModel.add(log);
    } catch (err) {
      return false;
    }
    return result;
  }

  // async delete(log) {
  //   let result;
  //   try {
  //     result = await logModel.delete(log.id);
  //   } catch (err) {
  //     return false;
  //   }
  //   return result;
  // }
}

const logService = new LogService();
module.exports = logService;
