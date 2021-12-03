const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async function createCheckoutSession(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: req.body.priceId,
            quantity: 1,
          },
        ],
        customer_email: req.body.email,
        // ?session_id={CHECKOUT_SESSION_ID} means the redirect will have the session ID set as a query param
        success_url: `${process.env.BASE_URL}/home/profile`,
        cancel_url: `${process.env.BASE_URL}/home/profile`,
        // automatic_tax: { enabled: true }
      });
  
      return res.redirect(303, session.url);
    } catch (e) {
      res.status(400);
      return res.send({
        error: {
          message: e.message,
        }
      });
    }
  }
}
