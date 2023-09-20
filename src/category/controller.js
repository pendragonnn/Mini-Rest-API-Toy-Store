const pool = require('../../db')
const queries = require('./queries')

const getCategories = (req, res) => {
  pool.query(queries.getCategories, (error, results) => {
    if(error) throw error;
    res.status(200).json(results.rows);
  })
}

const getCategoryById = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getCategoryById, [id], (error, results) => {
    if(error) throw error;
    res.status(200).json(results.rows)
  })
}

const addCategory = (req, res) => {
  const { category_name } = req.body

  // name validation
  pool.query(queries.checkCategoryExist, [category_name], (error, results) => {
    if(results.rows.length) {
      res.send("Category already exist.")
    } 
  })

  // add category
  pool.query(queries.addCategory, [category_name], (error, results) => {
    if(error) throw error
    res.status(201).send("Category Created Successfully")
  })
}

const removeCategory = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query(queries.getCategoryById, [id], (error, results) => {
    const noCategoryFound = !results.rows.length
    if(noCategoryFound) {
      res.send("Category does not exist in the database, could not remove.")
    }

    pool.query(queries.removeCategory, [id], (error, results) => {
      if(error) throw error
      res.status(200).send("Category remove successfully.")
    })
  })
}

const updateCategory = (req, res) => {
  const id = parseInt(req.params.id)
  const { category_name } = req.body

  pool.query(queries.getCategoryById, [id], (error, results) => {
    const noCategoryFound = !results.rows.length
    if(noCategoryFound) {
      res.send("Category does not exist in the database, could not remove.")
    }

    pool.query(queries.updateCategory, [id, category_name], (error, results) => {
      if(error) throw error
      res.status(200).send("Category updated successfully")
    })
  })
}

module.exports = { 
  getCategories,
  getCategoryById,
  addCategory,
  removeCategory,
  updateCategory
}