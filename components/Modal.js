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
  
  useEffect(async () => {
    const type = movie.media_type ? movie.media_type : "movie";

    const videoList = await fetch(BASE_URL + `${type}/${movie.id}` + VARIABLES)
                        .then(res => res.json())
                        .then(res => res.videos.results)

    setVideoId(movie.media_type === "tv" ? videoList?.[0]?.key : videoList?.filter((video) => video.type === "Trailer")?.[0]?.key)
  }, [])

  const animation = {
    initial: {
      scale: 0,
    }, 
    animate: {
      scale: 1,
    }
  }


  return (
    <>
     <div className="bg-black opacity-60 top-0 left-0 w-full h-full fixed z-40" />
     <div className="fixed top-0 left-0 h-full w-full grid place-items-center z-50">
      <motion.div 
        initial={animation.initial}
        animate={animation.animate}
        className="relative w-full max-w-2xl h-[27rem]"
      >
        <XIcon onClick={() => setIsOpen(false)} className="h-7 w-7 absolute top-3 right-0 cursor-pointer" />
        <YouTube
          className="absolute w-[90%] h-[80%] m-auto top-0 left-0 right-0 bottom-0"
          videoId={videoId}
          id={videoId}
        />
      </motion.div>
     </div>
    </>
  )
}
