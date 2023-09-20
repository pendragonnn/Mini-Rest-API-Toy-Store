const getProducts = 'SELECT * FROM product'
const getProductById = 'SELECT * FROM product WHERE product_id = $1'
const checkProductExist = 'SELECT p FROM product p WHERE p.product_name = $1'
const addProduct = 'INSERT INTO product (category_id, product_name, price, stock) VALUES ($1, $2, $3, $4)'
const removeProduct = 'DELETE FROM product WHERE product_id = $1'
const updateProduct = 'UPDATE product SET category_id = $2, product_name = $3, price = $4, stock = $5, updated_at = CURRENT_DATE WHERE product_id = $1'

module.exports = {
  getProducts,
  getProductById,
  checkProductExist,
  addProduct,
  removeProduct,
  updateProduct
}