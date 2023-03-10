import React from 'react'

export default function CardStrip({name}) {
  return (
    <div 
        className='card bg-dark' 
        style={
            {
                height:"60px",
                width:"280px",
                margin:"10px"
            }
        }
    >
        <h3 className="text-white">{name}</h3>
    </div>
  )
}
