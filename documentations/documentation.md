# Documentation
Postman tests.
These are not finals. 


```
// comment/create
{
"content":"",
"commentOwner": "",
"parentForum": ""
}
```

```
// user/create
"name":"",
"email":"",
"password":""
```

```
// forum/create
{
    "title":"",
    "content":"",
    "forumOwner": "",
    "parentTags": [""]
}
```
```
{
    "title":"",
    "content":""
}

```

Signals of Intent. Such nuance. 
```
'' = require/import statements
"" = written statements
`` = string interpolation

```

Notes

```return await``` is fine to use. Some claim it to be a microtask that will hurt performance. Others say that 
is no longer an issue as of 2020(?). Regardless I couldn't care until performance is something I need to focus on. 
I prefer it over redundant variables that do the same thing. 
