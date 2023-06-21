import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken; // request is now coming with token

  if (!token) return next(createError(401, "You are not authenticated"));

  // if token exist - verify if it's correct token
  jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {
    if (error) return next(createError(403, "Token is not valid"));
    req.userId = payload.id; // match them
    req.isSeller = payload.isSeller;
  });
  next();
};
