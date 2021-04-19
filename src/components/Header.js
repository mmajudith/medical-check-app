import React from 'react'
import { FaBatteryFull } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { FaBell } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import {  IoIosRibbon } from "react-icons/io";
//IoIosRibbon

function Header() {
  return (
    <div>
      <div>
          <div>
              <p>4:02</p>
          </div>
          <div>
              <FaSignal />
              <FaWifi />
              <FaBatteryFull />
          </div>
      </div>

      <div>
          <div>
                <img src="" alt=""/>
                <p> <IoIosRibbon />ribbon</p>
          </div>

          <div>
                <FaUserCircle/>
                <FaBell/>
          </div>
      </div>
    </div>
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