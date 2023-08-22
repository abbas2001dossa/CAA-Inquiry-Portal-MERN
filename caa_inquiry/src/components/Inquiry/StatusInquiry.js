import React, { useState } from 'react'
import '../../styles/StatusInquiry.css';


const StatusInquiry=(props)=> {

    const visible ={
        display: props.display
    }

    const [status, setStatus] = useState('');
    

    const handleChange =(event)=>{
        setStatus(event.target.value);
        console.log(status);
    }

    


  return (
    <>
        <div className=" bg-white dim" style={visible}>
            
                <select value={status} onChange={handleChange} name="status" className=" custom-select">
                  <option className='text-black'>Choose Status of Inquiry </option>
                  <option value="In Progress"> In Progress </option>
                  <option value="Completed"> Completed </option>
                  <option value="Over Due">Over Due</option>
                </select>
                  
        </div>
    </>
  )
}

export default StatusInquiry