var mongoose = require("mongoose");


var actorSchema = new mongoose.Schema({
                       name: String,
                       age: Number,
                       gender: {type:String},
                       image: String,
                       movies_acted_in: {type:Array, default: []},
                       
});
module.exports = mongoose.model("Actor", actorSchema,'actors');