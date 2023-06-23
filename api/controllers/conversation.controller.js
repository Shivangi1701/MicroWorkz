import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {
  try {
    const newConversation = new Conversation({
      // first one is seller Id always
      // the person initiating conv is seller then req.userId first
      // if person initiating conv is user then (req.body.to) first i.e., seller first
      id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
      sellerId: req.isSeller ? req.userId : req.body.to,
      buyerId: req.isSeller ? req.body.to : req.userId,
      readBySeller: req.isSeller, // if seller has send it ..it has read it hence true else false
      readByBuyer: !req.isSeller,
    });

    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          // after finding the conv. now we can update using set method
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.buyerId }
    );
    // if he is seller find all conv. with sellerId as his own userId
    // if he is buyer find all conv. with buyerId as his
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
