# Chapter 4: Reorganize

Now that our app starts up, it's time for us to reorganize our file structure. Right now everything is piled into our `/client/src` directory.

We're also going to get rid of a number of files we won't need during this course.

First we will get rid of the readme file:

*`# ./`* <br/>
`rm client/README.md`

...then we will navigate into our `client/src` directory...

*`# ./`* <br/>
`cd client/src/`

...and delete both of the css files:

*`# client/src/`* <br/>
`rm index.css App.css`

You may be wondering why we're deleting our css files but for this project  we're going to be implementing css-as-javascript. There are a number of reasons for this –– but we'll talk more about that later.

Don't worry, if css-as-javascript feels too weird for you, we'll discuss later how you can keep traditional css files in your project.

Next we're going to get rid of our test files. Test driven development is a great practice but unfortunately we just don't have time to include it in this course. (And we're also going to get rid of the logo file.)

*`# client/src/`* <br/>
`rm App.test.js logo.svg`

Next we are going to make a whole bunch of folders! This is what our project structure will look like when we're finished:

```
tictacturing
  ...
  /client
    ...
    /src
      /actions
      /assets
      /components
      /containers
      /helpers
      /reducers
      /routes
      /store
      /styles
      /utils
      /views
      index.js
    ...
  ...
```
Even if you don't know what's going to be going in each of these files exactly, I hope you can conclude, from looking at the file names, that we are going to be organizing our files by features.

As we integrate each of the individual technologies, we'll explain what goes in each folder.

Here is how we can quickly make these files:

*`# client/src/`* <br/>
`mkdir actions assets components containers/App helpers reducers routes store styles utils views`

If you were watching closely there, you saw that we also made an `App` folder in the `containers` directory.

That's where we're going to put `App.js` –– but we're actually going to rename it `index.js` and let its directory provide the name information.

*`# client/src/`* <br/>
`mv App.js containers/App/index.js`

If you try to start up our app now (`npm start`), you'll notice that we're getting a few errors. Let's go into our files and change some of the things we broke.

* change things in `src/containers/App/index.js` *

* change things in `src/index.js` *

Great, let's see if things work ok...

*`# client/src/`* <br/>
`npm start`

Sweet our site starts up.

Time to check in our code and move on to the next chapter.

*`# client/src/`* <br/>
`git add .`<br/>
`git commit -m 'we changed our directory structure'`<br/>
`git push origin master`
