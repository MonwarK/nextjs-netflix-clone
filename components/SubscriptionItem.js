export default function SubscriptionItem({ name, description }) {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>{description}</p>
      </div>
      <button
        className="bg-red-600 hover:bg-red-700 py-3 px-8 rounded-sm font-semibold duration-100"
      >
        Subscribe
      </button>
    </div>
  )
}
