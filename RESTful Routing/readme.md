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

# Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar

# Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

# Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

# SHOW
* Add SHOW route
* Add SHOW template
* Add links to SHOW page
* Style SHOW template

# Edit/ Update
* Add EDIT route
* Add EDIT form
* Add UPDATE route
    * Name.findByIdAndUpdate(id, newData, callback)
* Add UPDATE form
* Add METHOD-OVERRIDE
    * in action="" add "?_method=PUT"

# Delete
* Add DELETE route
* Add EDIT and DELETE links

# Final Updates
* Sanitize blog body
* Style Index