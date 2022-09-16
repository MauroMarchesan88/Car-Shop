import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarService from '../services/CarService';
import CarModel from '../models/CarModel';
import { CarWtihVehicleSchema } from '../interfaces/ICar';

const CarRouter = Router();

const car = new CarModel();
const carService = new CarService(car, CarWtihVehicleSchema);
const carController = new CarController(carService);

const literal = '/cars/:id';

CarRouter.post('/cars', (req, res) => carController.create(req, res));
CarRouter.get('/cars', (req, res) => carController.read(req, res));
CarRouter.get(literal, (req, res) => carController.readOne(req, res));
CarRouter.put(literal, (req, res) => carController.update(req, res));
CarRouter.delete(literal, (req, res) => carController.delete(req, res));

export default CarRouter;