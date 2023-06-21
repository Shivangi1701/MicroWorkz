import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt_middleware.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser); // before going to delete userdirectly it's going to verifyToken - middleware

export default router;
