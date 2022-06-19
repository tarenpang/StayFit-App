require ('dotenv').config();
const mongoose = require('mongoose'); 

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME,
            user: process.env.DB_USER,
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log("Connected to the DB successfully")
    }
    catch(error){
        console.log(error)
        console.log("Could not connect to DB!")
    }
}


// url: "mongodb+srv://kingslandfullstack:kingslandfullstack2022@fitnessapp.t1pyp.mongodb.net/?retryWrites=true&w=majority"