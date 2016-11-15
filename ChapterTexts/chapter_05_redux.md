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

<table>
  <tr>
    <th>Before</th>
    <th>After</th>
  </tr>  
  <tr>
    <td>
      ```javascript
        console.log('hello world')
      ```
    </td>
    <td> -what- </td>
  </tr>
</table>


Before | After
--- | ---
```javascript console.log ``` | ~~```javascript console.log```
