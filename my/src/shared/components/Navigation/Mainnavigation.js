import React , {useState} from 'react'
import { Link } from 'react-router-dom';

import './Mainnavigation.css'
import Mainheader from './Mainheader';
import Navlinks from './Navlinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop'

const  Mainnavigation = props =>{
   const [draweropen , setdraweropen] = useState(false);

   const opendrawer = () =>
   {
      setdraweropen(true);
   }

   const closedrawer = () =>
   {
      setdraweropen(false);
   }


     return (
   <React.Fragment>
        {draweropen  && <Backdrop onClick ={closedrawer}/>}

        <SideDrawer show = {draweropen} onClick = {closedrawer}>
         <nav className='main-navigation__drawer-nav'>
            <Navlinks/>
         </nav>
        </SideDrawer>


      <Mainheader>
         <button className= 'main-navigation__menu-btn' onClick={opendrawer} >
            <span/>
            <span/>
            <span/>
         </button>
         <h1 className='main-navigation__title'>
            <Link to ='/'>Your places</Link>
         </h1>
         <nav className='main-navigation__header-nav'>
         <Navlinks/>
         </nav>
  </Mainheader>
 </React.Fragment>
)};

export default Mainnavigation