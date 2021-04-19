import React from 'react'
import { FaGift } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { IoFileTrayFull } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";


function Footer() {
  return (
    <div>
        <div>
            <div>
                <div>
                    <ImHome />
                </div>
                <p>Home</p>
            </div>

            <div>
                <div>
                    <FaListAlt />
                </div>
                <p>Activity</p>
            </div>

            <div>
                <div>
                    <IoFileTrayFull />
                </div>
                <p>Wallet</p> 
            </div>

            <div>
                <div>
                    <IoStorefrontOutline />
                </div>
                <p>Market</p>
            </div>

            <div>
                <div>
                    <FaGift/>
                </div>
                <p>Earn</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
