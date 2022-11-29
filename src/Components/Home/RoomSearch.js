import React from 'react'

const RoomSearch = () => {
  return (
    <div className='container text-center'>
     <div className='roomSearchWrapper'>
     <div className='d-flex'>
     <p className='mt-2'> City </p> 

     <select className='form-control'>
     <option value="dhaka"> Dhaka</option>
     <option value="chittagong"> Chittagong</option>
     <option value="cox's Bazar"> Cox's Bazar</option>
     <option value="shylate"> Shylate</option>
     <option value="khulna"> Khulna</option>
     <option value="rajshahi"> Shylate</option>
     </select>

     <p>Select Room</p>
     <select className='form-control'>
     <option value="1"> 1</option>
     <option value="2"> 2</option>
     <option value="3"> 3</option>
     <option value="4"> 4</option>
     </select>
     <button className='srcBtn'><i class="fa fa-search" aria-hidden="true"></i></button>
     </div>
     </div>

     
    </div>
  )
}

export default RoomSearch