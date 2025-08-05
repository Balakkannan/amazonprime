import React, { useEffect, useState } from 'react'
import { faLessThan, faGreaterThan,faBagShopping } from '@fortawesome/free-solid-svg-icons'
import './moviecss.css'
import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

// first movie
import bgimage from './Asstes/shreeimage.webp'
import chennal from "./Asstes/channels-logo.webp"
import moviecard from "./Asstes/namecard.webp"
import shreevideo from "./Asstes/shree.mp4"
// secound movie
import secoundimage from "./Asstes/secondmovie.webp"
import secoundvideo from "./Asstes/secound.mp4"
import moviecard2 from "./Asstes/secounmoviename.webp"
import Movielist from './Movielist';
// 3 movie
import moviecard3 from "./Asstes/Thirdmovie.webp"
import thirdmovie from "./Asstes/threemoviebg.webp"
import thirdvideo from "./Asstes/threemovie.mp4"
const Movie = () => {
  const items = [
    { logo:chennal,moviename:moviecard,image: bgimage, videoSrc: shreevideo,topname:"#1 in India",Title:"After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously...",prime:"Watch with a Prime membership"  },
    
    { logo:chennal,moviename:moviecard2,image: secoundimage, videoSrc: secoundvideo,topname:"#3 in India",Title:"Auron Mein Kahan Dum Tha is a romantic musical film about Krishna and Vasudha. Their fledgling relationship is...",prime:"Watch with a Prime membership" },
    {
      logo:chennal,moviename:moviecard3,image:thirdmovie,videoSrc:thirdvideo,topname:"#2 in India",prime:"Watch with a Prime membership" ,Title:"Saloni Bagga, an ambitious chef, aims for the Meraki star, avoiding distractions like relationships. She marries Akhil..."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
    setShowVideo(false);
    setTimeout(() => {
      setShowVideo(true);
    },2000);
  };

  return (
    <div className='container-fluid d-flex w-100 bg-black ' style={{height:"auto"}}>
      <div className=' w-100 bg-black d-flex flex-column '>
      <div className='container-fluid'>
      <Carousel activeIndex={currentIndex} onSelect={handleSelect} className='overflow-hidden'>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className='overfly'>
              <img src={item.logo} alt=""  height={"35px"} width={"50px"}/>
              <img src={item.moviename} alt="" height={"200px"} width={"200px"} className='mt-3'/>
              <p className=' mt-2' style={{ color: "#37f1a3" }}>{item.topname}</p>
              <p className='text-white fs-7 mb-3'>{item.Title}</p>
              <div className='d-flex'>
              <button className='border border-0 btn btn-dark btn-outline-light me-3 fw-bold' style={{ width: "150px" }}>Join Prime <br />Watch now</button>
                <button className='border border-0 btn btn-dark btn-outline-light  me-3 fw-bold rounded-circle' style={{ width: "60px" }}><FontAwesomeIcon icon={faPlus} /></button>
                <button className='border border-0 btn btn-dark btn-outline-light me-3 fw-bold rounded-circle' style={{ width: "60px" }}><FontAwesomeIcon icon={faCircleInfo} /></button>
               </div>
               <div className='d-flex mt-2'>
               <FontAwesomeIcon className='position-relative'style={{left:"0px",top:'10px',color:"gold",float:"left"}} icon={faBagShopping} />
               <p className="text-white mt-2 ms-3">{item.prime}</p>
              </div>
            </div>
            {!showVideo ? (
              <>
              <img src={item.image} alt={`Slide ${index}`} className=" imgcar" />  
              </>
            ) : (
              <video  className='videores'  autoPlay muted loop> 
                <source src={item.videoSrc} type="video/mp4" />
              </video>
            )}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    <div>
      <Movielist/>
    </div>
  
    </div>

    </div>


  )
}

export default Movie