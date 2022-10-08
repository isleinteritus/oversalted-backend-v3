# Planner

TODO

1) put fat controllers on a diet 
2) Once fat controller finished dieting: go back and descontruct the req.body for a greater degree of control in input data. 3&4 need to be done at the same time. 
3) Will need to do the same with services. 3 & 4 are to be done at the same time. 
4) Add sessions through redis
implment nanoid for disaposable session ID names instead of database indentifierers 
5) figure out how to abstract the index services to apply to: Users, Comments, Forums, and Tags 
6) Figure out a way to parse only needed data through json. Refer to scratch pad. Right now it is a bulk send off. Or just make life fun for frontend parsing json. 
7) when user deletes acct, change all users names on submitted items to an admin called The Kitchen Reaper. A cute 
   way to 
   collect all deleted topics to one thing. Have all names blocked from using this one. Namespace the fuck out of it.
8) collect all errors and properly handle them. They are everywhere. Really need helper functions for that.


### Soft notes

1) email& pass for login. Names can be duplicate and w/e really. Gives the user something fun to play with. 
2) Abstract the user login/logout services as one. Use the URL as an identifier on which service is used. EX)
if statement that checks if URL path = login. If true it calls the login function, if false calls the logout.
Could I abstract that further into one function? Mmn.
