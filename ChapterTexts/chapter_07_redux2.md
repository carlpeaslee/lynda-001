# Chapter 7 redux2


The next thing we're going to do is enable `redux-saga` so that our application can more easily deal with asynchronous requests.

Without any modifications, redux is built to keep you from performing impure tasks within actions –– like, for instance, making a call to an API.

Another library people often use is called `redux-thunk`.

And while we're at it, we're also going to enable redux's devtools to help us track state during development.

```bash
# ./client
npm install redux-saga --save
```

```javascript
