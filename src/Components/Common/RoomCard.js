import React, { useEffect } from 'react'
import ROOMOne from "../../Assets/room4.jpg"
import "./style.css"
import { useNavigate } from "react-router-dom";

const RoomCard = () => {
  const navigate = useNavigate();
  
  


  return (
    <div className='cardWrapper' onClick={()=> navigate("/room/1")}>
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
        <h5 style={{color : "red", display : "block", padding : "5px 0px"}}>Price : 50$ Per Night</h5>
        
        </div>
        </div>

       
        
    </div>
  )
}

export default RoomCard