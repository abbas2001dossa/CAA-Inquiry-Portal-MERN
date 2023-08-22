import React,{useState} from 'react'
import '../../styles/StatusInquiry.css';

const LocOfInquiry=(props)=> {


    
  const [LocOfInquiry,setLocOfInquiry]=useState('');

  const handleLocOfInquiryChange=(event)=>{
    setLocOfInquiry(event.target.value);
    console.log(LocOfInquiry);
  }

  

  const visible = {
    display: props.display,
  };

  return (
    <>
        <div className=" bg-white dim" style={visible}>
            
            <select value={LocOfInquiry} onChange={handleLocOfInquiryChange} className=" custom-select">
                <option value="" className='text-black'>Select location of the Inquiry </option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Quetta">Quetta</option>
                <option value="Multan">Multan</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Sialkot">Sialkot</option>
                <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                <option value="Gwadar">Gwadar</option>
            </select>
              
      </div>
    </>
  )
}

export default LocOfInquiry