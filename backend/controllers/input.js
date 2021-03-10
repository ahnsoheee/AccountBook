const inputService = require("../services/input");

exports.getCategory = async (req, res, next) => {
  const userDTO = req.body;
  const result = await inputService.readCategory(userDTO);
  res.json(result);
};

exports.getAccount = async (req, res, next) => {
  const userDTO = req.body;
  const result = await inputService.readAccount(userDTO);
  res.json(result);
};
