import { expect } from 'chai';
import request from 'supertest';
import { app } from '../src/server';
import "../config/test.config"; // Import the test configuration file first

describe('Server', () => {
  it('should respond with "Hello, World!"', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.text).to.equal('Hello, World!');
          done();
        }
      });
  });
});
