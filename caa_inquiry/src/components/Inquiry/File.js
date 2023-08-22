import React, { useState } from 'react';
import '../../styles/StatusInquiry.css';

const File = (props) => {
  // file number would be stored inside this
  const [file, setFile] = useState('');

  const visible = {
    display: props.display,
  };

  const handleFileChange = (event) => {
    setFile(event.target.value);
    const no = document.getElementById('Filebtn');
    no.innerHTML="Apply";
  };

  function btnClick() {
    const id = document.getElementById('Filebtn');
    id.innerHTML="Applied";
  }

  return (
    <>
      <div style={visible}>
        <div id="File" className="bg-white dim">
          <h5>Enter file no# of your inquiry :</h5>
          <input value={file} onChange={handleFileChange} type="text" id="FileNo" name="FileNo" />
        </div>
        <button id="Filebtn" type="button" onClick={btnClick} className="btn btn-primary">
          Apply
        </button>
      </div>

      
    </>
  );
};

export default File;
