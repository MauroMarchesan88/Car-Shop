import sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMock, carMockWithId } from '../mocks/carMock';
import { Request, Response } from 'express';
import { CarWtihVehicleSchema } from '../../../interfaces/ICar';

describe('Teste de camada Controller', () => {
  const modelTest = new CarModel();
  const serviceTest = new CarService(modelTest, CarWtihVehicleSchema);
  const controllerTest = new CarController(serviceTest);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(serviceTest, 'create').resolves(carMock);
    sinon.stub(serviceTest, 'read').resolves([carMockWithId]);
    sinon.stub(serviceTest, 'readOne').resolves(carMockWithId);
    sinon.stub(serviceTest, 'update').resolves(carMockWithId);
    sinon.stub(serviceTest, 'delete').resolves(carMockWithId);

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

  it('Verifica função read', async () => {
    await controllerTest.read(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith([carMockWithId])).to.be.true;
  });

  it('Verifica função readOne', async () => {
    req.params = { id: carMockWithId._id };

    await controllerTest.readOne(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  });

  it('Verifica função update', async () => {
    req.params = { id: carMockWithId._id };
    req.body = carMock;

    await controllerTest.update(req, res);

    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  });

  it('Verifica função delete', async () => {
    req.params = { id: carMockWithId._id };

    await controllerTest.delete(req, res);

    expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
  });
});