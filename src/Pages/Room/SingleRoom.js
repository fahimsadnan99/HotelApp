import React from 'react'
import Img from "../../Assets/room3.jpg"
import Calender from '../../Components/Room/Calender'
import "./style.css"

const SingleRoom = () => {
  return (
    <div className='singleRoomWrapper'>
     <div className='container'>
     <div className='row'>
          <div className='col-12 text-center'>
          <img src={Img} alt="singleRoomImg" className="img-fluid" />
            </div>

            <div className='col-12'>
                 <div className='row'>
                 
                 <div className='my-4 col-lg-6 col-md-6 col-12 order-lg-0 col-md-1'>
                   <h4>City : Chittagong</h4>
                   <h5>Class : Classic</h5>
                   <h5>Hotel Name : Hotel Zaman</h5>
                   <h5 style={{color : "red"}}>Price : 50$ Per Night</h5>
                   <p>Bed : 3</p>
                   <p>Rest Room : 2</p>
                   <p>Ac : No</p>
                   <p>Pet : No</p>
                   <p>Breakfast : No</p>
                   <p>Swimming Pool : No</p>


                 </div>
                 <div className=' my-4 col-lg-6 col-md-12 order-lg-1 col-md-0'>
                 
<Calender></Calender>



<button className='PaybillBtn'>Pay Bill</button>
                 </div>
            </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default SingleRoom