import { buffer } from "micro"
import * as admin from "firebase-admin"

const serviceAccount = require("../../utilities/permissions.json")

const app = !admin.apps.length ? admin.initializeApp({
<<<<<<< HEAD
    credential: admin.credential.cert(serviceAccount)
=======
  credential: admin.credential.cert(serviceAccount)
>>>>>>> 43ac4b5f3311c098728d6904bd934f30555a85cd
}) : admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const fulfillOrder = async (session) => {
  console.log("Fulfilling order", session)
  
  return app
<<<<<<< HEAD
      .firestore()
      .collection("users")
      .doc(session.customer_email).set({
          subscriptionType: session.price.product,
          timestamp: admin.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
          console.log(`SUCCESS Order ${session.id} has been added to the DB`)
      })
}

export default async (req, res) => {
    if(req.method === "POST") {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString()
        const sig = req.headers["stripe-signature"];

        let event;

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } 
        catch (err) {
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        if(event.type === "checkout.session.completed") {
            const session = event.data.object;

            return fulfillOrder(session)
                .then(() => res.status(200))
                .catch(err => res.status(400)
                .send(`Webhook error ${err.message}`))
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
=======
    .firestore()
    .collection("users")
    .doc(session.customer_email)
    .set({
      subscriptionType: session.metadata.productId,
      subscriptionPaid: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log(`SUCCESS Order ${session.id} has been added to the DB`)
    })
}

export default async (req, res) => {
  if(req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString()
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } 
    catch (err) {
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    if(event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch(err => res.status(400)
        .send(`Webhook error ${err.message}`))
    }
  }
}

export const config = {
  api: {
      bodyParser: false,
      externalResolver: true
  }
>>>>>>> 43ac4b5f3311c098728d6904bd934f30555a85cd
}