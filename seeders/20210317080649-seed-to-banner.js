'use strict';

const data = require('../data/banner.json');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        data.forEach((el) => {
            el.createdAt = new Date();
            el.updatedAt = new Date();
        });
        await queryInterface.bulkInsert('Banners', data, {});
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
        await queryInterface.bulkDelete('Banners', null, {});
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
