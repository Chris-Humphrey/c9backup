# Databases

## Intro to Databsaes
* What is a database?
*   A collection of information/data
    *   Has an interface, you can write code to interact with it
*   SQL(relational) vs. NoSQL(non-relational)

## Troubleshooting MongoDB server
Now, in order to run mongod you'll first need to cd into root ~ then run ./mongod 

Additionally, after you're up and running with mongo, be sure to shut down your ./mongod server each time you're done working. You can do this with ctrl + c 

If you leave it running then Cloud 9 could timeout and cause mongo to crash. If this happens, try the following steps to repair it. 

cd ~
./mongod --repair

## Our First Mongo Commands
*   mongod
    *   ./mongod = runs mongo
*   mongo
    *   opens mongo shell, used to debug and test
*   help
*   show dbs
*   use
    *   use + "name"
    *   if db exists, it will use it. if it doesn't it will create one
*   collections
    *   show collections = display
*   insert
    *   db.name.insert({})
    *   add to database
*   find
    *   db.name.find() - find all "name"
    *   db.name.find({breed: "Mutt"}) - find dogs that are defined by breed of "Mutt"
*   update
    *   db.name.update({name: "name"}, {age: "21"}) - changes entire db entry to only display "21"
    *   db.name.update({name: "name"}, {$set: {age: "21"}}) - edits or creates a new field on an existing entry
*   remove
    *   db.name.remove({}) - removes everything that matches critera
    *   db.name.remove({}, {justOne: true}) - remove entries that matches criteria but limit it to one entry

# Acronym CRUD
Create
Read
Update
Delete

# Mongoose
*   What is Mongoose?
    *   it is an ODM (Object Data Mapper)
        *   javascript layer on top of MongoDB
        *   adds more methods that we can use
*   Why are we using it?
*   Interact with a Mongo Database using Mongoose

# Show Page
*   Review the RESTful routes we've seen so far
*   Add description to our campground model
*   Show db.collection.drop()
    *   in mongo shell, db.name.drop() - drops all entries in specific database
*   Add a show route/template

RESTFUL ROUTES

Ex...
name    url         verb    description
===================================================
INDEX   /dogs       GET     Display a list of all dogs
NEW     /dogs/new   GET     Displays form to make a new dog
CREATE  /dogs       POST    Add new dog to DB
SHOW    /dogs/:id   GET     Shows info about one dog


# RESTful ROUTING

## Introduction
* Define REST and expalin WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

