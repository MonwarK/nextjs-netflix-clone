import { RecoilRoot } from 'recoil'
import 'tailwindcss/tailwind.css'
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Header />
      <div className="min-h-screen text-white bg-black">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
