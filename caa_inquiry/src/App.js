import './App.css';
import * as React from "react";
import DgSec from './components/DgSec';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NavbarPro from './components/NavbarPro';
import Admin from './components/Admin';
import Spinner from './components/Spinner';
import MakeInquiry from './components/MakeInquiry';
import CheckGif from './components/CheckGif';


function App() {
  return (
    <>
      
      
      <Router>
        <Routes>
          <Route path='/gif' element={<CheckGif></CheckGif>}></Route>
          <Route path='/dgSec/:userName/makeinquiry' element={<MakeInquiry></MakeInquiry>}></Route>
          <Route path="/spin" element={<Spinner customText={"Logging Out"} ></Spinner>}></Route>
          <Route path="/dgSec/:userName" element={<DgSec></DgSec>} />
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path="/navpro" element={<NavbarPro userName={"Abbas Dossa"}></NavbarPro>}></Route>
          <Route path="/admin/:userName"  element={<Admin></Admin>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
