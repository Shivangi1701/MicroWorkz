import express from "express";
import { verifyToken } from "../middleware/jwt_middleware.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
router.delete("/:gigId", deleteReview);

export default router;
