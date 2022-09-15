import express from 'express';
import CarRouter from './Routers/CarRouter';

const app = express();
app.use(CarRouter);

export default app;
