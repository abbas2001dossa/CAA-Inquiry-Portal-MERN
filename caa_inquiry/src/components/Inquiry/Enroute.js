import React, { useState } from 'react';

const Enroute = (props) => {
  const [EmployeeName, setEmployeeName] = useState('');
  const [EmployeeNames, setEmployeeNames] = useState([]);

  const visible = {
    display: props.display,
  };

  const handleChange = (event) => {
    setEmployeeName(event.target.value);
    document.getElementById('Enroutebtn').innerHTML="Apply";
  };

  const viewNames = () => {
    if (EmployeeName.trim() !== '') {
      setEmployeeNames([...EmployeeNames, EmployeeName]);
      setEmployeeName('');
    }
  };

  function btnClick (){
    document.getElementById('Enroutebtn').innerHTML="Applied";
    console.log(EmployeeNames);
  }

  return (
    <div className='Enroute' style={visible}>
      <div className='top'>
        <div className='row'>
          <h5> ADD Employee Name Within File Route </h5>
        </div>
        <div className='row'>
          <input type='text' value={EmployeeName} onChange={handleChange} />
          <button type='button' onClick={viewNames} className='btn btn-primary'>
            ADD
          </button>
        </div>
      </div>
      <div className='bottom'>
        {EmployeeNames.length > 0 ? (
          <div>
            {EmployeeNames.map((employee, index) => (
              <div key={index} className='separation'>
                {index+ 1}   -   {employee}
              </div>
              
            ))}
          </div>
        ) : (
          <div className='text-center'>No employees added yet.</div>
        )}
      </div>
      <div className="">
            <button id="Enroutebtn" type="button" onClick={btnClick} className="btn btn-primary">
                Apply
            </button>
      </div>
    </div>
  );
};

export default Enroute;
