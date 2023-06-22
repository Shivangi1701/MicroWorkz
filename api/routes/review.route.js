import express from "express";
import { verifyToken } from "../middleware/jwt_middleware.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:id", getReviews);
router.delete("/:id", verifyToken, deleteReview);

export default router;
