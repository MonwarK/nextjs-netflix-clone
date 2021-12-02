import { useRecoilState } from "recoil";
import { isModalOpenState, movieState } from "../atoms/movieAtom";

export default function FeaturedSection({ featuredMovie }) {
  const [selectedMovie, setSelectedMovie] = useRecoilState(movieState);
  const [isOpen, setIsOpen] = useRecoilState(isModalOpenState);

  const openMovie = (e) => {
    e.preventDefault();
    setSelectedMovie(featuredMovie);
    setIsOpen(true);
  };
  
  return (
    <div className="min-h-[60vh] md:min-h-[65vh] xl:min-h-[70vh] 2xl:min-h-[75vh] relative">
      <img
        className="absolute w-full h-full object-cover z-0 brightness-[0.65]"
        src={`https://image.tmdb.org/t/p/original${featuredMovie?.backdrop_path}`}
        alt=""
      />
      <div className="bg-gradient-to-t from-black to-transparent bottom-0 absolute h-10 w-full" />
      <div className="absolute w-full h-full z-20 grid place-items-center">
        <div className="md:grid grid-cols-2 px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-medium">{featuredMovie?.title}</h1>
            <div className="flex items-center space-x-3 my-4">
              <p>{featuredMovie?.release_date.substring(0, 4)}</p>
              <p className="border px-2">4K Ultra HD</p>
              <p className="border px-2">{featuredMovie?.vote_average}</p>
            </div>
            <p className="line-clamp-3 text-lg leading-relaxed">{featuredMovie?.overview}</p>
            <div className="flex space-x-4 my-3 md:my-10">
              <button onClick={openMovie} className="w-36 py-1 bg-white bg-opacity-25 hover:bg-opacity-40">Play</button>
              <button className="w-36 py-1 bg-white bg-opacity-25 hover:bg-opacity-40">Add to List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
