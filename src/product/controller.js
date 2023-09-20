const pool = require('../../db')
const queries = require('./queries')

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) => {
    if(error) throw error;
    res.status(200).json(results.rows);
  })
}

const getProductById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getProductById, [id], (error, results) => {
    if(error) throw error
    res.status(200).json(results.rows)
  })
}

const addProduct = (req, res) => {
  const { category_id, product_name, price, stock } = req.body;

  // product check
  pool.query(queries.checkProductExist, [product_name], (error, results) => {
    if(results.rows.length) {
      res.send("Product already exist.")
    }
  })

  pool.query(queries.addProduct, [category_id, product_name, price, stock], (error, results) => {
    if(error) throw error
    res.status(201).send("Product Created Successfully")
  })
}

const removeProduct = (req, res) => {
  const id = parseInt(req.params.id)

  // product check
  pool.query(queries.getProductById, [id], (error, results) => {
    const noProductFound = !results.rows.length
    if(noProductFound) {
      res.send("Product does not exist in the database, could not remove.")
    }
  })

  pool.query(queries.removeProduct, [id], (error, results) => {
    if(error) throw error
    res.status(200).send("Product remove successfully")
  })
}

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id)
  const { category_id, product_name, price, stock } = req.body

  // product check
  pool.query(queries.getProductById, [id], (error, results) => {
    const noProductFound = !results.rows.length
    if(noProductFound) {
      res.send("Product does not exist in the database, could not remove.")
    }

    pool.query(queries.updateProduct, [id, category_id, product_name, price, stock ], (error, results) => {
      if(error) throw error
      res.status(200).send("Product updated successfully")
    })
  })
}

module.exports = { 
  getProducts,
  getProductById,
  addProduct,
  removeProduct,
  updateProduct
}