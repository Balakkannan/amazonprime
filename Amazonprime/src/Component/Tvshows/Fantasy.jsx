import React, { useState } from 'react'
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan,faBagShopping } from '@fortawesome/free-solid-svg-icons'

import posters1 from './Assted/Fantasy/1.1.webp'
import posters2 from './Assted/Fantasy/1.2.webp'
import posters3 from './Assted/Fantasy/1.3.webp'
import posters4 from './Assted/Fantasy/1.4.webp'
import posters5 from './Assted/Fantasy/1.5.webp'
import posters6 from './Assted/Fantasy/1.6.webp'
import posters7 from './Assted/Fantasy/1.7.webp'

const Fantasy = () => {
    const scrollRef = useRef(null);
    let [posters, setPosters] = useState([
        { image: posters1 },
        { image: posters2 },
        { image: posters3 },
        { image: posters4 },
        { image: posters5 },
        { image: posters6 },
        { image: posters7 },
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
            <div className='container-fluid mt-2'>
                <div className='d-flex '>
                    <h6 className=' text-white mt-2 fs-5'>Kids And Family</h6>
                    <p className='fs-5 mt-1 ms-5 text-white ' >see more  <FontAwesomeIcon className='fs-6 text-white' icon={faGreaterThan} /> </p>
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
                                    <FontAwesomeIcon className='position-relative ' style={{ left: "20px", top: '60px', color: "gold" }} icon={faBagShopping} />
                                </>
                            )
                        })}
                    </div>
                    <button onClick={() => scroll('right')} className="btn btn-dark ms-3 position-absolute z-1" style={{ right: "0px", backgroundColor: `RGB(128, 128, 128,0.3)`, height: "150px", outline: "none" }}><FontAwesomeIcon className='fs-3 text-white' icon={faGreaterThan} /></button>
                </div>
            </div>
        </div>
    )
}

export default Fantasy