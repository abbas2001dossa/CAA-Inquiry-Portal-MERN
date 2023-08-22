import React from 'react'
import '../styles/Card.css';
import Card from './Card';
import NavbarPro from './NavbarPro';
import { useParams } from 'react-router-dom';

const  DgSec=(props)=> {

  const { userName } = useParams();
  const currentDate = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  // Extract the day and month from the current date
  const currentDay = currentDate.getDate();
  const currentMonth = monthNames[currentDate.getMonth()];

  return (
    <>
      <NavbarPro userName={userName}></NavbarPro>

      <div className="container">
        <div className="row">
          <Card day={currentDay} month={currentMonth}  title={" Create an Inquiry "} description={" Create an automated inquiry to maintain in your record "}  ></Card>
        </div>
      </div>   
    </>
  )
}

export default DgSec
