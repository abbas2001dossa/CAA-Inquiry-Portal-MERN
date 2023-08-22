import React,{useState} from 'react'
import '../../styles/StatusInquiry.css';


const  Opi=(props)=> {

  const [opi,setOpi]=useState('');

  const handleOpiChange=(event)=>{
    setOpi(event.target.value);
  }

  

  const visible = {
    display: props.display,
  };

  return (
    <>
      <div className=" bg-white dim" style={visible}>
            
            <select value={opi} onChange={handleOpiChange} className=" custom-select">
              <option className='text-black' value=''>Choose OPI </option>
              <option value="1">  1</option>
              <option value="2">  2</option>
              <option value="3">  3</option>
            </select>
              
      </div>
    </>
  )
}

export default Opi