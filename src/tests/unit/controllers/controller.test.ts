import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMock } from '../mocks/carMock';
import { Request, Response } from 'express';

describe('Teste de camada Controller', () => {
  const modelTest = new CarModel();
  const serviceTest = new CarService(modelTest);
  const controllerTest = new CarController(serviceTest);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(serviceTest, 'create').resolves(carMock);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica função Create', async () => {
    req.body = carMock;
    
    await controllerTest.create(req, res);

    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  });

});