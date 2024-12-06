# Debugging

`Debugging` is a regular occurrence within programming, its always going to happen. Just don't make it as frustrating with how you approach it.

## Temperament 

`Temperament` is key to debugging, you need a patient and logical mind when trying to debug. It can get really frustrating to have 1 line of code completely stop your code from working.

Having a good `Temperament` is being able to find your issue you have and breaking it down. Try figuring what could cause it, what are alternate ways to fix it, and etc other ways to getting to the solution.

## Reading Error Messages

`Error Messages` are your best friend when it comes to debugging. When getting a `error message` there will be a huge wall of text. This is where you will find the beginning of your context clues for debugging. It will tell you which kind of error you have, and where it comes from.
```
TypeError: Cannot read property 'filter' of undefined
    at app.get (/Users/nf/Desktop/meadowlark/meadowlark.js:8:13)
    at Layer.handle [as handle_request] (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/layer.js:95:5)
    at /Users/nf/Desktop/meadowlark/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/index.js:275:10)
    at expressInit (/Users/nf/Desktop/meadowlark/node_modules/express/lib/middleware/init.js:40:5)
    at Layer.handle [as handle_request] (/Users/nf/Desktop/meadowlark/node_modules/express/lib/router/layer.js:95:5)
```

There is a lot in this text, but by looking at the error that was raised and looking at which file it comes from it becomes a lot easier to understand what you're looking at

### Online Resources for debugging

1. Search Engine

Your search engine will be your best friend. By typing your error message you can get a general description of what might be your issue. 

2. Stack Overflow

This site has a bunch of old archived questions that have been answered over decades worth of information

3. Documentation

Using docs could be the most simple way to go at trying to figure out whats going on. 

### Steps to Debug

1. Reproduce the Error
2. Determine the Boundaries of the Error
3. Trace the Code
4. Understand the Problem Well
5. Implement a Fix
6. Test the Fix

### Techniques for Debugging

1. Line by line
2. Rubber Duck
3. Walking Away
4. Inspecting with a Debugger
5. Advanced Debugging
