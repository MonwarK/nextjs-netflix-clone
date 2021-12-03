import Layout from "../components/Layout";

export default function index() {
  return (
    <Layout isAuth={false}>
      <div className="h-screen grid place-items-center">
        <img
          className="absolute z-0 brightness-50 h-full w-full object-cover top-0 left-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/23c72870-12c8-4682-9f55-337a083ccfa7/a51f79cc-b884-4b64-a5a9-75e04de2c383/GB-en-20211129-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-2">
          <h1 className="text-2xl sm:text-5xl font-bold">Unlimited films, TV programmes and more.</h1>
          <h2 className="text-xl sm:text-2xl my-5">Watch anywhere. Cancel at any time.</h2>
          <p className="text-lg sm:text-xl mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="flex">
            <input
              className="text-gray-700 flex-1 p-2 sm:p-4 outline-none rounded-l-md"
              type="text"
              placeholder="Email Address"
            />
            <button className="btn p-2 md:p-5 md:text-xl md:font-semibold rounded-l-none rounded-r-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
