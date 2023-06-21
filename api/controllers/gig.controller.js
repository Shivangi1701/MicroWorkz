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
export const deleteGig = async (req, res, next) => {};
export const getGig = async (req, res, next) => {};
export const getGigs = async (req, res, next) => {};
