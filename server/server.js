require('dotenv').config()
const express = require('express')
const cors = require('cors'); 
const app = express()

var corsOptions = {
    origin: "http://localhost:5002"
}

const db = require('./app/models');
db.mongoose
.connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!")
})
.catch(err => {
    console.log("Cannot connect to database!")
    process.exit(); 
})

app.use(cors(corsOptions)); 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = process.env.PORT || 5001

require('./app/routes/stayFitRoutes')(app); 
require('./app/routes/trainerRoutes')(app); 
require('./app/routes/userRoutes')(app); 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`); 
})