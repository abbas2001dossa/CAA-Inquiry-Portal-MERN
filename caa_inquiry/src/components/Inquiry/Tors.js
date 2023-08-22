import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tors = (props) => {
  const [numOfTors, setNumofTors] = useState();
  const [newTors, setNewTors] = useState([]); // Temporary state for modified values
  const [Tors, setTors] = useState([]);
  const [InquiryIdValue, setInquiryIdValue] = useState('');


  // Make Tor id , rcv back from database -

  const handlenumOfTorsChange = (event) => {
    setNumofTors(event.target.value);
    const id = document.getElementById('b');
    id.innerHTML = 'Apply';
  };

 

  const visible = {
    display: props.display,
  };
  const visible2 = {
    display: 'none',
  };

  function btnClick() {
    const id = document.getElementById('b');
    const divid = document.getElementById('torNumber');

    id.innerHTML = 'Applied';
    divid.style.display = 'none';
    id.style.display = 'none';

    const id2 = document.getElementById('torsDetails');
    id2.style.display = '';
  }

  function apply() {
    setTors(newTors); // Update the Tors state with newTors
    
    console.log(props.InquiryId);
    const iq = props.InquiryId;
    axios.post('http://127.0.0.1:8000/torToDatabase', { data: newTors, inquiryId: iq })
      .then((response) => {
        console.log(response.data);


      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

      const id2 = document.getElementById('torsDetails');
      id2.style.display = 'none';
      const divid = document.getElementById('torNumber');
      divid.style.display = 'none';
      const id = document.getElementById('b');
      id.style.display = 'none';

  }

  function goBack() {
    const id2 = document.getElementById('torsDetails');
    id2.style.display = 'none';
    const divid = document.getElementById('torNumber');
    divid.style.display = '';
    const id = document.getElementById('b');
    id.style.display = '';
    setNewTors([]);
  }

  const handleTitleChange = (index, event) => {
    const { value } = event.target;
    const updatedTors = [...newTors];
    updatedTors[index] = { ...updatedTors[index], title: value };
    setNewTors(updatedTors);
    console.log(newTors);
    

  };

  const handleFindingsChange = (index, event) => {
    const { value } = event.target;
    const updatedTors = [...newTors];
    updatedTors[index] = { ...updatedTors[index], findings: value };
    setNewTors(updatedTors);
    
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < numOfTors; i++) {
      rows.push(
        <div key={i} className="row mt-5 TorRow">
          <div className="row first">
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
              <button className="bg-primary text-white ml-5" type="button" disabled>
                {i + 1}
              </button>
            </div>
            <div className="col-sm-8">
              <input
                placeholder="Enter title of TOR"
                type="text"
                onChange={(e) => handleTitleChange(i, e)} // Update title on change
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-3"></div>
            <div className="col-sm-8">
              <textarea
                type="text"
                placeholder="Enter Findings of following TOR"
                onChange={(e) => handleFindingsChange(i, e)} // Update findings on change
              />
            </div>
          </div>
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      <div style={visible}>
        <div id="torNumber" className="bg-white dim">
          <h5>Enter number of T.O.Rs :</h5>
          <input value={numOfTors} onChange={handlenumOfTorsChange} type="text" />
        </div>
        <button id="b" type="button" onClick={btnClick} className="btn btn-primary">
          Apply
        </button>
      </div>

      <div id="torsDetails" style={visible2}>
        <div className="bg-white torDim">{renderRows()}</div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col">
            <button type="button" id="goBackTor" onClick={goBack} className="btn btn-primary mt-2">
              Go Back
            </button>
          </div>
          <div className="col-6"></div>
          <div className="col">
            <button type="button" onClick={apply} id="applyTor" className="btn mt-2 btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tors;
