import React, { useState } from 'react'
import bgimage from "./Asstes/bgimage.jpg"
import bgimage2 from "./Asstes/bgimage2jpg.jpg"
import './Home.css'
import Contentbox from './Contentbox'
import Firstcomply from "./Comtentimage/1.jpg"
import discovery from "./Comtentimage/2.jpg"
import bbc from "./Comtentimage/3BBC_PLAYER.png"
import manorama from "./Comtentimage/4MANORAMAMAX.jpg"
import hoicho from "./Comtentimage/5hoichoi.jpg"
import chaupal from "./Comtentimage/6Chaupal.png"
import anime from "./Comtentimage/7Anime.jpg"
import sony from "./Comtentimage/8.png"
import mgm from "./Comtentimage/9MGMPLUS.png"
import vr from "./Comtentimage/10Vrott.png"
import erosnonu from "./Comtentimage/11Erosnow.jpg"
import stingray from "./Comtentimage/12Stingray.png"


const Home = () => {
    let [company,setCompany]=useState([
        { image:Firstcomply},
        {image:discovery},
        {image:bbc},
        {image:manorama},
    {image:hoicho},{image:chaupal},{image:anime},{image:sony},{image:mgm},{image:vr},{image:erosnonu},{image:stingray},]);

    
  return (
    <>
    <div className='container-fluid d-flex bg-black  w-100 position-relative bgimagemain align-items-center' style={{backgroundImage:`url(${bgimage})`}}>
            <div className='col-7 h-100 titlebox pt-5 ps-5'>
                <h1 className='text-white mb-3'>Welcome to Prime Video</h1>
                <h5 className='text-white '>Join Prime to watch the latest movies, TV shows and award-winning <br></br> Amazon Originals</h5>
                <button className='btn btn-primary fw-bold mt-5' style={{backgroundColor:"#0f79af",width:"280px",height:"48px"}}>Sign in to join Prime</button>
            </div>
    </div>
    <div className='container-fluid d-flex bg-black h-75 w-100 position-relative bgimagemain align-items-center' style={{backgroundImage:`url(${bgimage2})`}}>
            <div className='col-7 h-100 titlebox pt-5 ps-5'>
                <h1 className='text-white mb-3 mt-1'>Movie rentals on Prime Video</h1>
                <h5 className='text-white mt-3 '>Early Access to new movies, before digital subscription</h5>
                <button className='btn btn-primary fw-bold' style={{backgroundColor:"#0f79af",width:"280px",height:"48px",marginTop:"50px"}}>Rent now</button>
            </div>
           
    </div>
    <div className='container-fluid w-100 ' style={{height:"680px"}}>
        <div className='row h-100 w-100'>
        <div className='col-6   pt-4 ps-5 pe-5'>
            <p className='fw-bolder' style={{fontSize:'45px', fontFamily: "Arial, Helvetica, sans-serif"}}>Your favorite channels all in one place</p>
            <p className='fw-light' style={{fontSize:'25px', fontFamily: "Arial, Helvetica, sans-serif"}}>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
        </div>
        <div className='col-6 mt-2'>
              <Contentbox data={company}/>
        </div>
        </div>
</div>
    </>
  )
}

export default Home