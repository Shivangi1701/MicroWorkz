import express from "express";
import { verifyToken } from "../middleware/jwt_middleware.js";

import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller.js";
const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig); // even if we are not logged in we can see our gigs
router.get("/", getGigs);

export default router;
