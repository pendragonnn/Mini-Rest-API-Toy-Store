const express = require('express')
const productRoutes = require('./src/product/routes')
const categoryRoutes = require('./src/category/routes')

const app = express()
const port = 3000

app.use(express.json())

app.use('/product', productRoutes)
app.use('/category', categoryRoutes)

app.listen(port, () => console.log(`app listening on ${port}`))