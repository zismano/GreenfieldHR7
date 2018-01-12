var assert = require('assert');
var express = require('express');
var app = express();

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('fail test', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(3, [1,2,3,4].indexOf(4));
    });  	
  })
});

const baseUrl = `http://localhost:${process.env.PORT}`;
const baseUrl = 'http://127.0.0.1:3000';

const request = require('request');
const expect = require('chai').expect;
const pg = require('pg');

const parse = require( 'utils-json-parse' );

const staticMap = require('../helpers/googleMaps.js');

describe('server', function() {
 it('should return the content of index.html', function(done) {
   request(`${baseUrl}/`, function(err, res, body) {

const parse = require( 'utils-json-parse' );

describe('server', function() {
 it('should return the content of index.html', function(done) {
   request(`${baseUrl}/`, function(err, res, body) {
       expect(res.statusCode).to.equal(200);
       done();
   })
 });

 it('should send back parsable stringified JSON when search by category', function(done) {
   request(`${baseUrl}/restaurant/category/burger`, function(err, res, body) {
       expect(parse.bind(this, body)).to.not.throw();

   request('http://127.0.0.1:3000/restaurant/category/burger', function(err, res, body) {
       expect(parse.bind(this, body)).to.not.throw();
       done();
   })
 });

 // it('should send back an array when searchy by category', function(done) {
 //   request(`${baseUrl}/restaurant/category/burger`, function(error, response, body) {
 //     var parseBody = parse(body);
 //     expect(parseBody).to.be.an('array');
 //     done();
 //   });
 // });
 it('should send back parsable stringified JSON when search by name', function(done) {
   request(`${baseUrl}/restaurant/name/san`, function(err, res, body) {
       expect(parse.bind(this, body)).to.not.throw();

 it('should send back an array when searchy by category', function(done) {
   request('http://127.0.0.1:3000/restaurant/category/burger', function(error, response, body) {
     var parseBody = parse(body);
     expect(parseBody).to.be.an('array');
     done();
   });
 });

 it('should send back parsable stringified JSON when search by name', function(done) {
   request(`${baseUrl}/restaurant/name/san`, function(err, res, body) {
       expect(parse.bind(this, body)).to.not.throw();
       done();
   })
 });

 // it('should send back an array when search by name', function(done) {
 //   request(`${baseUrl}/restaurant/name/san`, function(error, response, body) {
 //     var parsedBody = parse(body);
 //     expect(parsedBody).to.be.an('array');
 //     done();
 //   });
 // });

 it('Should 404 when asked for a nonexistent endpoint', function(done) {
   request(`${baseUrl}/arglebargle`, function(error, response, body) {

 it('should send back an array when search by name', function(done) {
   request('http://127.0.0.1:3000/restaurant/name/san', function(error, response, body) {
     var parsedBody = parse(body);
     expect(parsedBody).to.be.an('array');
     done();
   });
 });

 it('Should 404 when asked for a nonexistent endpoint', function(done) {
   request(`${baseUrl}/arglebargle`, function(error, response, body) {
     expect(response.statusCode).to.equal(404);
     done();
   });
 });
});

describe('server', function() {
 it('should return the content of index.html', function(done) {
   request(`${baseUrl}/`, function(err, res, body) {
       expect(res.statusCode).to.equal(200);
       done();
   })
 });
});

describe('google map', function() {
  it('should return a url of a map', function(done) {
    const rest = {
      latitude: 37.787385,
      longitude: -122.414625
    }
    let isMap = staticMap.createMapURL(rest).includes('https://maps.googleapis.com/maps/api/staticmap?center=37.787385%2C-122.414625');
    console.log(isMap);
    expect(isMap).to.equal(true);
    done();
  })
})

 

});
