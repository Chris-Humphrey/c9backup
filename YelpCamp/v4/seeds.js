var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Yellowstone",
        image: "https://c1.staticflickr.com/4/3876/14863812502_aa42b7bab2_c.jpg",
        description: "Yellowstone National Park is an American national park located in Wyoming, Montana, and Idaho."
    },
    {
        name: "Big Bend",
        image: "https://c1.staticflickr.com/9/8209/8206763160_e9910e9029_c.jpg",
        description: "There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone."
    },
    {
        name: "Yosemite",
        image: "https://c2.staticflickr.com/4/3252/2676378920_32113f8565_z.jpg?zz=1",
        description: "Yosemite National Park is in California’s Sierra Nevada mountains."
    }
];


function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                }
                            });
                    }
                });
            });
        });
    }); 
}

module.exports = seedDB;