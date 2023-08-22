import React,{useState} from 'react'

const ReForwardingDate=(props)=> {

    const [ReForwardingDate, setReForwardingDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleReForwardingDateChange = (event) => {
        setReForwardingDate(event.target.value);
        const no = document.getElementById('ReForwardingDatebtn');
        no.innerHTML="Apply";
        console.log(ReForwardingDate);
    };

    function btnClick() {
        const id = document.getElementById('ReForwardingDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="ReForwardingDate" className="bg-white dim">
                <h5>Select ReForwarding Date :  </h5>
                <input value={ReForwardingDate} onChange={handleReForwardingDateChange} type="date"  />
            </div>
            <button id="ReForwardingDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default ReForwardingDate