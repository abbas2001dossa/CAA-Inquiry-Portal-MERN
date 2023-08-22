import React,{useState} from 'react'

const FileRcvDate=(props)=> {

    const [FileRcvDate, setFileRcvDate] = useState('');

    const visible = {
        display: props.display,
    };

    const handleFileRcvDateChange = (event) => {
        setFileRcvDate(event.target.value);
        const no = document.getElementById('FileRcvDatebtn');
        no.innerHTML="Apply";
        console.log(FileRcvDate);
    };

    function btnClick() {
        const id = document.getElementById('FileRcvDatebtn');
        id.innerHTML="Applied";
    }

  return (
    <>
        <div style={visible}>
            <div id="FileRcvDate" className="bg-white dim">
                <h5>Select FileRcv Date :  </h5>
                <input value={FileRcvDate} onChange={handleFileRcvDateChange} type="date"  />
            </div>
            <button id="FileRcvDatebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
        </div>
    </>
  )
}

export default FileRcvDate