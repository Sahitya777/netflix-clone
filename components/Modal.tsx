import { XIcon } from '@heroicons/react/solid'
import MuiModel from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useRecoilState} from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import {Movie} from '../typings'
import {Element,Genre} from '../typings'
function Modal() {
    const [showModel,setshowModel]=useRecoilState(modalState)
    const [movie,setMovie]=useRecoilState(movieState)
    const [trailer,setTrailer]=useState("")
    const [genres, setGenres] = useState<Genre[]>([])
    const [muted, setMuted] = useState(false)

    const handleClose=()=>{
        setshowModel(false)
    }
    useEffect(()=>{
        if(!movie) return

        async function fetchMovie() {
            const data = await fetch(
              `https://api.themoviedb.org/3/${
                movie?.media_type === 'tv' ? 'tv' : 'movie'
              }/${movie?.id}?api_key=${
                process.env.NEXT_PUBLIC_API_KEY
              }&language=en-US&append_to_response=videos`
            ).then((response) => response.json())
            if(data?.videos){
                const index=data.videos.results.findIndex((element:Element)=>element.type
                ==="Trailer")
                setTrailer(data.videos?.results[index]?.key)
            }
            if (data?.genres) {
                setGenres(data.genres)
            }
 
          }
          fetchMovie()
         
        }, [movie])
        console.log(trailer)
  return (
    <MuiModel open={showModel} onClose={handleClose}>
        <>
            <button onClick={handleClose} className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
                <XIcon className="h-6 w-6"/>
            </button>
            <div className="relative pt-[56.25%]">
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
            </div>
        </>

    </MuiModel>
  )
}

export default Modal