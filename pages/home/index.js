import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isModalOpenState } from '../../atoms/movieAtom';
import FeaturedSection from '../../components/FeaturedSection';
import Layout from '../../components/Layout';
import Modal from '../../components/Modal';
import MovieList from '../../components/MovieList';
import { 
  BASE_URL, 
  TOP_RATED,
  UPCOMING, 
  POPULAR_MOVIES, 
  VARIABLES 
} from "../../utilities/ApiRequests";

export default function Home({ 
  popularMovies,
  topRatedMovies,
  upcomingMovies
}) {  
  const isOpen = useRecoilValue(isModalOpenState);
  const [featuredMovie, setFeaturedMovie] = useState();

  useEffect(() => {
    const randomMovie = popularMovies[Math.round(Math.random() * 20)];
    setFeaturedMovie(randomMovie)
  }, [])

  return (
    <Layout isAuth={true}>
      {isOpen && (
        <Modal />
      )}
      <FeaturedSection featuredMovie={featuredMovie} />  
      <MovieList title="Popular on Netflix" movies={popularMovies} />
      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={upcomingMovies} />
    </Layout>
  )
}

export async function getStaticProps() {
  const popularMovies = await fetch(BASE_URL + POPULAR_MOVIES + VARIABLES)
                          .then(res => res.json())
                          .then(res => res.results)

  const topRatedMovies = await fetch(BASE_URL + TOP_RATED + VARIABLES)
                          .then(res => res.json())
                          .then(res => res.results)

  const upcomingMovies = await fetch(BASE_URL + UPCOMING + VARIABLES)
                          .then(res => res.json())
                          .then(res => res.results)

  return {
    props: {
      popularMovies,
      topRatedMovies,
      upcomingMovies
    }
  }
}