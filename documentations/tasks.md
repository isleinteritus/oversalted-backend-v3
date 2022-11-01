- [x] port overSalted-backend-v2 to overSalted-Backend-v3 and gut it.
- [x] put fat controllers on a diet: transfer controller buisness logic to services
- [x] convert services to async/await with /try/catch blocks in controllers and services
- [] IN PROGRESS reduce services if/else statements to a readable/modular form for ease of testing.
- [] figure out what to do about index services
- [] destructure controllerNameBody for greater degree of control of data entering services instead of using the
  spread operator
- [] implement redis for session management
- [] implement nanoid for obscuring users info in session
- [] implement validation through superstruct
- [] update security practices, such as helmet.js
- [] logging server
- [] flesh out helmet.js
- [] error handling
- [] update json helper function. Maybe.
- [] update documentation.
- [] pending


task related notes, or potential tasks.

---

* figure out how to abstract the index services to apply to: ~~Users~~_there is no ability to search for users_,
   Comments,
   Forums, and Tags as a whole.
* reduce services logic into smaller functions. EX: mongoDbServices 
* Figure out a way to parse only needed data through json. Right now it is a bulk send off. Or just make life fun for frontend parsing json. 
* when user deletes acct, change all users names on submitted items to an admin called The Kitchen Reaper. A cute
   way to
   collect all deleted topics to one thing. Have all names blocked from using this one name combination 
* The error handling is not indicative of how I want it implemented. More or less place holders until I can work out that. 
* Side notes, since updating from old versions, make sure to check for all potential deprications;
mongoose 6.6.5 https://mongoosejs.com/docs/deprecations.html

### Soft notes

1) email& pass for login. Names can be duplicate and w/e really. Gives the user something fun to play with.
2) Abstract the user login/logout services as one. Use the URL as an identifier on which service is used. EX)
   if statement that checks if URL path = login. If true it calls the login function, if false calls the logout.
   Could I abstract that further into one function? Mmn.
