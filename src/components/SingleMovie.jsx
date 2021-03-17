import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'

const SingleMovie = () => {
    let [movie, setMovie] = useState({})
    let route = useRouteMatch()
    useEffect(() => {
        let getMovie = async () => {
            let {data} = await axios.get(`http://api.themoviedb.org/3/movie/${route.params.movieId}?api_key=829e420903bf1825081ea088c8314c52`)
            setMovie(data)
            document.getElementById("singleMovie").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            document.getElementById("singleMovie").style.backgroundSize = 'cover'
            console.log(document.getElementById("singleMovie"))
        } 
        getMovie()
    }, [])
    console.log(movie)
    return (
        <div className="relative" id="singleMovie">
            <h1 className="text-white">{movie.title}</h1>
            {/* <div className="absolute w-full h-full cover z-0"></div> */}
            <div className="w-60 z-10">
                <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt=""/>
            </div>
        </div>
    )
}

export default SingleMovie