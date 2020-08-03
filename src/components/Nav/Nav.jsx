import React from "react"
import SeachInput from "../SearchInput/Input"
import "./nav.css"
import amazonLogo from "../../assets/images/amazon_logo.png"
import Menu from "../Menu/Menu"
import MenuIcon from "@material-ui/icons/Menu"
function Nav() {
  return (
    <div className='nav'>
      <MenuIcon fontSize='large' className='test' />
      <img className='nav__logo' src={amazonLogo} alt='' />
      <SeachInput />
      <Menu />
    </div>
  )
}

export default Nav
