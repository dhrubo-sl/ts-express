// error-handler.ts
import { NextFunction, Request, Response } from 'express';

export function globalErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred';
  // const stack = err.stack;
  // console.log({ stack });

  // Respond with a standardized error response
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
}
