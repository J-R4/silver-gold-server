const request = require('supertest');
const express = require('express');
// const app = require('../app.js');
const app = express();

describe('testing POST /login', function () {
    it('should return response with status code 200', function () {
        // setup
        const body = {
            email: 'admin@email.com',
            password: 123456,
        };
        // execute
        request(app)
            .post('/login')
            .send(body)
            .end(function (err, res) {
                if (err) {
                    document(err);
                } else {
                    // assert
                    expect(res.status(status).toEqual(200));
                    expect(res.message(message).toEqual(`Validation Error`));
                    expect(res.detail(detail).toEqual(`email / password is wrong`));

                    done();
                }
            });
    });
});
