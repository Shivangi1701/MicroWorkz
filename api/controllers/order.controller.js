import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
import Stripe from "stripe";

export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE); // secret key in .env file

  const gig = await Gig.findById(req.params.id);
  // Create a PaymentIntent with amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    gigId: gig._id, // object id of gig is stored as gigId in new order object
    image: gig.cover,
    title: gig.title,
    buyerId: req.userId, // user is buyer who made an order request
    sellerId: gig.userId, // gig has userId of seller the one who created it
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      // if he is a seller -> show all orders that has sellerId equal to his userId i.e, req.userId
      // if he is a buyer -> show all orders that has buyerId equal to his userId i.e, req.userId
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (err) {
    next(err);
  }
};
