import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <div className="p-5">
      <h2 className="text-2xl md:text-4xl font-medium md:mb-5">{title}</h2>
      <div className="flex space-x-5 overflow-x-scroll scrollbar-hide py-5">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  )
}
