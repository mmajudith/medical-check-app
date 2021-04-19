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


//hsl(332,75%,51%) ribbon
//hsl(333,85%,52%)
//hsl(352,95%,58%) noti
//hsl(352,95%,65%)pro
//hsl(216,5%,19%)background
/*
lightslategray
hsl(205,3%,55%)

deepskyblue
hsl(198,96%,48%)

mistyrose
hsl(333,75%,93%)

whitesmoke
hsl(0,0%,93%)

gainsboro
hsl(0,0%,85%)

lightpink
hsl(352,95%,81%)
*/