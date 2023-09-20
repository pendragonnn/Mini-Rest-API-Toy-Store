const getCategories = 'SELECT * FROM category'
const getCategoryById = 'SELECT * FROM category WHERE category_id= $1'
const checkCategoryExist = 'SELECT c FROM category c WHERE c.category_name = $1'
const addCategory = 'INSERT INTO category (category_name) VALUES ($1)'
const removeCategory = 'DELETE FROM category WHERE category_id = $1'
const updateCategory = 'UPDATE category SET category_name = $2, updated_at = CURRENT_DATE WHERE category_id = $1'

module.exports = {
  getCategories,
  getCategoryById,
  checkCategoryExist,
  addCategory,
  removeCategory,
  updateCategory
}