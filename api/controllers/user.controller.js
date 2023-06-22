import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  // req.userId is now payload.id if token is valid
  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account !"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User Deleted");
};

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
