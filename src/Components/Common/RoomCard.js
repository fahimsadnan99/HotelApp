import React from 'react'
import ROOMOne from "../../Assets/room4.jpg"
import "./style.css"

const RoomCard = () => {
  return (
    <div className='cardWrapper'>
    <div>
      
    <div className='imgWrapperOfCardWrapper'>
      
      <img src={ROOMOne} alt="Assets" className='img-fluid'/>
      <div className="cityClass">
      <span className='ml-3'> City  :  Chittagong </span>    
      <span className='ml-3'> Class : Classic </span>
       </div>
   </div>
        <div className="descriptionCard">
        <p>Hotel Name : Hotel Zaman</p>
        <p>Area : 32 sqft</p>
        <div className='d-flex'><p className=''>Bed : 5</p>
        <p className='ml-5'>Bathroom : 3</p>
        </div>
        <div className='d-flex'>
        <p className=''>Ac : No</p>
        <p className='ml-5'>Pet : No</p>
        </div>
        
        
        </div>
        </div>

       
        
    </div>
  )
}

export default RoomCard