import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {extendMoment} from "moment-range";
import Moment from "moment"


const Calender = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [totalDay,setTotalday] = useState([]);
  const [allDay, setAllDay] = useState([])

  const moment = extendMoment(Moment)
  const onChange = (dates) => {
   
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if(start && end) {
     let day = Math.floor(((new Date(end) - new Date(start)) / 86400000) + 1)

     const range = moment.range(moment(start), moment(end))
     const days = Array.from(range.by("day")).map(el =>{
       return moment(el).toISOString()
     })
     console.log(days);

     setTotalday(day)
      setAllDay(days)
     
    }
  };

  const excludeDates = []

 

 
  useEffect(()=>{
    console.log(allDay);
    if(allDay){
      allDay.forEach(day =>{
        excludeDates.push(new Date(day))
      })
    }
  },[startDate, endDate])

  return (
    <div>
    <DatePicker
    selected={startDate}
    onChange={onChange}
    startDate={startDate}
    endDate={endDate}
    excludeDates={excludeDates}
    selectsRange
    inline
  />
  <h5 className='my-3'>Total Tk : {totalDay * 50} Tk</h5>
    </div>
  )
}

export default Calender