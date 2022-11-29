import React from 'react'

const RoomSearch = () => {
  return (
    <div className='container text-center'>
     <div className='roomSearchWrapper'>
     <div className='d-flex'>
     <div className='d-flex marginOption'>
     <p className='mt-2 srcName'> City </p> 

     <select className=' roomOption mt-1 ml-2'>
     <option value="dhaka"> Dhaka</option>
     <option value="chittagong"> Chittagong</option>
     <option value="cox's Bazar"> Cox's Bazar</option>
     <option value="shylate"> Shylate</option>
     <option value="khulna"> Khulna</option>
     <option value="rajshahi"> Shylate</option>
     </select>
     </div>
     <div className='d-flex '>
     <p style={{display : "inline-block"}} className="mt-2 ml-2 srcName">Select Room</p>
     <select className=' roomOption mt-1 ml-2'>
     <option value="1"> 1</option>
     <option value="2"> 2</option>
     <option value="3"> 3</option>
     <option value="4"> 4</option>
     </select>
     </div>
     <button className='srcBtn'><i class="fa fa-search" aria-hidden="true"></i></button>
     </div>
     </div>

     
    </div>
  )
}

export default RoomSearch