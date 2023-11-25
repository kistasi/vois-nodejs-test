const supertest = require('supertest');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const app = require('../src/main');

describe('GET /api/posts', () => {
  it('should return a list of posts', async () => {
    const response = await supertest(app)
      .get('/api/posts')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).to.be.an('object');
  });
});
