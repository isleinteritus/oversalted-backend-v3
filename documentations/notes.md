### styleGuide 
_why these choices are made_

---
_Signals of Intent._
```
'' = require/import statements
"" = written statements
`` = string interpolation
```

_return await syntax_

>`return await` is fine to use. Some claim it to be a microtask that will hurt performance. Others say that
is no longer an issue as of 2020(?). Regardless I couldn't care until performance is something I need to focus on. 
> Preoptimization is useful is the factory belts do not run.
<<<<<<< HEAD:documentations/styleGuide.md
I prefer return await over redundant variables that do the same thing. Why I don't bother with redundant variables? 
> This is due to a very specific verbose naming style within overSalted. 
=======
<<<<<<< Updated upstream:documentations/notes.md
I prefer return await over redundant variables that do the same thing. Why I don't bother with redundant variables 
> is due to specific verbose naming practices within overSalted.
=======
I prefer return await over redundant variables that do the same thing. Why I don't bother with redundant variables? 
> This is due to a verbose naming style within overSalted by naming everything by what it does.
>>>>>>> Stashed changes:documentations/styleGuide.md
>>>>>>> main:documentations/notes.md

_naming_
>* compound words are to be camel cased.  English is frustrating and to break up confusion: compound words are camel 
   > cased. Variables are only a collection of words made into compound words due to programmatic means, so...
>  * `bedroom = bedRoom`. 
>  * `jellyfish = jellyFish`
>  * `pancake = panCake` 
>  * `cheeseburger = cheeseBurger`
>  When in doubt: camel case it.
