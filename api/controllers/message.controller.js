import createError from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const createMessage = async (req, res, next) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userId, // the one who is creating message
    desc: req.body.desc,
  });

  try {
    const savedMessage = await newMessage.save();
    // find conversation in which message is created
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(201).send(savedMessage);
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });

    res.status(201).send(messages);
  } catch (err) {
    next(err);
  }
};
