import 'express-async-errors';
import express from 'express';
import CarRouter from './Routers/CarRouter';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(CarRouter);
app.use(errorHandler);

export default app;
