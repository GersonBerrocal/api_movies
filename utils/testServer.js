const express = require('express');
const superTest = require('supertest');

function testSever(route) {
  const app = express();
  route(app);
  return superTest(app);
}

module.exports = testSever;
