import React from 'react'

export default function About(props) {

  let myStyle={
    //color:props.mode ==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white'
    
  }
  return (
    <>
    <h1 className='my-4' style={myStyle}>About Us</h1>
    <p style={myStyle}>This is a website to convert any type of text into Upper case, Lower case 
       </p>
    </>
    
  )
}

