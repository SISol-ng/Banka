import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const request = require('supertest').agent(app.listen());

chai.use(chaiHttp);
chai.should();
const { expect } = require('chai');

describe('User sign up', () => {
  const user = {
    email: 'abc@gmail.com',
    firstName: 'Musa',
    lastName: 'Alfa',
    username: 'alfamc',
    password: 'password',
    confirmPassword: 'password',
    type: 'client',
    isAdmin: 'false',
  };
  // POST/auth/signup - Create user account
  it('Should post a new user sign up', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201, 'Register new user');
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('Should return First name is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.firstName)
      .end((err, res) => {
        expect(res).to.have.status(400, 'First name address is required');
        done();
      });
  });
  it('Should return Last name is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.lastName)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Last name is required');
        done();
      });
  });
  it('Should return Email address is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.email)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Email address is required');
        done();
      });
  });
  it('Should return Username is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.username)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Username is required');
        done();
      });
  });
  it('Should return password is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.password)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Password is required');
        done();
      });
  });
  it('Should return password confirmation is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.confirmPassword)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Password confirmation is required');
        done();
      });
  });
  it('Should return user category is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.type)
      .end((err, res) => {
        expect(res).to.have.status(400, 'User category is required');
        done();
      });
  });
  it('Should return staff category is required', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send(!user.isAdmin)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Staff category is required');
        done();
      });
  });
  it('Should return password does not match', (done) => {
    const password = '12345ab';
    const confirmPassword = '12345';
    request
      .post('/api/v1/auth/signup')
      .send({ password, confirmPassword })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Password does not match');
        done();
      });
  });
  it('Should return email address already exist', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send({ email: 'mhd@gmail.com' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Email already exit');
        done();
      });
  });
  it('Should return username already exist', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send({ username: 'mike123' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Username already exit');
        done();
      });
  });
  it('Should return email address is not valid', (done) => {
    request
      .post('/api/v1/auth/signup')
      .send({ email: 'abu@com' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Email address is not valid');
        done();
      });
  });
});

describe('User sign in/Login', () => {
  // POST/auth/signin - Login user
  it('Should return username/email address is required', (done) => {
    request
      .post('/api/v1/auth/signin')
      .send({ usernameEmail: '' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Username/email address is required');
        done();
      });
  });
  it('Should return password is required', (done) => {
    request
      .post('/api/v1/auth/signin')
      .send({ password: '' })
      .end((err, res) => {
        expect(res).to.have.status(400, 'Password is required');
        done();
      });
  });
  it('should return incorrect username/email and password combination', (done) => {
    const user = { usernameEmail: 'value1', password: 'pass' };
    request
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(400, 'Incorrect username/email and password combination');
        done();
      });
  });

  it('Should successfully login a user with valid login details and return user\'s record', (done) => {
    const user = { usernameEmail: 'mike123', password: 'password' };
    request
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
