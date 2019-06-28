var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Yellowstone", image: "https://cdn.pixabay.com/photo/2016/08/12/20/14/yellowstone-national-park-1589616_1280.jpg"},
        {name: "Big Bend", image: "https://cdn.pixabay.com/photo/2016/08/09/22/01/rio-grande-river-1581918_1280.jpg"},
        {name: "Yosemite", image: "https://cdn.pixabay.com/photo/2016/08/12/23/47/yosemite-1590012_1280.jpg"},
        {name: "Yosemite", image: "https://cdn.pixabay.com/photo/2016/08/12/23/47/yosemite-1590012_1280.jpg"},
        {name: "Yosemite", image: "https://cdn.pixabay.com/photo/2016/08/12/23/47/yosemite-1590012_1280.jpg"},
    ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

// REST formatting
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Is Running!");
})