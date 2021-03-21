const categoryModel = require("../models/category");

class CategoryService {
  async read(user) {
    let result;
    try {
      result = await categoryModel.read(user);
    } catch (err) {
      return false;
    }
    return result;
  }

  async create(category) {
    let result;
    try {
      result = await categoryModel.create(category);
    } catch (err) {
      return false;
    }
    return result;
  }

  async update(category) {
    let result;
    try {
      result = await categoryModel.update(category);
    } catch (err) {
      return false;
    }
    return result;
  }

  async delete(category) {
    let result;
    try {
      result = await categoryModel.delete(category);
    } catch (err) {
      return false;
    }
    return result;
  }
}

const categoryService = new CategoryService();
module.exports = categoryService;
