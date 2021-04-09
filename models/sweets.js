const mongoose = require("mongoose")
const sweetsSchema = mongoose.Schema({
        origin: String,
        quantity: String,
        price: Number
})
module.exports = mongoose.model("sweets", sweetsSchema)