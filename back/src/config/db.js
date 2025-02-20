require("dotenv").config()
const mongoose = require("mongoose")

const mongoURI = process.env.MONGO_URIMONGO;

async function dbConnect() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Conexión exitosa a MongoDB")
  } catch (error) {
    console.error("Error al conectar a MongoDB", error)
  }
}

module.exports = {
  dbConnect
}
