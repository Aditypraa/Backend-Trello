"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Items",
      [
        {
          name: "New Website CodeAtHome",
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UX & UI",
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
