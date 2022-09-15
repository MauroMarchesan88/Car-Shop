import { Request, Response } from 'express';

interface IController<T> {
  create(req: Request, res: Response):Promise<T>,
  read(_req: Request, res: Response): T[],
  readOne(req: Request, res: Response):Promise<T | null>,
  update(req: Request, res: Response):Promise<T | null>,
  delete(req: Request, res: Response):Promise<T | null>,
}

export default IController;