# Planner

TODO

1) put fat controllers on a diet
2) Deal with the many todos the fat controller diet plan. THe routes work yet they need to be refined.
   3) Forum controllers/services
      4) create route works, yet no object is returned from the services thus .json doesn't return data.
         5) managed to get null back. Ill leave it there for now.
      5) forum index. Reference todo. Asks some questions that will dictate how we sort it out. May need muitiple 
         ways. Abstraction for muiltiple uses?
      5) user controller/services
         6) user delete route, user is deleted however try catch block catches and error thus json is not returned 
            with a success message. User is deleted though.
   7)Go over and research into return await, if it is worth it. If not just do redudant variables to reduce 
            potential error risks. 
2) Once fat controller finished dieting: go back and descontruct the req.body for a greater degree of control in input data. 3&4 need to be done at the same time. 
3) Will need to do the same with services. 3 & 4 are to be done at the same time. 
4) Add sessions through redis
implment nanoid for disaposable session ID names instead of database indentifierers 
5) fix userDeleteRoute. Reference comments. In short user is deleted however json is not returned and userController 
   delete route returns a silent error.
5) figure out how to abstract the index services to apply to: Users, Comments, Forums, and Tags
6) reduce services logic into smaller functions. EX: mongoDbServices
6) Figure out a way to parse only needed data through json. Refer to scratch pad. Right now it is a bulk send off. Or just make life fun for frontend parsing json. 
7) when user deletes acct, change all users names on submitted items to an admin called The Kitchen Reaper. A cute 
   way to 
   collect all deleted topics to one thing. Have all names blocked from using this one. Namespace the fuck out of it.
8) The error handling is not indicative of how I want it implemented. More or less place holders until I can 
   work out that. collect all errors and properly handle them.


### Side notes, since updating from old versions, make sure to check for all potential deprications; 
mongoose 6.6.5 https://mongoosejs.com/docs/deprecations.html


### Soft notes

1) email& pass for login. Names can be duplicate and w/e really. Gives the user something fun to play with. 
2) Abstract the user login/logout services as one. Use the URL as an identifier on which service is used. EX)
if statement that checks if URL path = login. If true it calls the login function, if false calls the logout.
Could I abstract that further into one function? Mmn.
