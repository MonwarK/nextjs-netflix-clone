import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utilities/firebase";

export default function SubscriptionItem({ name, description, priceId }) {
  const [user, loading, error] = useAuthState(auth)

  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>{description}</p>
      </div>
      <form action="/api/create-checkout-session" method="POST">
        <input type="hidden" name="priceId" value={priceId} />
        <input type="hidden" name="email" value={user.email} />
        <button className="btn rounded-sm py-3" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  )
}
