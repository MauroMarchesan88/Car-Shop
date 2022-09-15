import sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../mocks/carMock';

describe('Testes da camada Model', () => {
  const modelTest = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica função Create', async () => {
    const result = await modelTest.create(carMock);

    expect(result).to.be.equal(carMockWithId)
  });

});