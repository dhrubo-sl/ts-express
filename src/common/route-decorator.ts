import { NextFunction, Request, Response, Router } from 'express';

export const router = Router();

export function Route(method: 'get' | 'post' | 'put' | 'delete', path: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    router[method](path, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await descriptor.value.apply(target, [req, res, next]);
        if (result !== undefined) {
          const wrappedResponse = {
            success: 'true',
            status: 200,
            data: result,
          };
          res.send(wrappedResponse);
        }
      } catch (err) {
        next(err); // Pass errors to the global error handler
      }
    });
  };
}
