import React from 'react'
import NavbarPro from './NavbarPro'
import { useParams } from 'react-router-dom';
import UserAuthorization from './UserAuthorization';

const Admin=(props)=> {
    const { userName } = useParams();
    return (
    <>
        <NavbarPro userName={userName} > </NavbarPro> 
        <UserAuthorization></UserAuthorization>
    </>
  )
}

export default Admin
