import React, { useState } from 'react';
import axios from 'axios';




const Reminder = (props) => {
  const [ReminderDate, setReminderDate] = useState('');
  const [NextReminderDate, setNextReminderDate] = useState('');
  const [ReminderId , setReminderId]=useState('');

  const visible = {
    display: props.display,
  };
  function click(){
    document.getElementById('Reminderbtn').innerHTML="Applied";

    // send data with axios.post 
    const iq = props.InquiryId;
    axios.post('http://127.0.0.1:8000/reminderToDb', { Date: ReminderDate, nextDate : NextReminderDate , inquiryId: iq })
      .then((response) => {
        console.log(response.data.id);
        setReminderId(response.data.id);

      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    
    }

  const handleReminderDateChange = (event) => {
    setReminderDate(event.target.value);
    console.log(ReminderDate);
    document.getElementById('Reminderbtn').innerHTML="Apply";
    };

  const handleNextReminderDateChange = (event) => {
    setNextReminderDate(event.target.value);
    console.log(NextReminderDate);
    document.getElementById('Reminderbtn').innerHTML="Apply";
    };

  return (
    <>
      <div style={visible}>
        <div className="reminderTop">
          <h5> Select Reminder Date </h5>
          <input type="date" value={ReminderDate} onChange={handleReminderDateChange} />
        </div>
        <div className="reminderBottom">
          <h5> Select Next Reminder Date </h5>
          <input type="date" value={NextReminderDate} onChange={handleNextReminderDateChange} />
        </div>

        <div className="">
          <button onClick={click} id="Reminderbtn" type="button" className="btn btn-primary">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Reminder;
