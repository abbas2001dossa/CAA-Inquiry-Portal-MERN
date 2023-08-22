import React,{useState} from 'react'

const SubmissionDate=(props)=> {

    const [SubmissionDate, setSubmissionDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleSubmissionDateChange = (event) => {
        setSubmissionDate(event.target.value);
        const no = document.getElementById('SubmissionDatebtn');
        no.innerHTML="Apply";
        console.log(SubmissionDate);
    };

    function btnClick() {
        const id = document.getElementById('SubmissionDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="SubmissionDate" className="bg-white dim">
                <h5>Select  Submission Date :  </h5>
                <input value={SubmissionDate} onChange={handleSubmissionDateChange} type="date"  />
            </div>
            <button id="SubmissionDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default SubmissionDate