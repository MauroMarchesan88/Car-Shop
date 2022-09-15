import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMock, carMockWithId } from '../mocks/carMock';

describe('Teste de camada Service', () => {
  const modelTest = new CarModel();
  const serviceTest = new CarService(modelTest);

  before(async () => {
    sinon.stub(modelTest, 'create').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica função Create', async () => {
    const result = await serviceTest.create(carMock);

    expect(result).to.be.equal(carMockWithId)
  });
  
});