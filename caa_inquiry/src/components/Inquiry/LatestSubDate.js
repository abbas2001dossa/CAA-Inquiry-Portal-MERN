import React,{useState} from 'react'

const LatestSubmissionDate=(props)=> {

    const [LatestSubmissionDate, setLatestSubmissionDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleLatestSubmissionDateChange = (event) => {
        setLatestSubmissionDate(event.target.value);
        const no = document.getElementById('LatestSubmissionDatebtn');
        no.innerHTML="Apply";
        console.log(LatestSubmissionDate);
    };

    function btnClick() {
        const id = document.getElementById('LatestSubmissionDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="LatestSubmissionDate" className="bg-white dim">
                <h5>Select Latest LatestSubmission Date :  </h5>
                <input value={LatestSubmissionDate} onChange={handleLatestSubmissionDateChange} type="date"  />
            </div>
            <button id="LatestSubmissionDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default LatestSubmissionDate