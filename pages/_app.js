import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import Header from "../components/Header"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utilities/firebase';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <RecoilRoot>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="min-h-screen text-white bg-black">
            <Component {...pageProps} />
          </div>
        </>
      )}
    </RecoilRoot>
  )
}

export default MyApp
