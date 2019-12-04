"use strict";
const regionData = require("../data/regionData");
const plantData = require("../data/plantData");
const connData = require("../data/connData")
const db = require("../models");

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.bulkInsert("Regions", regionData);

    await queryInterface.bulkInsert("Plants", plantData);

    const plantArr = await db.Plant.findAll();
    const regionArr = await db.Region.findAll();

    const promises = [];
    connData.forEach(function (element) {
      let plantIdx = element.plantId - 1;
      let regionIdx = element.regionId - 1;
      console.log(plantArr[plantIdx]);
      promises.push(plantArr[plantIdx].addRegion(regionArr[regionIdx]));
    });

    await Promise.all(promises);
  },

  down: async (queryInterface) => {

    await queryInterface.bulkDelete("Regions", null, {});
    await queryInterface.bulkDelete("Plants", null, {});

  }
};
