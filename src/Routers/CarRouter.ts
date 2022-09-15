import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';

const CarRouter = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

CarRouter.post('/cars', (req, res) => carController.create(req, res));
CarRouter.get('/cars', (req, res) => carController.read(req, res));
CarRouter.get('/cars/:id', (req, res) => carController.readOne(req, res));
CarRouter.put('/cars/:id', (req, res) => carController.update(req, res));
CarRouter.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default CarRouter;