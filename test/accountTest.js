import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const request = require('supertest').agent(app.listen());

chai.use(chaiHttp);
chai.should();
const { expect } = require('chai');

describe('Create a bank account', () => {
  // POST/accounts - Create bank account
  it('Should return account owner is required', (done) => {
    request
      .post('/api/v1/accounts')
      .send({ owner: '' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Account owner is required');
        done();
      });
  });

  it('Should return account type is required', (done) => {
    request
      .post('/api/v1/accounts')
      .send({ type: '' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Account type is required');
        done();
      });
  });

  it('Should create an account and return account\'s detail', (done) => {
    const account = { owner: 104, type: 'savings' };
    request
      .post('/api/v1/accounts')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Should Activate/Deactivate bank account', () => {
  // PATCH/accounts/:accountNumber - Activate/Deactivate bank account
  it('Should return account status is required', (done) => {
    const account = { accountNumber: 5464767387, status: '' };
    request
      .patch('/api/v1/accounts/:accountNumber')
      .send(account)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Account status is required');
        done();
      });
  });

  it('Should return account not found', (done) => {
    const account = { accountNumber: 1234567890, status: 'active' };
    request
      .patch('/api/v1/accounts/:accountNumber')
      .send(account)
      .end((err, res) => {
        expect(res).to.have.status(404, 'Account not found');
        done();
      });
  });

  it('Should update account\'s status', (done) => {
    const account = { accountNumber: 5464767387, status: 'active' };
    request
      .patch('/api/v1/accounts/:accountNumber')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

describe('Should delete bank account', () => {
  // DELETE/accounts/:accountNumber - Delete bank account
  it('Should return account not found', (done) => {
    const account = { accountNumber: 1234567890 };
    request
      .delete('/api/v1/accounts/:accountNumber')
      .send(account)
      .end((err, res) => {
        expect(res).to.have.status(404, 'Account not found');
        done();
      });
  });

  it('Should delete account\'s record', (done) => {
    const account = { accountNumber: 5464767387 };
    request
      .delete('/api/v1/accounts/:accountNumber')
      .send(account)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
