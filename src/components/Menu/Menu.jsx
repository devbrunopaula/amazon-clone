import React from "react"
import "./menu.css"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

function Menu() {
  return (
    <div className='menu'>
      <div className='menu__content'>
        <p className='menu__topTitle'>Hello, User</p>
        <span className='menu__bottomTitle'>Account & Lists</span>
      </div>
      <div className='menu__content'>
        <p className='menu__topTitle'>Returns</p>
        <span className='menu__bottomTitle'>& Orders</span>
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
