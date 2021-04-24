const mongoose = require("mongoose")
const sweetsSchema = mongoose.Schema({
        origin: String,
        
        qunatity:{
                type: String,
                minmumlength: 3,
                 
        },
        
        price: {
                type: Number,
                min: 100,
                max: 700
            },
})
module.exports = mongoose.model("sweets", sweetsSchema)