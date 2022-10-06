# Planner

TODO

1) put fat controllers on a diet
2) in documentation MD put together a postman list as a reference because, y'all, I keep forgetting. 
3) Once fat controller finished dieting: go back and descontruct the req.body for a greater degree of control in input data. 3&4 need to be done at the same time.
4) Will need to do the same with services. 3 & 4 are to be done at the same time.
5) Add sessions through redis
6) implment nanoid for disaposable session ID names instead of database indentifierers
7) figure out how to abstract the index services to apply to: Users, Comments, Forums, and Tags
8) 



### Soft notes

1) email& pass for login. Names can be duplicate and w/e really. Gives the user something fun to play with. 
2) Abstract the user login/logout services as one. Use the URL as an identifier on which service is used. EX)
if statement that checks if URL path = login. If true it calls the login function, if false calls the logout.
Could I abstract that further into one function? Mmn.
