import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers cannot create a review"));
  const newReview = new Review({
    userId: req.userId, // userId of the who created request of creating a review
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    // if already made a review
    if (review)
      return next(
        createError(403, "You have already created a review on this gig")
      );

    const savedReview = await newReview.save();
    // stars are given to gig hence needs an update
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId }); // all reviews on gig with gigId given
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
