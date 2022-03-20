import './filteritem.css'
import React from 'react'

export default function 
() {
  return (
    <div className='filteritem-main'>
        <div className='filteritem-sub'>
            <div><h5>filters</h5></div>
            <div className='filteritem-options'>
                <p className='para' id="clear">CLEAR ALL</p>
                <p className='para'>Bundles</p>
                <p className='para'>Country of origin</p>
                <p className='para'>Size</p>
                <p className='para'>Fabric</p>
                <p className='para'>Features</p>
                <p className='para'>Fit</p>
            </div>
            <div className='sort-item'>
                <p>Sort<span className='spanclass' style={{fontWeight:"500"}} > : Price Recommended</span></p>
            </div>
        </div>

    </div>
  )
}
