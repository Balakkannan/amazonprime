import React, { useState } from 'react'
import { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./moviecss.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan,faBagShopping } from '@fortawesome/free-solid-svg-icons'
import poster1 from "./Asstes/Movielist/1.1.webp"
import poster2 from "./Asstes/Movielist/1.2.webp"
import poster3 from "./Asstes/Movielist/1.3.webp"
import poster4 from "./Asstes/Movielist/1.4.webp"
import poster5 from "./Asstes/Movielist/1.5.webp"
import poster6 from "./Asstes/Movielist/1.6.webp"
import poster7 from "./Asstes/Movielist/1.7.webp"

const Toprated = () => {
    const scrollRef = useRef(null);
    let [posters, setPosters] = useState([
        { image: poster1 },
        { image: poster2 },
        { image: poster3 },
        { image: poster4 },
        { image: poster5 },
        { image: poster6 },
        { image: poster7 },
    ])
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                top: 0,
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };
  return (
    <div>
         <div className='d-flex '>
                <h6 className=' text-white mt-2 fs-5'>Top-rated movies on IMDb</h6>
                <p className='fs-5 mt-1 ms-5 text-white ' >see more  <FontAwesomeIcon className='fs-6 text-white' icon={faGreaterThan}/> </p>
            </div>
            {/* scroll list */}
            <div className='d-flex align-items-center '>
                <button onClick={() => scroll('left')} className=" btn me-3 position-absolute z-1" style={{
                    backgroundColor: `RGB(128, 128, 128,0.3)`, height: "150px", outline: "none"
                }}><FontAwesomeIcon className='text-white fs-3' icon={faLessThan} /></button>
                <div ref={scrollRef} className='flex-wrapper h-25 w-100 '>
                    {posters.map((box, index) => {
                        return (
                            <>
                            <img className="  me-5 moviehover " src={box.image} alt="Movie Images" />
                            <FontAwesomeIcon className='position-relative 'style={{left:"20px",top:'60px',color:"gold"}} icon={faBagShopping} />
                            </>
                        )
                    })}
                </div>
                <button onClick={() => scroll('right')} className="btn btn-dark ms-3 position-absolute z-1" style={{ right: "0px", backgroundColor: `RGB(128, 128, 128,0.3)`, height: "150px", outline: "none" }}><FontAwesomeIcon className='fs-3 text-white' icon={faGreaterThan} /></button>
            </div>
    </div>
  )
}

export default Toprated