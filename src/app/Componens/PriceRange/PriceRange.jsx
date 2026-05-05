import React from 'react'
import "./PriceRange.css"
function PriceRange({MinPrice,MaxPrice,setPriceValue,PriceValue}) {
  return (
    <div className='PriceRange'>
        <input className='range' type='range'  title={PriceValue} step="1" min={MinPrice} max={MaxPrice} onChange={(e)=>setPriceValue(e.target.value)} />
    </div>
  )
}

export default PriceRange 