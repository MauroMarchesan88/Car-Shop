import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(_obj:T):Promise<T> {
    return this._model.create({ ..._obj });
  }

  public async read():Promise<T[]> {
    return this._model.find();
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    const result = await this._model.findOne({ _id });
    if (!result) throw Error('EntityNotFound');
    return result;
  }

  public async update(_id:string, obj:T):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    const result = await this._model.findByIdAndUpdate({
      _id }, obj as UpdateQuery<T>, { new: true });
    if (!result) throw Error('EntityNotFound');
    return result;
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    const result = await this._model.findOneAndDelete({ _id });
    if (!result) throw Error('EntityNotFound');
    return result;
  }
}

export default MongoModel;