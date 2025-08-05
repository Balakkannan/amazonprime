import React, { useState } from 'react'
import "./moviecss.css"
import Topmovie from './Topmovie';
import Romancemovies from './Romancemovies';
import Toprated from './Toprated';


const Movielist = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-white'>Movies</h1>
                <Toprated/>
            <div>
                <Topmovie/>
            </div>
            <div>
                <Romancemovies/>
            </div>
            
        </div>

    )
}

export default Movielist