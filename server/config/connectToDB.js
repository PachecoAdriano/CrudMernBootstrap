//Load env variables
if (process.eventNames.NODE_ENV != "production") {
    require("dotenv").config();
  }

const mongoose = require('mongoose')

async function connectToDB(){

    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to database")
    } catch (err) {
        console.log(err)
    }
    
}

module.exports = connectToDB