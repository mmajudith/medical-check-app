import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function SectionTwo() {
  return (
    <div className="currency">

          <p className="select">Select Currency:</p>

          <div className="flex">
              <div className="arrow">
                <p>AFYA <IoIosArrowDown className="white"/></p>
                <img src="" alt=""/>
              </div>
              <p className="zeros">0.00000001</p>
          </div>

          <div className="button-wrapper">
              <button className="sen">Send</button>
              <button className="rec">Receive</button>
          </div>
    </div>
  )
}

export default SectionTwo
