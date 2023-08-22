import React, { useState } from 'react'
import '../../styles/StatusInquiry.css';



function Nomenclature(props) {
  
    const [nomen , setNomen ] = useState('');
    const visible ={
        display: props.display
    }
    const handleChange =(event)=>{
        setNomen(event.target.value);
        
    }



  
    return (
    <>
        <div className="bg-white dim" style={visible}>
            <select value={nomen} onChange={handleChange} name="status" className=" custom-select">
                  <option className='text-black'>Choose Nomenclature </option>
                  <option value="BON"> BON </option>
                  <option value="BOO"> BOO </option>
                  <option value="FFC">FFC</option>
            </select>
        </div>
    </>
  )
}

export default Nomenclature
