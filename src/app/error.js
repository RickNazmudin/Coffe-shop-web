"use client"
import React from 'react'

export default function Error({error,reset}) {
  return (
    <div className='Error'>
      <h2>404</h2>
      <h4>{error.message}</h4>
      <p>We can,t seem to find the page you,re looking for.
          It may have been removed, renamed, or is temporarily unavailable.</p>
          <button className='BtnError' ><span onClick={()=>reset()}>try again</span></button>
 
   
    </div>
  )
}
