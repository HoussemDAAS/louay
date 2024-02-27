

import React from 'react';
import './top.css';
import tn from '../Assets/tn.jpg';
import logo from '../Assets/logo.jpg';
import Navbar from '../Navbar/Navbar';

const Top = () => {
  return (
    <div className="h">
        <div>
            <img className='logo' src={logo} alt="logo" width={"50px"}  /> 
            <p> Lycée pilote privé Pythagore Feriana</p>
        </div>
        <Navbar/>
        <div>
        <img src={tn} alt="tn"  width={"50px"}/> 
            <p1> Republique Tunisienne</p1>
            <p2>Ministère de l'éducation</p2>
        </div>
      
    </div>
    
    
  );
};

export default  Top;
