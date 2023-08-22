import React, {useState} from 'react'
import '../../styles/StatusInquiry.css';


const Subject=(props)=> {


    const [subject,setSubject]= useState('');

    const visible = {
        display: props.display,
      };

    const handleSubjChange=(event)=>{
        setSubject(event.target.value);
        const no = document.getElementById('Subjbtn');
        no.innerHTML="Apply";
        console.log(subject);
    }

    function btnClick() {
        const id = document.getElementById('Subjbtn');
        id.innerHTML="Applied";
      }

  return (
    <>
        <div style={visible}>
            <div className="bg-white dim l">
                <h5>Enter Subject  of your inquiry :</h5>
                <textarea value={subject} onChange={handleSubjChange}  />
            </div>
            <button id="Subjbtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default Subject