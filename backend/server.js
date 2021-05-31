//importing the express 
const express = require('express')
const dotenv =require('dotenv')
const products = require('./data/products')
//running the express
const app = express()

dotenv.config()

const PORT = process.env.PORT
app.listen(PORT, console.log(`Server is running on ${process.env.NODE_ENV} mode at port ${PORT}`))

//creating the route
app.get('/', (req, res) => {
    res.send('Api is running perfectly')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})



app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})