import React from 'react'
import { FaGift } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IoFileTrayFull } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";


function Footer() {
  return (
    <footer>
        <div className="footer-wrapper">
            <div className="home">
                <div>
                    <ImHome className="img"/>
                </div>
                <p>Home</p>
            </div>

            <div>
                <div>
                    <FaListAlt className="img"/>
                </div>
                <p>Activity</p>
            </div>

            <div>
                <div>
                    <IoFileTrayFull className="img"/>
                </div>
                <p>Wallet</p> 
            </div>

            <div>
                <div>
                    <IoStorefrontOutline className="img"/>
                </div>
                <p>Market</p>
            </div>

            <div>
                <div>
                    <FaGift className="img"/>
                </div>
                <p>Earn</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
