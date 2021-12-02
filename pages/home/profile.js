import SubscriptionItem from "../../components/SubscriptionItem";
import { auth, signOut } from "../../utilities/firebase";
import router from "next/router"
import Layout from "../../components/Layout";

export default function profile() {
  const handleSignOut = () => {
    signOut();
    router.push("/")
  }

  return (
    <Layout isAuth={true}>
      <div className="min-h-screen grid place-items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-center text-4xl font-medium mb-5">Edit Profile</h1>
            <img
              className="w-28 h-28 mb-5 mx-auto md:hidden cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
          <div className="flex px-5 md:space-x-6">
            <img
              className="w-28 h-28 hidden md:block cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <div className="flex-1">
              <h2 className="bg-gray-500 p-1 font-medium">{auth.currentUser?.email}</h2>
              <SubscriptionItem name="Basic Plan" description="720p" />
              <SubscriptionItem name="Standard Plan" description="1080p" />
              <SubscriptionItem name="Premium Plan" description="4k + HDR" />
              <button 
                onClick={handleSignOut}
                className="btn w-full duration-100 mt-4"
              >Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
