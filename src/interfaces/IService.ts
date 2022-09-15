interface IService<T> {
  create(_obj:T):Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T | null>,
  update(_id:string, _obj:T):Promise<T | null>,
  delete(_id:string):Promise<T | null>,
}

export default IService;