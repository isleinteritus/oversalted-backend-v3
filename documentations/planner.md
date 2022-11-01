# Planner

TODO
The more I do, the more problems arrive. Living a simple life creates complexity.

2) Once fat controller refactor is done go back and descontruct the reqs for a greater degree of control in input 
   data. Or do validation loop. Probaly validation loop. Probaly both for greater degree of manipulation.  
4) Add sessions through redis
implment nanoid for disaposable session ID names instead of database indentifierers
5) figure out how to abstract the index services to apply to: ~~Users~~_there is no ability to search for users_, 
   Comments, 
   Forums, and Tags
6) reduce services logic into smaller functions. EX: mongoDbServices
6) Figure out a way to parse only needed data through json. Right now it is a bulk send off. Or just make life fun for frontend parsing json. 
7) when user deletes acct, change all users names on submitted items to an admin called The Kitchen Reaper. A cute 
   way to 
   collect all deleted topics to one thing. Have all names blocked from using this one name combination
8) The error handling is not indicative of how I want it implemented. More or less place holders until I can 
   work out that. collect errors and properly handle them so there is less dependence on a whole lot of try/catch 
   and if statements. So if mongoose controls don't have error handling: its not intended to be so.


### Side notes, since updating from old versions, make sure to check for all potential deprications; 
mongoose 6.6.5 https://mongoosejs.com/docs/deprecations.html


### Soft notes

1) email& pass for login. Names can be duplicate and w/e really. Gives the user something fun to play with. 
2) Abstract the user login/logout services as one. Use the URL as an identifier on which service is used. EX)
if statement that checks if URL path = login. If true it calls the login function, if false calls the logout.
Could I abstract that further into one function? Mmn.
