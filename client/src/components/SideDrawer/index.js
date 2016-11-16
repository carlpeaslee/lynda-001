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
