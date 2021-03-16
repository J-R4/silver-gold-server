const request = require('supertest');
const app = require('../app.js');

describe('testing POST /login', function () {
    it('should return response with status code 200', function (done) {
        // setup
        const body = {
            email: 'admin@email.com',
            password: '123456',
            role: `admin`
        };
        // execute
        request(app)
            .post('/login')
            .send(body)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    // assert
                    let access_token = res.body.access_token
                    expect(res.statusCode).toEqual(200);
                    expect(res.body).toHaveProperty('access_token');
                    expect(typeof res.body).toBe(`object`);
                    expect(typeof access_token).toBe(`string`);

                    done();
                }
            });
    });
});
