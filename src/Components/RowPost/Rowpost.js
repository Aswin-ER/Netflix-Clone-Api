import React, { useEffect, useState } from 'react'
import "./Rowpost.css"
import axios from '../../axios';
import { imageUrl } from '../../Constants/constants';

function Rowpost(props) {

    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        axios.get(props.url).then((response)=> {
            setMovies(response.data.results)
        })
    }, [])

    const handleMovie = () => {

    }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=> {
                return(
                    <div>
                        <img onClick={()=> {handleMovie(obj.id)}} className={props.isSmall ? "smallPoster" : "poster" } alt='' src={`${imageUrl+obj.backdrop_path}`}/>
                        <div className='image-text'>{obj.title || obj.original_name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Rowpost
