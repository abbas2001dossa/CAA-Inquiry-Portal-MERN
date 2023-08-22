import React,{useState} from 'react'

const CompletionDate=(props)=> {

    const [CompletionDate, setCompletionDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleCompletionDateChange = (event) => {
        setCompletionDate(event.target.value);
        const no = document.getElementById('CompletionDatebtn');
        no.innerHTML="Apply";
        console.log(CompletionDate);
    };

    function btnClick() {
        const id = document.getElementById('CompletionDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="CompletionDate" className="bg-white dim">
                <h5>Select  Completion Date :  </h5>
                <input value={CompletionDate} onChange={handleCompletionDateChange} type="date"  />
            </div>
            <button id="CompletionDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default CompletionDate