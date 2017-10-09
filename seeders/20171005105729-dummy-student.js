'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [
    { firstName: 'Akbar', lastName: 'Sahara', email:'akbarsahara@gmail.com',createdAt: new Date(),updatedAt:new Date()},
    { firstName: 'Orang', lastName: 'Biasa', email:'OrangBiasa@gmail.com',createdAt:new Date(),updatedAt:new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
