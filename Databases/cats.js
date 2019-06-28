var mongoose = require("mongoose");
// will try to connect to /cat_app, if there isn't one, it will create it

mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// takes the pattern and builds a model that has all the methods we need to use

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!")
//     } else {
//         console.log("We just saved a cat to the DB:")
//         console.log(cat);
//     }
// });

// ANOTHER METHOD , new and save all at once
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Nice"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err) {
        console.log("You have received an Error!");
        console.log(err);
    } else {
        console.log("All the cats....");
        console.log(cats);
    }
});