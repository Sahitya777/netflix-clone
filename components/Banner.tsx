import {Movie} from '../typings'
import Image from "next/image"
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'

interface Props{
    netflixOriginals: Movie[]
}
function Banner({netflixOriginals}:Props) {
    const [movie,setMovie]=useState<Movie | null>(null)

    useEffect(()=>{
        setMovie(netflixOriginals[Math.floor(Math.random()*netflixOriginals.length)])
    },[netflixOriginals])
    console.log(movie);
    console.log(Math.floor(Math.random()*netflixOriginals.length));
    
  return (
    <div>
        <div className='absolute top-0 left-0 h-[95vh] w-screen'>
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
        </div>
    </div>
  )
}

export default Banner 