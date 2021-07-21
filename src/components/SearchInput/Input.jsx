import React from "react"
import "./input.css"
import { FaSearch } from "react-icons/fa"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

function Input() {
  return (
    <div className='input'>
      <button className='input__category'>
        <div className='input__category-choices'>
          <span>All</span>
          <ArrowDropDownIcon />
        </div>
      </button>
      <input className='input__search' type='text' />
      <button className='input__button'>
        <FaSearch size='1.2rem' />
      </button>
    </div>
  )
}

export default Input
