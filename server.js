// IMPORTS
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// DOTENV config
dotenv.config()

// middleware for json body parser
app.use(express.json())

// Mongodb connnection
const mongooseURL = process.env.MONGOURL
mongoose.connect(mongooseURL).then(() => {
    console.log("Database connected successfully")
}).catch(err => {
    console.log(err);
})  

// ROUTES
app.use('/api/product', require('./routes/product'))
// HOME ROUTE
app.get('/', (req, res) => {
    res.send('OK');
})

// server config
const PORT = process.env.PORT
app.listen(8800, () => {
    console.log(`Server running at port ${PORT}`);
})