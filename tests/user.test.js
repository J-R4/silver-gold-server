const request = require('supertest');
const express = require('express');

const app = express();

describe('testing POST /login', function () {
    it('should return response with status code 200', function () {
        // setup
        const body = {
            email: 'admin@email.com',
            password: 12356,
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
                    expect(res.status(status).toEqual(400));
                    expect(res.status(message).toEqual(`Validation Error`));
                    expect(res.status(detail).toEqual([]));

                    done();
                }
            });
    });
});
