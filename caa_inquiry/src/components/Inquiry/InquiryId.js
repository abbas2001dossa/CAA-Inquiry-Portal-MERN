import React,{useState} from 'react'
import '../../styles/StatusInquiry.css';


const InquiryId=(props )=> {

  const [InquiryId, setInquiryId] = useState('');

  const visible = {
    display: props.display,
  };

  const handleInquiryIdChange = (event) => {
    setInquiryId(event.target.value);
    const no = document.getElementById('InquiryIdbtn');
    no.innerHTML="Apply";
    
  };

  function btnClick() {
    const id = document.getElementById('InquiryIdbtn');
    id.innerHTML="Applied";
    props.sendDataToParent(InquiryId);
    }

  return (
    <>
        <div style={visible}>
            <div id="File" className="bg-white dim">
                <h5>Enter Inquiry ID : </h5>
                <input value={InquiryId} onChange={handleInquiryIdChange} type="text"  />
            </div>
            <button id="InquiryIdbtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default InquiryId