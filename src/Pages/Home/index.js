import React from 'react'
import Experiance from '../../Components/Home/Experiance'
import MissonAndVison from '../../Components/Home/MissonAndVison'
import NumberOfInfo from '../../Components/Home/NumberOfInfo'
import RoomsDisplay from '../../Components/Home/RoomsDisplay'
import RoomSearch from '../../Components/Home/RoomSearch'
import "./style.css"

const Home = () => {
  return (
    <div style={{overflowX : "hidden"}}>
    <div className='heroWrapper'>
     
    <div className='allElements text-center'>
    <p className='heroText1'>Welcome to EasyBook</p>
    <p className='heroText2'>Get Your Dream Room in Low Price</p>
       <button className='heroBtn'>Book Now</button>
      
    </div>
    </div>

    <RoomSearch></RoomSearch>
    <RoomsDisplay></RoomsDisplay>
    <Experiance></Experiance>
    <NumberOfInfo></NumberOfInfo>
    <MissonAndVison></MissonAndVison>
    </div>
  )
}

export default Home