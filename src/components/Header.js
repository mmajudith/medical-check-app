import React from 'react'
import { FaBatteryFull } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaBell } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import {  IoIosRibbon } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="speak">
        <div className="ci"></div>
        <div className="dot"></div>
      </div>
      <div className="timeConnect">
          <div className="time">
              <p>4:02</p>
          </div>
          <div className="connect">
              <FaSignal className="marginLeft"/>
              <FaWifi className="marginLeft"/>
              <FaBatteryFull className="marginLeft"/>
          </div>
      </div>

      <div className="menu-wrapper">
          <div className="logo-wrapper">
                <IoIosRibbon className="logo"/>
                <p>ribbon</p>
          </div>

          <div className="proNot-wrapper">
                <Link to="/notification"><FaUserCircle className="user"/></Link>
                <Link to="/profile"><FaBell className="bell"/></Link>
          </div>
      </div>
    </header>
  )
}

export default Header