import OriginalsCard from "./OriginalsCard";
import ScrollContainer from "react-indiana-drag-scroll";

export default function OriginalsRow({ title, movies }) {
  return (
    <div className="p-5">
      <h2 className="text-2xl md:text-4xl font-medium md:mb-5">{title}</h2>
      <ScrollContainer className="flex space-x-5 overflow-x-scroll scrollbar-hide py-5">
        {movies.map((movie, i) => (
          <OriginalsCard key={i} movie={movie} />
        ))}
      </ScrollContainer>
    </div>
  )
}
