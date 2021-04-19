import React from 'react'
import { FaRibbon } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import BloodCheck from "../images/blood-check.png"
import Xray from "../images/chest_x-ray.svg"

function SectionThree() {
  return (
    <div className="check-wrapper">
        <p className="reAct">Recent Activity</p>

        <div className="hivCheck">
            <div className="img">
                <FaRibbon />
                <FaDotCircle />
            </div>
            <p>HIV Draw Blood Test</p>
            <p>A100</p>
        </div>

        <div className="XrayCheck">
            <div>
                <img src={Xray} alt="xray icon" width="50" height="50"/>
            </div>
            <p>TB Radiology XRay</p>
            <p>A30</p>
        </div>

        <div className="bloodCheck">
            <div className="img">
                <img src={BloodCheck} alt="blood check icon" width="50" height="50"/>
            </div>
            <p>Blood Pressure Check</p>
            <p>A10</p>
        </div>

        <div className="span"></div>
    </div>
  )
}

export default SectionThree
