import { useRouter } from "next/router"
import { useRecoilValue } from "recoil";
import { isModalOpenState } from "../../atoms/movieAtom";
import Modal from "../../components/Modal";
import MovieCard from "../../components/MovieCard";
import { BASE_URL, SEARCH } from "../../utilities/ApiRequests";
import Layout from "../../components/Layout"

export default function search({ movies }) {
  const isOpen = useRecoilValue(isModalOpenState);
  const router = useRouter();

  return (
    <Layout isAuth={true}>
      <div className="pt-20 px-4">
        {isOpen && (
          <Modal />
        )}
        <h1 className="text-2xl mb-5">Search results for "{router?.query?.name}"</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {movies.map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps (context) {
  const queryName = context.query.name;

  if (!queryName) {
    return {
      props: {
        movies: []
      }
    }
  } 

  const movies = await fetch(`${BASE_URL}${SEARCH}&query=${queryName}`)
                  .then((res) => res.json())
                  .then((res) => res.results)

  return {
    props: {
      movies
    }
  }
}