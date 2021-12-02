import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isModalOpenState, movieState } from '../atoms/movieAtom';
import { BASE_URL, VARIABLES } from '../utilities/ApiRequests';
import { XIcon } from "@heroicons/react/solid"

export default function Modal() {
  const [videoId, setVideoId] = useState(null)
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState)
  const movie = useRecoilValue(movieState)
  
  useEffect(async () => {
    const videoList = await fetch(BASE_URL + `movie/${movie.id}` + VARIABLES)
                        .then(res => res.json())
                        .then(res => res.videos.results)

    setVideoId(videoList.filter((video) => video.type === "Trailer")?.[0]?.key)
  }, [])

  return (
    <>
     <div className="bg-black opacity-60 top-0 left-0 w-full h-full fixed z-40" />
     <div className="fixed top-0 left-0 h-full w-full grid place-items-center z-50">
      <div className="bg-gray-900 rounded-2xl relative shadow-lg w-full max-w-2xl h-[27rem]">
        <XIcon onClick={() => setIsOpen(false)} className="h-7 w-7 absolute top-2 right-2 cursor-pointer" />
        <YouTube
          className="absolute w-[90%] h-[80%] m-auto top-0 left-0 right-0 bottom-0"
          videoId={videoId}
        />
      </div>
     </div>
    </>
  )
}
