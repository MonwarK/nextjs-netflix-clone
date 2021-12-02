import { RecoilRoot } from 'recoil'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <div className="min-h-screen text-white bg-black">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  )
}

export default MyApp
