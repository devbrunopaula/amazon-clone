import React from "react"
import "./subnav.css"
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined"

function SubNav() {
  return (
    <div className='subnav'>
      <RoomOutlinedIcon fontSize='medium' className='subnav__location' />
      <div className='subnav__address'>
        <span>Hello</span>
        <p>Select your address</p>
      </div>
      <div className='subnav__links'>
        <p>Best Sellers</p>
        <p>Customer Services</p>
        <p>Today's Deals</p>
        <p>New Releases</p>
        <p>Find a Gift</p>
        <p>Whole Foods</p>
        <p>Gift Cards</p>
        <p>Free Shipping</p>
        <p>Registry</p>
        <p>Sell</p>
        <p>Coupons</p>
        <p>AmazonBasics</p>
        <p>#FoundItOnAmazon</p>
        <p>Shopper Toolkit</p>
      </div>
      <div>
        <p className='subnav__essentials'>Shop College Essentials</p>
      </div>
    </div>
  )
}

export default SubNav
