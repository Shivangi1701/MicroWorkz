import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  // only seller can create gig
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a gig !"));
  const newGig = new Gig({
    userId: req.userId,
    ...req.body, // copy other properties from req.body to newGig object
  });

  try {
    const savedGig = await newGig.save(); // it may take sometime to complete
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};
export const deleteGig = async (req, res, next) => {
  // this will come from verifyToken and req.id is updated to payload.id
  try {
    const gig = await Gig.findById(req.params.id); // it will find gig by gig id
    if (req.userId != gig.userId)
      // the person who is requesting to delete (req.userId) is whether the person who made it (gig.userId)
      return next(createError(403, "You can delete only your gig !"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted");
  } catch (err) {
    next(err);
  }
};
export const getGig = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
export const getGigs = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
