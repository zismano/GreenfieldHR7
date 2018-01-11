const supertest = require('supertest');
const expect = require('chai').expect;
const server = require('../server/index.js')
 
const request = supertest.agent(server);
 
describe('server', function() {
  describe('GET /restaurant/category/burger', function () {
    it('should return an array of restaurants', function (done) {
      // just assume that if it contains an <input> tag its index.html
      request
        .get('/restaurant/category/burger')
        .expect(200, done);
    });
  });
})
