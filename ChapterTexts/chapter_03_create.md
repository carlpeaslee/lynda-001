# Chapter 3: Create

Usually it's a good idea to try and plan out as much of your app BEFORE you begin development. But in this scenario, a lot of what we'll be doing at first is basically boilerplate –– and wouldn't change much from project to project.

We'll talk more later about laying out our App's structure, but for right now, these standard configurations should serve us well.

Plus, I know you're itching to start programming. So alright, let's get started.

The first thing we are going to do is navigate into the directory where we'd like to build our application.

First we'll use the command line to make our project directory:

```bash
# ./
mkdir tictacturing
```

...and navigate into that directory...

```bash
# ./
cd tictacturing
```

Now, let's initialize a project:

```bash
# ./tictacturing
npm init -y
```

This will create a `package.json` file in your root directory. When you get a chance, you should modify the other fields in this document to match your project.

Next, we will initialize a git repository:

```bash
# ./tictacturing
git init
```

..add the contents of our directory to it...

```bash
# ./tictacturing
git add .
```

...commit those changes...

```bash
# ./tictacturing
git commit .
```

...add a remote directory...

```bash
# ./tictacturing
git remote add origin <YOUR_REMOTE_URL>
```

...and then push our changes to the remote

```bash
# ./tictacturing
git push origin master
```


For our next step, we're going to generate a starter project with an NPM package called `create-react-app`. If you're familiar with React, you probably know that since React applications are typically written in JSX, they need to be compiled before ordinary browsers can render them.

We could spend a lot of time talking about compilers and build configurations –– and maybe in a future course, we'll take the time to set things up just the way we like them –– but for right now, we're going to make use of the default settings implemented by `create-react-app`.

If you don't have `create-react-app` installed globally on your machine, run:

```bash
# ./tictacturing
npm install create-react-app -g
```

Once you have `create-react-app` available from the command line, go ahead and create the client-side react application:

```bash
# ./tictacturing
create-react-app client
# Creating a new React app in /tictacturing/client.
#...
# Happy Hacking!
```

Let's take a second now to examine the code that's been generated for us.

```
tictacturing
  .git
  /client       <-- _NEW!_
    /node_modules       <-- our dependencies
    /public       <-- favicon and index.html file
    /src      <-- all of the fun stuff!
      App.css       <-- a css module  for our app
      App.js      <-- our App component
      App.test.js  <-- create-react-app comes with automated testing features!
      index.css      <-- the root css file
      index.js      <-- our root javascript files
      logo.svg    <-- a pretty little logo
    .gitignore    <-- a git ignore file for our client-side app
    package.json  <-- go ahead and change in the fields for this, too
    README.md   <-- some good information about the code for create-react-app
  package.json  
```
You can also go ahead and try running your new react app to see what it's rendering.

First navigate into your client directory:

```bash
# ../tictacturing
cd client/
```

...and then start your application!

```bash
# ../tictacturing/client
npm start
```

Your starter application should open up in your browser.

Great! Now let's check in our code before we begin to modify our starter app!

...go back to your project's root directory...

```bash
# ../tictacturing/client
cd ..
```

and now add, commit, and push your files to your remote:

```bash
# ../tictacturing
git add .
git commit -m "we created our initial app with create-react-app"
git push origin master
```
