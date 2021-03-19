const categoryService = require("../services/category");

exports.getCategory = async (req, res, next) => {
  const userDTO = req.body;
  const result = await categoryService.readCategory(userDTO);
  res.json(result);
};

exports.deleteCategory = async (req, res, next) => {
  const categoryDTO = req.body;
  const result = await categoryService.deleteCategory(categoryDTO);
  res.json(result);
};

exports.createCategory = async (req, res, next) => {
  const categoryDTO = req.body;
  const result = await categoryService.createCategory(categoryDTO);
  res.json(result);
};

exports.updateCategory = async (req, res, next) => {
  const categoryDTO = req.body;
  const result = await categoryService.updateCategory(categoryDTO);
  res.json(result);
};
