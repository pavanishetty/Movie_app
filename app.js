var bodyParser = require("body-parser"),
methodOverride = require("method-override"),
express = require("express"),
mongoose = require("mongoose"),
app = express();


mongoose.Promise = global.Promise;

//APP CONFIG
mongoose.connect("mongodb://localhost/movie_app",{useMongoClient: true});
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));


var Movie    =  require("./models/movie");
var Actor    =  require("./models/actor");
var Director =  require("./models/director");

//MOVIES
app.get("/", function(req, res){
    res.redirect("/movies");
});
//INDEX ROUTE
app.get("/movies", function(req, res){
    Movie.find({},function(err, movies){
        if(err){
            console.log("ERROR!");
        }else{
            res.render("movieIndex",{movies: movies});
        }
    });
});

//NEW ROUTE
app.get("/movies/new", function(req, res){
    res.render("newMovie");
});

//CREATE ROUTE
app.post("/movies", function(req, res){
      Movie.create(req.body.movie, function(err, newMovie){
         if(err){
             res.render("newMovie");
         }else{
             res.redirect("/movies");
         }
      });
});

//SHOW ROUTE
app.get("/movies/:id",function(req, res){
    Movie.findById(req.params.id, function(err, foundMovie){
        if(err){
            res.redirect("/movies");
        }else{
            res.render("showMovie", {movie: foundMovie});
        }
    })
})
//EDIT ROUTE
 app.get("/movies/:id/edit", function(req, res){
         Movie.findById(req.params.id, function(err,foundMovie){
             if(err){
                 res.redirect("/movies");
             }else{
                 res.render("editMovie", {movie: foundMovie});
             }
         })  
  });

//UPDATE ROUTE
app.put("/movies/:id", function(req, res){
    Movie.findByIdAndUpdate(req.params.id,req.body.movie,function(err){
        if(err){
            res.redirect("/movies");
        }else{
            res.redirect("/movies/"+req.params.id);
        }
    })
});

//DELETE ROUTE
app.delete("/movies/:id", function(req, res){

    Movie.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/movies");
        }else{
            res.redirect("/movies")
        }
    })
});
//ACTORS
app.get("/actors", function(req, res){
    Actor.find({},function(err, actors){
        if(err){
            console.log("ERROR!");
        }else{
            res.render("actorIndex",{actors: actors});
        }
    });
});

//NEW ROUTE
app.get("/actors/newActor", function(req, res){
    res.render("newActor");
});

//CREATE ROUTE
app.post("/actors", function(req, res){
      
      Actor.create(req.body.actor, function(err, newActor){
         if(err){
             res.render("newActor");
         }else{
             
             res.redirect("/actors");
         }
      });
});

//SHOW ROUTE
app.get("/actors/:id",function(req, res){
    Actor.findById(req.params.id, function(err, foundActor){
        if(err){
            res.redirect("/actors");
        }else{
            res.render("showActor", {actor: foundActor});
        }
    })
})
//EDIT ROUTE
 app.get("/actors/:id/edit", function(req, res){
         Actor.findById(req.params.id, function(err,foundActor){
             if(err){
                 res.redirect("/actors");
             }else{
                 res.render("editActor", {actor: foundActor});
             }
         })  
  });

//UPDATE ROUTE
app.put("/actors/:id", function(req, res){
    Actor.findByIdAndUpdate(req.params.id,req.body.actor,function(err){
        if(err){
            res.redirect("/actors");
        }else{
            res.redirect("/actors/"+req.params.id);
        }
    })
});

//DELETE ROUTE
app.delete("/actors/:id", function(req, res){

    Actor.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/actors");
        }else{
            res.redirect("/actors")
        }
    })
});

//DIRECTORS
app.get("/directors", function(req, res){
    Director.find({},function(err, directors){
        if(err){
            console.log("ERROR!");
        }else{
            res.render("directorIndex",{directors: directors});
        }
    });
});

//NEW ROUTE
app.get("/directors/newDirector", function(req, res){
    res.render("newDirector");
});

//CREATE ROUTE
app.post("/directors", function(req, res){
      
      Director.create(req.body.director, function(err, newDirector){
         if(err){
             res.render("newDirector");
         }else{
             res.redirect("/directors");
         }
      });
});

//SHOW ROUTE
app.get("/directors/:id",function(req, res){
    Director.findById(req.params.id, function(err, foundDirector){
        if(err){
            res.redirect("/directors");
        }else{
            res.render("showDirector", {director: foundDirector});
        }
    })
})
//EDIT ROUTE
 app.get("/directors/:id/edit", function(req, res){
        Director.findById(req.params.id, function(err,foundDirector){
             if(err){
                 res.redirect("/directors");
             }else{
                 res.render("editDirector", {director: foundDirector});
             }
         })  
  });

//UPDATE ROUTE
app.put("/directors/:id", function(req, res){
    Director.findByIdAndUpdate(req.params.id,req.body.director,function(err){
        if(err){
            res.redirect("/directors");
        }else{
            res.redirect("/directors/"+req.params.id);
        }
    })
});

//DELETE ROUTE
app.delete("/directors/:id", function(req, res){

    Director.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/directors");
        }else{
            res.redirect("/directors")
        }
    })
}); 

app.listen(process.env.PORT || 5000);

