import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios';
import { API_key, imageUrl } from '../../Constants/constants';


function Banner() {

    const [movie, setMovie] = useState();
    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((response)=> {
            const movies = response.data.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            const randomMovie = movies[randomIndex]
            setMovie(randomMovie);
        })
    }, []);
    
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title || movie.original_name : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'> {movie ? movie.overview : ""}</h1>
        </div>
        <div className='fade'>
        </div>
    </div>
  )
}

export default Banner
