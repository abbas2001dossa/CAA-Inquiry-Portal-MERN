import React from 'react'
import NavbarPro from './NavbarPro'
import { useParams } from 'react-router-dom';
import Dashboard from './Dashboard';

function MakeInquiry() {

    const { userName } = useParams();

  return (
    <>
        <NavbarPro userName={userName}></NavbarPro>
        <Dashboard title={"Create an Inquiry "}></Dashboard>
    </>
  )
}

export default MakeInquiry