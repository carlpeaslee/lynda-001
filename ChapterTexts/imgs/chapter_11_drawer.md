# Chapter 11

Let's start with our side drawer.

```bash
# ./client
mkdir src/components/SideDrawer
touch src/components/SideDrawer/index.js
```

```bash
./client/src/components/SideDrawer/index.js
```
```javascript
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'

class SideDrawer extends Component {
  render(){
    return (
      <Drawer
        open={true}
      >
      <h2>SideDrawer</h2>
      </Drawer>
    )
  }
}

export default SideDrawer
```

Next we pull it in to our `Template`:

```bash
./client/src/containers/Template/index.js
```
```javascript
import React, {Component} from 'react'
import SideDrawer from '../../components/SideDrawer'

class Template extends Component {
  render() {
    return (
      <div>
        <SideDrawer/>
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

Now let's sketch out the other components that are going to be nested in our drawer.

```bash
./client/src/components/SideDrawer/index.js
```
```javascript
import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import AccountBox from '../AccountBox'
import DrawerList from '../DrawerList'

class SideDrawer extends Component {
  render(){
    return (
      <Drawer
        open={true}
      >
        <AccountBox/>
        <DrawerList/>
      </Drawer>
    )
  }
}

export default SideDrawer
```

Make AccountBox:

```bash
./client/src/components/AccountBox/index.js
```
```javascript
import React, {Component} from 'react'

class AccountBox extends Component {
  render(){
    return (
      <div>
        <h3>AccountBox</h3>
        <button>Login</button>
      </div>
    )
  }
}

export default AccountBox

```

Make DrawerList:

```bash
./client/src/components/DrawerList/index.js
```
```javascript
import React from 'react'
import {Link} from 'react-router'

const DrawerList = () => {
  return (
    <div>
      <Link
        to={'/profile'}
      >
        Profile
      </Link>

      <br/>

      <h4>
        Games
      </h4>
      
      <hr/>

      <Link
        to={'/'}
      >
        TicTacToe
      </Link>

    </div>
  )
}

export default DrawerList

```
