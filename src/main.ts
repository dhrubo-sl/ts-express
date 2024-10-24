import express from 'express';
import { registerControllers, router } from './common';
import { globalErrorHandler } from './middlewares';

function bootstrap() {
  const app = express();
  app.use(express.json());
  try {
    registerControllers();
    app.use(router);
    app.use(globalErrorHandler);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
