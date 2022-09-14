import { isValidObjectId, Model } from 'mongoose';
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
    return this._model.findOne({ _id });
  }

  public async update(_id:string, _obj:T):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    if (!_obj) throw Error('Invalid Object');
    return this._model.findByIdAndUpdate({ _id });
  }

  public async delete(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this._model.findOneAndDelete({ _id });
  }
}

export default MongoModel;