const accountService = require("../services/account");

exports.getAccount = async (req, res, next) => {
  const userDTO = req.body;
  const result = await accountService.readAccount(userDTO);
  res.json(result);
};
