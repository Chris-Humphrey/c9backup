# Associations

## Intro to Associations
* Define associations
* Discuss one:one, one:many, many:many relationships
    * one:one - book:publisher, employee:title
    * one:many - user:photos
    * many:many - students:courses, authors:books

## Embedding Data
# User
var newUser = new User ({
newUser.posts.push({)
newUser.save(function(err, user){})

# Post
var newPost = new Post ({
newPost.save(function(err, user){})

## Referencing Data
user.findOne({name: "", function(err, user){...
User.findOne({email: ""}).populate("posts").exec(function(err, user){...


## Module.Exports
* Introduce module.exports
    * allows us to break things into seperate files
* Move our models into seperate files