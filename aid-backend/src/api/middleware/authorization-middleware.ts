import ForbiddenError from "../../domain/errors/forbidden-error";
import { NextFunction, Request, Response } from "express";

const AuthorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //@ts-ignore
  console.log(req.auth);
  if (req.auth.claims.public_metadata.role !== "admin") {
    throw new ForbiddenError("Admin only route");
  }
  next();
};

export default AuthorizationMiddleware;
