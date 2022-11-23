# Documentation

#### Tech, Pckgs, Thoughts, Explanations

```
casl
Nanoid 
Mongodb
express
nodejs
Argon2id
redis(session)-ioredis
superstruct for validation
```

#### current routing system:
server.js -> controllers -> services


#### Explanation of routes:

---
#### Server.js, _entry point_
>is a little larger than I prefer however it contains most of my original setup. I will, at some point, go back and refactor.
#### controllers _folder_
>Controllers are slimmed down to have as little logic in as possible yet mantain readability. This will grow however
most logic will be transferred to services to keep with the modular theme.
#### services _folder_
>services constructed in modular stylization for ease of specific testing of key parts rather than whole parts. A fat
controller becomes difficult to test, implement, and update due to each interaction they have. Within the services
folder is async/await to prevent server crashes via try-catch blocks. Within each try catch block is a broken down
database interaction of the services needed. The removal of constant if/else statements allow for a greater degree
of control and testing of the data. We can easily see where each piece is going. createForum.js within
forumServices will give a clear idea of that interaction.
---
#### Technologies, why?

MongoDb, why?
* Ease of updating schemas implementation of new 'features' or relationships while developing a product is useful.
    * ex. One planned feature not yet added is that people can comment on comments without polluting the comment scope
      with replies. The ability to increase a relationship of a model with ease is nice.
* Flexibility in allowing documents to contain sub-documents, and easy references to be made in a many-many relationship & one-many && many-one.
    * While this is nice, it can slow performance down by having sub documents if we load the forum WITH the
      comments contained as sub documents. The reference system makes it easier to load different parts of a forum.
      Letting me query what I need.
* Simplicity of the language. It is easy(ier) to understand mongodb syntax.
* It has a flexible query model.
    * Query for what I need and onlly what I need.
* Data can be loaded into a new format or exported to other data sources allowing for greater manipulation of presenting data.
* It is a general purpose database allowing me to use a diverse set of data and muiltiple purposes within that database.
* When and If overSalted grows: it is built to scale vertically and horizontally by using sharding. Data balancing can occur naturally and transparently by looking into the shard balancer.
* JSON. Json is popular on the frontend and API communication. So, of course, I would like to use a database that
  has the same protocol. It does help make things easier.
* My focus is cloud computing.

Mongodb limitations 
* MongoDB uses high memory for data storage. Which equals to a memory monetary cost.
  * we can always buy more memory. Speed is, well, harder to buy thus a greater concern. MongoDb does well with speed and better when known how to take advantage of it.
* storage doesn't autoshrink.
* 

Nodejs, why?
* Easy/fast startup. 
* Wide diversity of packages. 
* A high degree of flexibility.
* Langauge I first learned so it is my practice language to develope core programming soft skills
* Dynamic

Express, why?
* dynamic
* diversity of products
* plenty of information on using it and workarounds for limitations

Redis, a tool for session management, why?
* Fast
* simple
* flexible data structures, how I want to store a session state.
* key value storage
* persistant session.
* could be useful for cache management as well
* central management of sessions including session termination
Redis limintations:
* memory limit, easy to avoid with small datasets
* basic security, requires a speerate encryption layer.
