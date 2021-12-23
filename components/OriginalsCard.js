import { useRecoilState } from "recoil";
import { isModalOpenState, movieState } from "../atoms/movieAtom";
import Image from "next/image"

export default function OriginalsCard({ movie }) {
  const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);

  const openMovie = () => {
    setSelectedMovie(movie);
    setIsOpen(true);
  };

  return (
    <div className="flex-none" onClick={openMovie}>
      <div className="w-32 h-48 md:w-48 md:h-72 relative hover:scale-110 transition transform duration-150 ease-out">
        <Image 
          className="object-cover cursor-pointer rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
          alt={movie.title} 
          layout="fill"
        />
      </div>
    </div>
  )
}
