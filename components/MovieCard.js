import { useRecoilState } from "recoil";
import { movieState, isModalOpenState } from "../atoms/movieAtom";

export default function MovieCard({ movie }) {
  const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);


  const openMovie = () => {
    setSelectedMovie(movie);
    setIsOpen(true);
  };

  return (
    <div onClick={openMovie} className="flex-none group w-80 h-48 relative hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-30">
      {movie.backdrop_path ? (
        <img 
          className="absolute w-full h-full object-cover rounded-md group-hover:brightness-50 z-0"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      ): (
        <div className="absolute w-full h-full rounded-md group-hover:brightness-50 z-0 bg-gray-900 grid place-items-center">No Cover</div>
      )}
      <h2 className="z-50 absolute bottom-5 text-center w-full text-lg font-medium hidden group-hover:block cursor-pointer px-3">
        {movie.title}
      </h2>
    </div>
  )
}
