# Chapter 10 Planning

Phew, we're done with most of the setup on the frontend side of things.

I'm going to quickly get rid of some of the stuff we put on the screen for testing so our project can be a nice blank slate...


```javascript
import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'

class Template extends Component {
  render() {
    return (
      <div>
        <header
        >
          <h1>TicTacTuring</h1>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template
```

So now we can start making our app, right? Dive right in?

Ooh, sorry. Actually before we begin writing our code, it's really really really important to plan things out first. So let's go to the drawing board.

Here is a wireframe of the site I'm imagining.

![home](https://github.com/carlpeaslee/lynda-001/blob/master/ChapterTexts/imgs/ch10/Home.png?raw=true "Home")

![homeDrawerClosed](https://github.com/carlpeaslee/lynda-001/blob/master/ChapterTexts/imgs/ch10/Home%20-%20Drawer%20Closed.png?raw=true "Home (drawer closed)")

![profile](https://github.com/carlpeaslee/lynda-001/blob/master/ChapterTexts/imgs/ch10/Profile.png?raw=true "Profile")

Now I'm going to take my wireframe and I'm going to make some guesses about which stuff on the page I'll want to make into components.

I'm also going to try and keep in mind ways for me to make them as reusable as possible.

Let's start with our home page:

![HomeComponentMap](https://github.com/carlpeaslee/lynda-001/blob/be896f13e3acee43ef6719e1f11635615d2784b6/ChapterTexts/imgs/ch10/HomeComponentMap.png?raw=true "HomeComponentMap")

Ok, now that I've got those in mind. Let's start making them!
