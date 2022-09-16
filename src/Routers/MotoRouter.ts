import { Router } from 'express';
import MotoController from '../controllers/MotoController';
import MotoService from '../services/MotoService';
import MotoModel from '../models/MotoModel';
import { BikeWtihVehicleSchema } from '../interfaces/IMotorcycle';

const MotoRouter = Router();

const moto = new MotoModel();
const motorcycleService = new MotoService(moto, BikeWtihVehicleSchema);
const motorcycleController = new MotoController(motorcycleService);

const literal = '/motorcycles/:id';

MotoRouter.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
MotoRouter.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
MotoRouter.get(literal, (req, res) => motorcycleController.readOne(req, res));
MotoRouter.put(literal, (req, res) => motorcycleController.update(req, res));
MotoRouter.delete(literal, (req, res) => motorcycleController.delete(req, res));

export default MotoRouter;