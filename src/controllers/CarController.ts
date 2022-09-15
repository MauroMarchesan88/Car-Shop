import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

export default class CarController {
  private _car:IService<ICar>;
  constructor(service: IService<ICar>) {
    this._car = service;
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._car.read();
    return res.status(200).json(result);
  }

  public async create(req: Request, res: Response<ICar>) {
    const result = await this._car.create(req.body);
    return res.status(201).json(result);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const result = await this._car.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const result = await this._car.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<ICar | null>) {
    const result = await this._car.delete(req.params.id);
    return res.status(204).json(result);
  }
}