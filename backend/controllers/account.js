const accountService = require("../services/account");

exports.getAccount = async (req, res, next) => {
  const userDTO = req.body;
  const result = await accountService.read(userDTO);
  res.json(result);
};

exports.deleteAccount = async (req, res, next) => {
  const accountDTO = req.body;
  const result = await accountService.delete(accountDTO);
  res.json(result);
};

exports.createAccount = async (req, res, next) => {
  const accountDTO = req.body;
  const result = await accountService.create(accountDTO);
  res.json(result);
};

exports.updateAccount = async (req, res, next) => {
  const accountDTO = req.body;
  const result = await accountService.update(accountDTO);
  res.json(result);
};
