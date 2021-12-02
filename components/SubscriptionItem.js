export default function SubscriptionItem({ name, description }) {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>{description}</p>
      </div>
      <button
        className="btn rounded-sm py-3"
      >
        Subscribe
      </button>
    </div>
  )
}
