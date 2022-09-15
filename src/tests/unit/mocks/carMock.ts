import { ICar } from "../../../interfaces/ICar";

const carMock:ICar = {
  model: 'Focus',
  color: 'Azul',
  year: 2015,
  buyValue: 50000,
  doorsQty: 4,
  seatsQty: 4,
};

const carMockWithId:ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Focus',
  color: 'Azul',
  year: 2015,
  buyValue: 50000,
  doorsQty: 4,
  seatsQty: 4,
};

const deletedMock:ICar & { deletedCount: number } = {
  model: 'Focus',
  color: 'Azul',
  year: 2015,
  buyValue: 50000,
  doorsQty: 4,
  seatsQty: 4,
  deletedCount: 1,
};

export { carMock, carMockWithId, deletedMock };