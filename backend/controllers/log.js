const logService = require("../services/log");

exports.getLog = async (req, res, next) => {
  const userDTO = req.body;
  const result = await logService.read(userDTO);
  res.json(result);
};

exports.addLog = async (req, res, next) => {
  const logDTO = req.body;
  const result = await logService.create(logDTO);
  res.json(result);
};

exports.deleteLog = async (req, res, next) => {
  const logDTO = req.body;
  const result = await logService.delete(logDTO);
  res.json(result);
};
