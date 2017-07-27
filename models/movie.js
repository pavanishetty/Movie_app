var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
             name: String,
             description: String,
             year_released: Number,
             rating: Number,  
             title: String,
             actors_list: {type:Array, default: []},
             directors_list: {type:Array, default: []}
});


module.exports = mongoose.model("Movie", movieSchema,'movies');