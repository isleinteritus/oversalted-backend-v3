- [x] port overSalted-backend-v2 to overSalted-Backend-v3 and gut it.
- [x] put fat controllers on a diet: transfer controller buisness logic to services
- [x] convert services to async/await with /try/catch blocks in controllers and services
- [x] reduce services if/else statements to a readable/modular form for ease of testing.
- [] figure out what to do about index services
- [] destructure controllerNameBody for greater degree of control of data entering services instead of using the
  spread operator
- [] create an abstracted deletedItemReturnMessage function that takes the route url and puts that word into its return 
  message thus returning:`"The Kitchen Reaper 86 the [Comment]"` This will replace the current variable in the 
  delete routes called deletedReturnMessage

- [] implement redis for session management IN PROGRESS
- [] implement nanoid for obscuring users info in session
- [] implement validation through superstruct
- [] argon
- [] update security practices, such as helmet.js
- [] logging server
- [] flesh out helmet.js
- [] error handling
- [] update json helper function. Maybe.
- [] implemented casl for role systems
- [] using casl bar off everybody from touching the tag delete route. Or remove the route then treat a would-be 
  deleted tag it as a 
  depricated branch with no ability to tag it.
- [] pending


###### task related notes, or potential tasks.

---
* LTG is to refactor after implementation to reduce all logic to simplified functions for ease of testing. I DO NOT 
  want to make 3 classes, 10 files, and w/e that function does to do one thing for a user request. How do I test 
  that? Why do I want to test that? 
* Abstract the index services to apply to: users, Comments, Forums, and Tags as a whole. .map/.fliter/.pipe?
* reduce services logic into smaller calls. Service function calls queries folder for specific queries thus database 
  queries are reduced to the queries folder where further abstraction can take place EX: 
  mongoDbService. Most likely usage with .filter & .map. 
* Figure out a way to parse only needed data through json. Right now it is a bulk send off. Or make life fun for 
  frontend parsing json. 
* when user deletes acct, change all users names on submitted items to an admin called The Kitchen Reaper. A cute way to collect all deleted topics to one thing. Have all names blocked from using this one name combination 
* Better error handling. 
* ~~when a user deletes a forum their name is scrubbed away. That's about it.~~ 
  * Now how to delete the users naem from comments? 
    * Now how to delete users name from subcomments? [sub comments are not implemented]

### Soft notes

1) email& pass for login. Names can be duplicate and w/e really. Gives the user something fun to play with.
2) Abstract the user login/logout services as one. Use the URL as an identifier on which service is used. EX)
   if statement that checks if URL path = login. If true it calls the login function, if false calls the logout.
   Could I abstract that further into one function? Mmn.
