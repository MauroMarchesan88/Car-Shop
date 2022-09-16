import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId, deletedMock } from '../mocks/carMock';
import { CarWtihVehicleSchema } from '../../../interfaces/ICar';

describe('Teste de camada Service', () => {
  const modelTest = new CarModel();
  const serviceTest = new CarService(modelTest, CarWtihVehicleSchema);

  before(async () => {
    sinon.stub(modelTest, 'create').resolves(carMockWithId);
    sinon.stub(modelTest, 'read').resolves([carMockWithId]);
    sinon.stub(modelTest, 'readOne').resolves(carMockWithId);
    sinon.stub(modelTest, 'update').resolves(carMockWithId);
    sinon.stub(modelTest, 'delete').resolves(deletedMock);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica função Create', async () => {
    const result = await serviceTest.create(carMock);

    expect(result).to.be.equal(carMockWithId)
  });

  it('Verifica função read', async () => {
    const result = await serviceTest.read();

    expect(result).to.be.deep.equal([carMockWithId])
  });

  it('Verifica função readOne', async () => {
    const result = await serviceTest.readOne('62cf1fc6498565d94eba52cd');

    expect(result).to.be.equal(carMockWithId)
  });

  it('Verifica função update', async () => {
    const result = await serviceTest.update('62cf1fc6498565d94eba52cd', carMock);

    expect(result).to.be.equal(carMockWithId)
  });

  it('Verifica função delete', async () => {
    const result = await serviceTest.delete('62cf1fc6498565d94eba52cd');

    expect(result).to.be.equal(deletedMock)
  });
  
});