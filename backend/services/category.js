const categoryModel = require("../models/category");

class CategoryService {
  async readCategory(user) {
    let result;
    try {
      result = await categoryModel.getCategory(user);
    } catch (err) {
      return false;
    }
    return result;
  }

  async deleteCategory(category) {
    let result;
    try {
      result = await categoryModel.deleteCategory(category);
    } catch (err) {
      return false;
    }
    return result;
  }
}

const categoryService = new CategoryService();
module.exports = categoryService;
