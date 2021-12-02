import * as admin from "firebase-admin"

const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session)

  return app
      .firestore()
      .collection("users")
      .doc(session.metadata.email)
      .collection("orders")
      .doc(session.id).set({
          amount: session.amount_total / 100,
          amount_shipping: session.total_details.amount_shipping / 100,
          images:  JSON.parse(session.metadata.images),
          timestamp: admin.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
          console.log(`SUCCESS Order ${session.id} has been added to the DB`)
      })
}

export default async function webhook(req, res) {
  let data;
  let eventType;
  // Check if webhook signing is configured.
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (webhookSecret) {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }

  switch (eventType) {
    case 'checkout.session.completed':
      console.log(event.data.object)
      break;
    case 'invoice.paid':
      break;
    case 'invoice.payment_failed':
      break;
    case 'invoice.payment_succeeded':
      break;
    default:
    // Unhandled event type
  }

  res.status(200);
}