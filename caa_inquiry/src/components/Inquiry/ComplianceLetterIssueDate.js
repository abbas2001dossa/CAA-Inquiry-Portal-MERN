import React,{useState} from 'react'

const ComplianceLetterIssueDate=(props)=> {

    const [ComplianceLetterIssueDate, setComplianceLetterIssueDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleComplianceLetterIssueDateChange = (event) => {
        setComplianceLetterIssueDate(event.target.value);
        const no = document.getElementById('ComplianceLetterIssueDatebtn');
        no.innerHTML="Apply";
        console.log(ComplianceLetterIssueDate);
    };

    function btnClick() {
        const id = document.getElementById('ComplianceLetterIssueDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="ComplianceLetterIssueDate" className="bg-white dim">
                <h5>Select ComplianceLetterIssue Date :  </h5>
                <input value={ComplianceLetterIssueDate} onChange={handleComplianceLetterIssueDateChange} type="date"  />
            </div>
            <button id="ComplianceLetterIssueDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default ComplianceLetterIssueDate