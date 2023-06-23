import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId); // find gig in db by using id that user has requested

    const newOrder = new Order({
      gigId: gig._id, // object id of gig is stored as gigId in new order object
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId, // user is buyer who made an order request
      sellerId: gig.userId, // gig has userId of seller the one who created it
      price: gig.price,
      payment_intent: "temporary",
    });

    await newOrder.save();
    res.status(201).send("order successful");
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
