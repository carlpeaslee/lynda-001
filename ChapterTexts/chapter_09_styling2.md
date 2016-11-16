# Chapter 9 styling2

As I mentioned earlier, we're going to be implementing javascript-as-css for our styling.

Without a few modifications, javascript-as-css has a few limitation:
  * difficult to use css modifiers like `:hover`
  * can't use `@media` queries
  * without classes, you can make things difficult for yourself when you want to later change certain design elements (eg. brandColor) sitewide

To remedy these weaknesses, we're going to make a custom class.

```bash
# ./client
touch src/styles/S.js
```

Let's build the file:

```bash
### ./client/src/styles/S.js ###
```
```javascript

//we are going to create a defaultConfig object
const defaultConfig = {
  base: {},
  mobile: {}
}

//we are going to make a javascript class
class S {
  //and in the constructor function we'll pass a conf object with a default
  constructor(configObject = defaultConfig) {
    this.baseStyles = configObject.base || defaultConfig.base
    this.mobileStyles = configObject.mobile || defaultConfig.mobile
  }

  //here we are are using 'get' to return just the base or mobile styles
  get base() {
    return {
      ...this.baseStyles,
    }
  }

  get mobile() {
    return {
      ...this.mobileStyles,
    }
  }

  /*
  and then this is the function we're going to be requesting when we want to get all of our styles, computed for browser width

  */
  get all() {

    if (window.innerWidth < 800) {
      return {
        ...this.base,
        ...this.mobile
      }
    } else {
      return {
        ...this.base,
      }
    }
  }
}

export default S
```

This object should work for now. Eventually we'll want to build some more functionality into it –– probably in combination with a ui reducer and ui actions so that we can have our styles respond to things like hover and window resizes.

Let's test our new styling class out in our template file.


```bash
### ./client/src/containers/Template/index.js ###
```

```javascript
import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'
import S from '../../styles/S'

const base = {
  backgroundColor: 'red',
}

const mobile = {
  backgroundColor: 'blue'
}

const s = new S({
  base: base,
  mobile: mobile
})

class Template extends Component {
  render() {
    return (
      <div>
        <header
          style={{...s.all}}
        >
          <h1>TicTacTuring</h1>
// ... etc
```

Now when we visit our site:

```bash
### ./client ###
npm start
```

We see that our styles have rendered. And if we use our developer tools to look at our site from a mobile perspective. And refresh.

We see that our styles change based on the window size. 
