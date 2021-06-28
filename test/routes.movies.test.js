const assert = require('assert');
const proxyquire = require('proxyquire');

const { MovieServiceMock, moviesMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    '../services/movies': MovieServiceMock,
  });
  const request = testServer(route);
  describe('GET /movies', () => {
    it('should respond with status 200', function (done) {
      request.get('/api/movies').expect(200, done);
    });
    it('should response with the list of movies', function (done) {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });
        done();
      });
    });
  });
});
