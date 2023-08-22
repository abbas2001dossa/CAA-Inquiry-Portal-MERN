import React,{useState} from 'react'

const ForwardingDate=(props)=> {

    const [ForwardingDate, setForwardingDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleForwardingDateChange = (event) => {
        setForwardingDate(event.target.value);
        const no = document.getElementById('ForwardingDatebtn');
        no.innerHTML="Apply";
        console.log(ForwardingDate);
    };

    function btnClick() {
        const id = document.getElementById('ForwardingDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="ForwardingDate" className="bg-white dim">
                <h5>Select Forwarding Date :  </h5>
                <input value={ForwardingDate} onChange={handleForwardingDateChange} type="date"  />
            </div>
            <button id="ForwardingDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default ForwardingDate