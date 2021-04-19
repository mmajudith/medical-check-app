import React from 'react'
import { FaBatteryFull } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaBell } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import {  IoIosRibbon } from "react-icons/io";

function Header() {
  return (
    <header>
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
                <FaUserCircle className="user"/>
                <FaBell className="bell"/>
          </div>
      </div>
    </header>
  )
}

export default Header