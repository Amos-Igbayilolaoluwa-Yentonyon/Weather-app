import React from 'react'
import '../styles/header.css'
import { FcSearch } from "react-icons/fc";

const Header = () => {
  return (
    <div>
      <header className='header'>
            <h1>Weather App</h1>
           <div className='inputHolder'>
           <FcSearch size={25}/>
           <input type="text"  placeholder="Enter city name" />
           </div>
      </header>
    </div>
  )
}

export default Header
