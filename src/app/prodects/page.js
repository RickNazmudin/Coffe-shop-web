import React from 'react'
import AllFilter from '../Componens/AllFilter/AllFilter'
export default async function ProdectsPage() {
      let prodect = []

  try {

    const res = await fetch("http://localhost:3000/api/prodectsData")
    if(!res.ok) {
      throw new Error("prodects")
    }
    prodect = await res.json()

  }catch(err){

    throw err

  }
  return (
    <div className='ProdectsPage'>
        <AllFilter prodect={prodect}/>
    </div>
  )
}
