import { IModel } from '../interfaces/IModel';
import { CarWtihVehicleSchema, ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarService implements IService<ICar> {
  private _car:IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async create(_obj: ICar): Promise<ICar> {
    const parsed = CarWtihVehicleSchema.safeParse(_obj);
    if (!parsed.success) {
      throw parsed.error;
    }
    const result = await this._car.create(_obj);
    return result;
  }

  public async readOne(_id: string): Promise<ICar | null> {
    return this._car.readOne(_id);
  }

  public async update(_id: string, _obj: ICar): Promise<ICar | null> {
    return this._car.update(_id, _obj);
  }

  public async delete(_id: string): Promise<ICar | null> {
    return this._car.delete(_id);
  }
}