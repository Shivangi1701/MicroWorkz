import express from "express";
import { verifyToken } from "../middleware/jwt_middleware.js";
import { getOrders, intent } from "../controllers/order.controller.js";

const router = express.Router();

//router.post("/:gigId", verifyToken, createOrder); // no use after payment-intent function
router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);

export default router;
