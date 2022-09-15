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
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica função Create', async () => {
    const result = await modelTest.create(carMock);

    expect(result).to.be.equal(carMockWithId)
  });

  it('Verifica função read', async () => {
    const result = await modelTest.read();

    expect(result).to.be.deep.equal([carMockWithId])
  });

  it('Verifica função readOne', async () => {
    const result = await modelTest.readOne('62cf1fc6498565d94eba52cd');

    expect(result).to.be.equal(carMockWithId)
  });

});