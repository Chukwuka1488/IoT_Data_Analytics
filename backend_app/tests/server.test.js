"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../src/server");
require("../config/test.config"); // Import the test configuration file first
describe('Server', () => {
    it('should respond with "Hello, World!"', (done) => {
        (0, supertest_1.default)(server_1.app)
            .get('/')
            .expect(200)
            .end((err, res) => {
            if (err) {
                done(err);
            }
            else {
                (0, chai_1.expect)(res.text).to.equal('Hello, World!');
                done();
            }
        });
    });
});
