import React, { useState, useEffect } from 'react';
import '../../styles/StatusInquiry.css';
import axios from 'axios';

const InquiryOrderBy = (props) => {
    //stores which name is selected  
  const [inquiry, setInquiry] = useState('');


  const [employeeData, setEmployeeData] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeLocation, setEmployeeLocation] = useState('');
  const [employeeDesignation, setEmployeeDesignation] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleEmployeeNameChange = (event) => {
    setEmployeeName(event.target.value);
    const id = document.getElementById('btnInquiry');
    id.innerHTML = 'Apply';
  };

  const handleEmployeeLocationChange = (event) => {
    setEmployeeLocation(event.target.value);
    const id = document.getElementById('btnInquiry');
    id.innerHTML = 'Apply';
    };

  const handleEmployeeDesignationChange = (event) => {
    setEmployeeDesignation(event.target.value);
    const id = document.getElementById('btnInquiry');
    id.innerHTML = 'Apply';
    };

  const visible = {
    display: props.display,
  };

  // Getting employee data from API - useEffect will run only once on component mount
  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/employee-data';
    axios
      .get(apiUrl)
      .then((response) => {
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterData = () => {
    const filteredResults = employeeData.filter((employee) => {
      const nameMatch = employee.name.includes(employeeName);
      const designationMatch =
        employee.designation.toLowerCase() === employeeDesignation.toLowerCase();
      const locationMatch = employee.postingLocation === employeeLocation;
  
      // Combine both city and designation conditions using logical AND (&&)
      return (
        nameMatch &&
        (employeeDesignation === '' || designationMatch) &&
        (employeeLocation === '' || locationMatch)
      );
    });
    setFilteredData(filteredResults);
  };

  // Use useEffect to trigger the filtering process whenever dropdowns or input field values change
  useEffect(() => {
    filterData();
  }, [employeeName, employeeLocation, employeeDesignation, employeeData]);

  function btnClick() {
    const id = document.getElementById('btnInquiry');
    id.innerHTML = 'Applied';
  }

  const handleClick=(name)=>{
    
    setInquiry(name);
    const id = document.getElementById(name);
    const currentBgColor = id.style.backgroundColor;

    if (currentBgColor === 'black') {
        id.style.backgroundColor = 'white';
        id.style.color='black';
    } else {
        id.style.backgroundColor = 'black';
        id.style.color='white';
    }
    
    
    }

  return (
    <>
      <div id="inquiry" style={visible}>
        <div className="dropdowns d-flex flex-row bg-white ">
          <input
            type="text"
            id="dropdown1"
            placeholder="Employee Name..."
            value={employeeName}
            onChange={handleEmployeeNameChange}
          />

          <select
            id="dropdown2"
            value={employeeDesignation}
            onChange={handleEmployeeDesignationChange}
            className="custom-select"
          >
            <option value="" className="text-black">
              Select Designation
            </option>
            <option value="Manager"> Manager </option>
            <option value="Engineer"> Engineer </option>
            <option value="Director"> Director </option>
            <option value="Supervisor"> Supervisor </option>
            <option value="Officer"> Officer </option>
            <option value="Technician"> Technician </option>
          </select>

          <select
            id="dropdown3"
            value={employeeLocation}
            onChange={handleEmployeeLocationChange}
            className="custom-select"
          >
            <option value="" className="text-black">
              Select Location
            </option>
            <option value="Lahore"> Lahore </option>
            <option value="Karachi"> Karachi </option>
            <option value="Islamabad"> Islamabad </option>
            <option value="Hyderabad"> Hyderabad </option>
            <option value="Sukkur"> Sukkur </option>
            <option value="Quetta"> Quetta </option>
            <option value="Peshawar"> Peshawar </option>
          </select>
        </div>

        <div className="displayContainer">
          {/* Display the filtered results here */}
          <div id='filteredData'>

            {filteredData.map((employee) => (
                <div key={employee.id}>
                    <button id={employee.name} onClick={() => handleClick(employee.name)} type='button' className='btn text-center w-100'>
                        <p ><span className='text-danger'>{employee.name}</span>       - {employee.designation} - {employee.postingLocation}</p>
                    </button>
                </div>
            ))}

          </div>
        </div>
        <button id="btnInquiry" type="button" onClick={btnClick} className="btn btn-primary">
          Apply
        </button>
      </div>
    </>
  );
};

export default InquiryOrderBy;
