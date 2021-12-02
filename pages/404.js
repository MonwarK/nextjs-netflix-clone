import Link from "next/link"
import { auth } from "../utilities/firebase"

export default function Page404() {
  return (
    <div className="h-screen grid place-items-center">
      <img
        className="absolute z-0 brightness-50 h-full w-full object-cover top-0 left-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/23c72870-12c8-4682-9f55-337a083ccfa7/a51f79cc-b884-4b64-a5a9-75e04de2c383/GB-en-20211129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-5xl font-bold">Page not found</h1>
        <Link href={auth.currentUser ? "/home" : "/"}>
          <p className="mt-5 font-medium cursor-pointer hover:underline">
            Click here to be redirected to home page
          </p>
        </Link>
      </div>
    </div>
  )
}
