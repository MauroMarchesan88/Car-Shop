import { Schema, model as mongooseCreateModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const BikeMongooseSchema = new Schema<IMotorcycle>({
  status: Boolean,
  model: String,
  color: String,
  year: Number,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

export default class MotoModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('MotoModel', BikeMongooseSchema)) {
    super(model);
  }
}