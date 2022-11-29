import React from 'react'
import RoomCard from '../Common/RoomCard'

const RoomsDisplay = () => {
  let list = [1,2,3,4,5,6]
  return (
    <div className='container text-center'>
    <div className='row'>
    {
      list.map((item)=>{
        return (
          <div className='col-md-6 col-lg-4 mt-3'>
          <RoomCard></RoomCard>
          </div>
        )
      })
    }
   
    </div>

    <button className='bookBtnHome'>Book Now</button>
    </div>
  )
}

export default RoomsDisplay