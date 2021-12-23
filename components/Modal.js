import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isModalOpenState, movieState } from '../atoms/movieAtom';
import { BASE_URL, VARIABLES } from '../utilities/ApiRequests';
import { XIcon } from "@heroicons/react/solid"
import { motion } from 'framer-motion';

export default function Modal() {
  const [videoId, setVideoId] = useState(null);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);
  const movie = useRecoilValue(movieState);
  const releaseYear = movie?.release_date?.substring(0,4);

  useEffect(async () => {
    const type = movie.media_type ? movie.media_type : "movie";

    const videoList = await fetch(BASE_URL + `${type}/${movie.id}` + VARIABLES)
                        .then(res => res.json())
                        .then(res => res.videos.results)

    setVideoId(movie.media_type === "tv" ? videoList?.[0]?.key : videoList?.filter((video) => video.type === "Trailer")?.[0]?.key)
  }, [])

  const animation = {
    initial: {
      top: "100%",
    }, 
    animate: {
      top: 0,
    }
  }
  console.log(movie)

  return (
    <motion.div 
      initial={animation.initial}
      animate={animation.animate}
      transition={{
        type: "just"
      }}
      className="fixed left-0 h-screen w-full z-50 bg-black flex flex-col justify-between"
    >
      <div className='overflow-y-auto scrollbar-thumb-gray-800 scrollbar-thin'>
        <div className='my-5 max-w-screen-lg mx-auto p-3'>
          <div className="relative w-full h-[27rem] mx-auto my-4">
            <YouTube
              className="absolute w-full h-full m-auto top-0 left-0 right-0 bottom- z-0"
              videoId={videoId}
              id={videoId}
            />
          </div>
          <h1 className='text-3xl font-medium'>{movie.title}</h1>
          <div className='flex space-x-3 items-center my-2'>
          {releaseYear >= (new Date().getFullYear() - 3 ) && (
            <p className='font-medium text-green-500'>New</p>
          )}
          <p>{releaseYear}</p>
          <p>{movie.vote_average}</p>
          <p className='px-1 bg-gray-500 text-black rounded-md font-semibold'>
            HD
          </p> 
          </div>
          <div>
            <h2 className='font-medium text-xl mb-3'>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
      <button 
        className='bg-gray-900 hover:bg-gray-700 duration-200 p-3'
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
    </motion.div>
  )
}
