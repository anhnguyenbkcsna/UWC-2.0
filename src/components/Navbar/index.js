import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './style.css';
import { CiHome, CiCalendar, CiDeliveryTruck, CiTrash, CiViewList, CiUser } from "react-icons/ci";

function Navbar() {
    return (
            <div id='Navbar' className='row align-items-center'>
                <div className='icon-container'><CiHome className='icon'></CiHome></div>
                <div className='icon-container'><CiViewList className='icon'></CiViewList></div>
                <div className='icon-container'><CiUser className='icon'></CiUser></div>
                <div className='icon-container'><CiTrash className='icon'></CiTrash></div>
                <div className='icon-container'><CiDeliveryTruck className='icon'></CiDeliveryTruck></div>
                <div className='icon-container'><CiCalendar className='icon'></CiCalendar></div>
            </div>
    );
}
export default Navbar;