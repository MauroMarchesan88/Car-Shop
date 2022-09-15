import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const CarRouter = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

CarRouter.post('/cars', (req, res) => carController.create(req, res));
CarRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));

export default CarRouter;