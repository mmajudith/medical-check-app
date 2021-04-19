import React from 'react'

function SectionOne() {
  return (
    <div className="price-tag">
      <div className="cur">
          <div className="bal">
            <div className="red">
              <p >AFYA</p>
            </div>
            <p className="pri">143.00</p>
            <p className="tol">balance</p>
          </div>
          <div className="line"></div>
          <div className="equ">
            <div className="green">
              <p >ZAR</p>
            </div>
            <p className="pri">R21.00</p>
            <p className="tol">Equivalent</p>
          </div>
      </div>
    </div>
  )
}

export default SectionOne
