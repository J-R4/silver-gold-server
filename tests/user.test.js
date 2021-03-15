const request = require('supertest');
const app = require('../app.js');

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
                    expect(res.status(message).toEqual(`Validation Error`));
                    expect(res.status(detail).toEqual(`email / password is wrong`));

                    return done();
                }
            });
    });

    it('should return response with status code 400', function () {
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
                    expect(res.status(detail).toEqual(`email / password is wrong`));

                    done();
                }
            });
    });
});
