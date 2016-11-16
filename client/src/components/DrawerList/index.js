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
