import Link from "next/link"
import { useState } from "react"
import { useRecoilValue } from "recoil"
import { emailState } from "../atoms/emailAtom"
import Layout from "../components/Layout"
import { signUp } from "../utilities/firebase"

export default function register() {
  const savedEmail = useRecoilValue(emailState)
  const [email, setEmail] = useState(savedEmail)
  const [password, setPassword] = useState("")

  const register = async () => {
    signUp(email, password)
      .then(() => router.push("/home"))
      .catch((error) => alert(error.message))
  }

  return (
    <Layout isAuth={false}>
      <div className="h-screen grid place-items-center">
        <img
          className="absolute z-0 brightness-50 h-full w-full object-cover top-0 left-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/23c72870-12c8-4682-9f55-337a083ccfa7/a51f79cc-b884-4b64-a5a9-75e04de2c383/GB-en-20211129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="bg-black px-10 py-10 bg-opacity-75 max-w-sm">
            <h1 className="text-4xl font-semibold my-5">Sign Up</h1>
            <input
              value={email}
              className="bg-gray-700 w-full p-3 rounded-lg mb-4 outline-none"
              type="email"
              placeholder="Email"
              autoComplete={false}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-700 w-full p-3 rounded-lg mb-4 outline-none"
              type="password"
              placeholder="Password"
              autoComplete={false}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register} className="btn w-full my-6 py-2">
              Register
            </button>
            <p className="text-gray-400">Already have an account? 
              <Link href="/login">
                <span className="text-white cursor-pointer ml-2">Sign in now.</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
