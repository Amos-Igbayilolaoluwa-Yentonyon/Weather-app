import React from 'react'
import '../styles/Weatherui.css'
import Header from '../components/Header'


const Weatherui = () => {
  return (
    <>
    <Header />
    <div className='mainBody'>
       

      <div className='displayCard'>
        {/* <div> */}
        <div className='weatherIcon'>
        <img src="/weathericon.jpg" alt="" />
        </div>
        <div className='weatherInfo'>
          <div>
            <h2>City Name :</h2>
            <p>Weather Description :</p>
          </div>
          <div className='temperature'>
            <h2>Temperature :
              
            </h2>
            <p>Wind Speed :</p>
          </div>
        </div>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default Weatherui

