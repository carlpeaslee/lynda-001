# Chapter 3: Create

Usually it's a good idea to try and plan out as much of your app BEFORE you begin development. But in this scenario, a lot of what we'll be doing at first is basically boilerplate –– and wouldn't change much from project to project.

We'll talk more later about laying out our App's structure, but for right now, these standard configurations should serve us well.

Plus, I know you're itching to start programming. So alright, let's get started.

The first thing we are going to do is navigate into the directory where we'd like to build our application.

First we'll use the command line to make our project directory:

--- | --- | ---
| `../` | `$` | `mkdir tictacturing`|

...and navigate into that directory...

$ | ```cd tictacturing```

Now, let's initialize a project:

$ ```npm init -y```

This will create a ```package.json``` file in your root directory. When you get a chance, you should modify this document so that it lists you as the author.

Next, we will initialize a git repository:

$ ```git init```

..add the contents of our directory to it...

$ ```git add .```

...commit those changes...

$ ```git commit .```

...add a remote directory...

$ ```git remote add origin <YOUR_REMOTE_URL>```

...and then push our changes to the remote

$ ```git push origin master```
