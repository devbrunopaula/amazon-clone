import React from "react"
import "./menu.css"

import Badge from "@material-ui/core/Badge"
import { withStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 10,
    border: `2px solid white`,
    padding: "0 px",
  },
}))(Badge)

function Menu() {
  return (
    <div className='menu'>
      <div className='menu__content'>
        <p>Hello, User</p>
        <span>Account & Lists</span>
      </div>
      <div className='menu__content'>
        <p>Returns</p>
        <span>& Orders</span>
      </div>
      <div className='menu__content'>
        <p></p>
        <span>Try Prime</span>
      </div>
      <div className='menu__content cart'>
        <div className='cart'>
          <ShoppingCartIcon fontSize='large' />
          <p className='menu__cart-counter'>4</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
