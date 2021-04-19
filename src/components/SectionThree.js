import React from 'react'
import { FaRibbon } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import BloodCheck from "../images/blood-check.png"
import Xray from "../images/chest_x-ray.svg"

function SectionThree() {
  return (
    <div>
        <p>Recent Activity</p>

        <div>
            <div>
                <FaRibbon />
                <FaDotCircle />
            </div>
            <p>HIV Draw Blood Test</p>
            <p>A100</p>
        </div>

        <div>
            <div>
                <img src={Xray} alt=""/>
            </div>
            <p>TB Radiology XRay</p>
            <p>A30</p>
        </div>

        <div>
            <div>
                <img src={BloodCheck} alt=""/>
            </div>
            <p>Blood Pressure Check</p>
            <p>A10</p>
        </div>
    </div>
  )
}

export default SectionThree
