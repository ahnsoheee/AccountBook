const categoryService = require("../services/category");

exports.getCategory = async (req, res, next) => {
  const userDTO = req.body;
  const result = await categoryService.read(userDTO);
  res.json(result);
};

exports.deleteCategory = async (req, res, next) => {
  const categoryDTO = req.body;
  const result = await categoryService.delete(categoryDTO);
  res.json(result);
};

exports.createCategory = async (req, res, next) => {
  const categoryDTO = req.body;
  const result = await categoryService.create(categoryDTO);
  res.json(result);
};

exports.updateCategory = async (req, res, next) => {
  const categoryDTO = req.body;
  const result = await categoryService.update(categoryDTO);
  res.json(result);
};
