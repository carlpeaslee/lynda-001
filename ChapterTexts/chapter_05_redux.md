# Chapter 5: Redux

In this chapter, we're going to show you how to implement redux.

Redux is a library that helps you manages your applications state. The idea is that your application with have a single, immutable source of Truth which informs your apps behaviors.

If you're not familiar with redux, I'll try to give brief explanations as I go along but it would be worth your time to read more about the library.

We need to create at least four files to get redux working. The order doesn't really matter so let's just jump in.

First, we need to install `redux`:

```bash
# ./client/src
npm install redux --save
```

Let's start by creating a file for redux actions. We are going to try and group our actions together by feature.

We'll begin with the actions needed for our tictactoe game:

```bash
# ./client/src
touch actions/tictactoe.js
```

Go ahead and open up the file we just created and lets write our first code.

```javascript
/*    ./client/src/actions/tictactoe.js     */

//first we make our action creator
export const TEST_REDUX = 'TEST_REDUX'

//then we make the actual action
export function testRedux() {
  console.log('We are testing redux.')
  return {
    type: TEST_REDUX,
  }
}
```

The action (`javascript testRedux()`) will be the function we call from our component. The action creator (`javascript TEST_REDUX`) is the variable our reducer will need to understand that action type being passed to it by our action.

Speaking of reducers, let's build ours now.

Because I know we're going to want to grow this app further. I'm going to take the time now to build both a reducer AND a file that will combine all of our eventual reducers together using redux's `
