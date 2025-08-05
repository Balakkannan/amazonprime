import React from 'react'
import "./Home.css"

const Contentbox = (company) => {
    console.log(company);
    
  return (
    <>
{company.data.map((box)=>{
  console.log(box);
  
    return(
        <div className='col-4 d-inline-flex ms-2 mb-2 mt-2 position-relative boxhover ps-0 pe-0 overflow-hidden' style={{height:"150px",width:"215px"}}>
            <a href="#" className='h-100 w-100 ' >
            <img src={box.image} height={"100%"} width={"100%"}/>
            </a>

        </div>
    )
})}
  </>
  )
}

export default Contentbox