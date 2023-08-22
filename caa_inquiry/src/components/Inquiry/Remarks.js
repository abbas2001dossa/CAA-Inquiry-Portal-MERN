import React, {useState} from 'react'
import '../../styles/StatusInquiry.css';


const Remarks=(props)=> {


    const [Remarks,setRemarks]= useState('');

    const visible = {
        display: props.display,
      };

    const handleSubjChange=(event)=>{
        setRemarks(event.target.value);
        const no = document.getElementById('Remarksbtn');
        no.innerHTML="Apply";
        console.log(Remarks);
    }

    function btnClick() {
        const id = document.getElementById('Remarksbtn');
        id.innerHTML="Applied";
      }

  return (
    <>
        <div id='Remarks' style={visible}>
            <div className="bg-white dim l">
                <h5>Enter Remarks  of your inquiry :</h5>
                <textarea value={Remarks} onChange={handleSubjChange}  />
            </div>
            <button id="Remarksbtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default Remarks