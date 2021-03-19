const accountService = require("../services/account");

exports.getAccount = async (req, res, next) => {
  const userDTO = req.body;
  const result = await accountService.readAccount(userDTO);
  res.json(result);
};

exports.deleteAccount = async (req, res, next) => {
  const accountDTO = req.body;
  const result = await categoryService.deleteAccount(accountDTO);
  res.json(result);
};

exports.createAccount = async (req, res, next) => {
  const accountDTO = req.body;
  const result = await categoryService.createAccount(accountDTO);
  res.json(result);
};

exports.updateAccount = async (req, res, next) => {
  const accountDTO = req.body;
  const result = await categoryService.updateAccount(accountDTO);
  res.json(result);
};
