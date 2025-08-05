import React from 'react'
import "./Footercss.css"
import logo from "./Asstes/footerlogo.png"

const Footer = () => {
  return (
    <div className=' w-100 bg-black d-flex justify-content-center align-items-center'style={{height:"140px"}}>
        <div className='col-6 h-100 w-100 d-flex justify-content-center align-items-center flex-column'>
            <img src={logo} alt="" />
            <div className='w-100 d-flex justify-content-center '>
            <a href="#"  className='texthover text-decoration-none'>Terms and Privacy Notice </a>
            <a href="#"  className='texthover text-decoration-none ms-3'>Send us feedback</a>
            <a href="#"  className='texthover text-decoration-none ms-3'>Help</a>
            </div>
                <h6 style={{color:'#728590'}} className='mt-2'>© 1996-2024, Amazon.com, Inc. or its affiliates</h6>
            </div>
    </div>
  )
}

export default Footer