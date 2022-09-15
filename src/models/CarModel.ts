import { Schema, model as mongooseCreateModel } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const CarMongooseSchema = new Schema<ICar>({
  status: Boolean,
  model: String,
  color: String,
  year: Number,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

export default class CarModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('CarModel', CarMongooseSchema)) {
    super(model);
  }
}