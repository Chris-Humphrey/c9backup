var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// CREATE A NEW CAMPGROUND
// Campground.create(
//     {
//         name: "Big Bend", 
//         image: "https://cdn.pixabay.com/photo/2016/08/09/22/01/rio-grande-river-1581918_960_720.jpg",
//         description: "Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend."
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground: ");
//             console.log(campground);
//         }
// });

app.get("/", function(req, res){
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // GET ALL CAMPGROUNDS FROM DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

// CREATE - add new campgrounds to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // CREATE A NEW CAMPGROUND AND SAVE TO DATABASE
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // FIND campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            // RENDER show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Is Running!");
})