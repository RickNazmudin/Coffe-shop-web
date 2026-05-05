import React from 'react'
import "./HeadingTitle.css"
import Image from "next/image"
import icon2 from "../../Astits/logo.png"

function HeadingTitle({cover,title}) {
  return (
    <div className='HeadingTitle'>
         <h6>
          <Image 
            src={icon2}
            alt='icon2'
            width="50"
            height="50"
            className='icon2'
        />
   
       {cover}</h6>
        <h2>{title}</h2>
       
    </div>
  )
}

export default HeadingTitle