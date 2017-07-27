var mongoose = require("mongoose");


var directorSchema = new mongoose.Schema({
                      name: String,
                      age: Number,
                      gender: {type:String},
                      image: String,
                      movies_directed: {type:Array, default: []}  
});
module.exports = mongoose.model("Director", directorSchema,'directors');