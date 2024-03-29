# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap


# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form


# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model!
* Make our erros go away
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


RESTFUL ROUTES

name        url         verb        description
===============================================
INDEX       /dogs       GET     Display a list of all dogs
NEW         /dogs/new   GET     Displays form to make a new dog
CREATE      /dogs       POST    Add new dog to DB
SHOW        /dogs/:id   GET     Shows info about one dog

COMMENTS section
NEW         campgrounds/:id/comments/new    GET
CREATE      campgrounds/:id/comments        POST

# Style Show Page
* Add a sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add public directory
* Add custom stylesheet

# Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define user model

# Auth Pt. 2 - Register
* Configure passport
* Add register routes
* Add register template

# Auth Pt. 3 - Login
* Add login routes
* Add login template

# Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

# Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

# Refactor The Routes
* Use Express router to reorganize all routes

