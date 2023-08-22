import React,{useState} from 'react'

const DecisionDate=(props)=> {

    const [DecisionDate, setDecisionDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleDecisionDateChange = (event) => {
        setDecisionDate(event.target.value);
        const no = document.getElementById('DecisionDatebtn');
        no.innerHTML="Apply";
        console.log(DecisionDate);
    };

    function btnClick() {
        const id = document.getElementById('DecisionDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="DecisionDate" className="bg-white dim">
                <h5>Select Decision Date :  </h5>
                <input value={DecisionDate} onChange={handleDecisionDateChange} type="date"  />
            </div>
            <button id="DecisionDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default DecisionDate