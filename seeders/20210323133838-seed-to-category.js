'use strict';

const data = [
  {
    category: 'Silver',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Gold',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Relic',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    category: 'Etc',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories',data,{})
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
    await queryInterface.bulkDelete('Categories',null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
