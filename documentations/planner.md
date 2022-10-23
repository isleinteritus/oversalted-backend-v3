# Planner

TODO
The more I do, the more problems arrive. Living a simple life creates complexity.

~~1) put fat controllers on a diet~~
2) Deal with the many todos the fat controller diet plan. THe routes work, yet some do not return data
   3) Forum controllers/services
      4) create route works, yet no object is returned from the services thus .json doesn't return data.
         5) managed to get null back. Ill leave it there for now. 
         6) Fix: send muiltiple variables if needed from 
            controller to service route. Then outside of service logic return the model by findings its id. My need 
            to destructure to pull id from body within controller.
         7) Wondering it I need to return anything but the json within controller signifying that it is done. 
            No data to be returned since user is deleted...Though I would like to return a message so perhaps 
            I will write a json helper for delete routes that return a message and status
      6) All index routes need work.
      5) user controller/services
         6) user delete route, user is deleted however exception is caught due to nothing being returne. User is 
            deleted though.
   ~~7)Go over and research into return await, if it is worth it. If not just do redudant variables to reduce 
            potential error risks.~~ 
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
