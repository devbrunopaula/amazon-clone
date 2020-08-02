import React from "react"
import "./input.css"
import { FaSearch } from "react-icons/fa"

function Input() {
  return (
    <div className='input'>
      <input className='input__search' type='text' />
      <button className='input__button'>
        <FaSearch size='1.2rem' />
      </button>
    </div>
  )
}

export default Input
