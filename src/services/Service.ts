import { ZodSchema } from 'zod';
import IService from '../interfaces/IService';
import { IModel } from '../interfaces/IModel';

export default abstract class Service<T> implements IService<T> {
  constructor(protected _model:IModel<T>, protected _schema:ZodSchema<T>) {}

  public async read():Promise<T[]> {
    return this._model.read();
  }  

  public async create(obj:T):Promise<T> {
    const parsed = this._schema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    const result = await this._model.create(obj);
    return result;
  }

  public async readOne(_id:string):Promise<T | null> {
    return this._model.readOne(_id);
  }

  public async update(_id:string, obj:T):Promise<T | null> {
    const parsed = this._schema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    const result = await this._model.update(_id, parsed.data);
    return result;
  }

  public async delete(_id:string):Promise<T | null> {
    return this._model.delete(_id);
  }
}
