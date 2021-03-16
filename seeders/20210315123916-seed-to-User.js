'use strict';

const {hashPassword} = require('../helpers/bcrypt.js')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = hashPassword(`123456`)

        await queryInterface.bulkInsert(
            'Users',
            [
                {
                    email: `admin@email.com`,
                    password,
                    role: `admin`,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
