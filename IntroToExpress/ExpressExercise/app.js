var express = require("express");
var app = express();

app.get("/", function(req,res) {
   res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:id", function(req,res){
    var animal = req.params.id.toLowerCase();
    var sounds = {
        cow: "Moo",
        pig: "Oink",
        dog: "Woof Woof!",
        cat: "Meow",
        bird: "Chirp Chirp!"
    };
    var sound = sounds[animal];
    
    res.send("The " + animal + " says '" + sound + "'");
    
    // MY OWN CODE BEFORE SOLUTION
    // var animal = req.params.id;
    // if(animal === "pig") {
    //     res.send("The " + animal + " says 'Oink'");
    // } else if(animal === "cow") {
    //     res.send("The " + animal + " says 'Moo'");
    // } else if(animal === "dog") {
    //     res.send("The " + animal + " says 'Woof Woof!'");
    // } else if(animal === "cat") {
    //     res.send("The " + animal + " says 'Meow!'");
    // } else if(animal === "bird") {
    //     res.send("The " + animal + " says 'Chirp Chirp!'");
    // }
});


app.get("/repeat/:word/:number", function(req,res){
    var word = req.params.word;
    var numbers = Number(req.params.number);
    var str = "";
    for(var i=0;i<numbers;i++){
        str += word + " ";
        }

    res.send(str);
});

app.get("*", function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
