import { NextFunction, Request, Response } from "express";

export type ExpressController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
