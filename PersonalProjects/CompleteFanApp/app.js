var express         = require("express"),
methodOverride      = require("method-override"),
expressSanitizer    = require("express-sanitizer"),
mongoose            = require("mongoose"),
bodyParser          = require("body-parser"),
app                 = express();

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/complete_fan_app", { useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose/ model config
var fanSchema = new mongoose.Schema ({
    // title of report
    machine: String,
    machine2: String,
    ref: String,
    company: String,
    FAO: String,
    reportDate: Date,
    worksDate: Date,
    // reference image
    refImg: String,
    // fan details
    fanMake: String,
    fanSerial: String,
    fanSize: String,
    fanType: String,
    fanIdRef: String,
    motorSpeed: String,
    motorPower: String,
    bearingDet: String,
    inverterDriven: String,
    inverterHz: String,
    fanPulley: String,
    motorPulley: String,
    beltDet: String,
    otherDet: String,
    // work report
    preWorkCom: String,
    postWorkCom: String,
    photos: String,
    signature: String
});

var Report = mongoose.model("Report", fanSchema);


// ROUTES

app.get("/", function(req, res){
    res.render('landing');
});

// INDEX
app.get('/reports', function(req, res){
    Report.find({}, function(err, reports){
        if(err){
            console.log("There was an error!");
            console.log(err);
        } else {
            res.render("index", {reports: reports});
        }
    });
});


// NEW 
app.get("/reports/new", function(req, res){
    Report.find({}, function(err, reports){
        if(err){
            console.log("There was an error!");
            console.log(err);
        } else {
            res.render("new", {report: reports});
        }
    });    
});

// CREATE
app.post("/reports", function(req, res){
    req.body.report.preWorkCom = req.sanitize(req.body.report.preWorkCom);
    req.body.report.postWorkCom = req.sanitize(req.body.report.postWorkCom);
    Report.create(req.body.report, function(err, newWork){
        if(err){
            res.render("new");
        } else {
            res.redirect("/reports");
        }
    });
});

// SHOW
app.get("/reports/:id", function(req, res){
   Report.findById(req.params.id, function(err, foundReport){
       if(err){
           res.redirect("/reports");
       } else {
           res.render("show", {report: foundReport});
       }
   });
});

// EDIT
app.get("/reports/:id/edit", function(req, res){
    Report.findById(req.params.id, function(err, foundReport){
        if(err){
            res.redirect("/reports");
        } else {
            res.render("edit", {report: foundReport});
        }
    });
});

// UPDATE
app.put("/reports/:id", function(req, res){
    req.body.report.preWorkCom = req.sanitize(req.body.report.preWorkCom);
    req.body.report.postWorkCom = req.sanitize(req.body.report.postWorkCom);
    Report.findByIdAndUpdate(req.params.id, req.body.report, function(err, updatedReport){
        if(err){
            res.redirect("/reports");
        } else {
            res.redirect("/reports/" + req.params.id);
        }
    });
});

// DELETE
app.delete("/reports/:id", function(req, res){
    Report.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/reports");
        } else {
            res.redirect("/reports");
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Fan app is online.");
});