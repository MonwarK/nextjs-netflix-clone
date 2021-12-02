import SubscriptionItem from "../components/SubscriptionItem";

export default function profile() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex space-x-6 max-w-3xl w-full">
        <img
          className="w-28 h-28"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
        <div className="flex-1">
          <h2 className="bg-gray-500 p-1 font-medium">someone@email.com</h2>
          <SubscriptionItem name="Basic Plan" description="720p" />
          <SubscriptionItem name="Standard Plan" description="1080p" />
          <SubscriptionItem name="Premium Plan" description="4k + HDR" />
        </div>
      </div>
    </div>
  )
}
