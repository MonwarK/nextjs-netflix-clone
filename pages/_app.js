import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import Header from "../components/Header"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utilities/firebase';
import Loading from '../components/Loading';
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <RecoilRoot>
      <Head>
        <title>Netflix Clone</title>
        <link rel="shortcut icon" type="image/jpg" href="https://pngimg.com/uploads/netflix/netflix_PNG10.png"/>
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="min-h-screen text-white bg-black scrollbar-hide">
            <Component {...pageProps} />
          </div>
        </>
      )}
    </RecoilRoot>
  )
}

export default MyApp
