//importing the express 
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
//running the express
const app = express()

dotenv.config()
connectDB()

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