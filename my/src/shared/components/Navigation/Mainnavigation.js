import React from 'react'
import { Link } from 'react-router-dom';

import './Mainnavigation.css'
import Mainheader from './Mainheader';


const  Mainnavigation = props =>{
  return <Mainheader>
         <button className= 'main-navigation__menu-btn'>
            <span/>
            <span/>
            <span/>
         </button>
         <h1 className='main-navigation__title'>
            <Link to ='/'>Your places</Link>
         </h1>
         <nav>
            ......
         </nav>
  </Mainheader>
    
};

export default Mainnavigation