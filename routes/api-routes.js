var db = require("../models");

module.exports = function (app) {

    //Pulls up result for region
    app.get("/api/regions/:region", function (req, res) {

        db.Region.findOne({
            where: {
                id: req.params.region
            },
            include: [{
                model: db.Plant,
                through: {
                    where: {
                        RegionId: req.params.region,
                    }
                }
            }],

        }).then(function (result) {
            return res.json(result);
        });
    });

    //Pulls up result for plant
    app.get("/api/plants/:plant", function (req, res) {

        db.Plant.findOne({
            where: {
                id: req.params.plant
            },
            include: [{
                model: db.Region,
                through: {
                    where: {
                        RegionId: req.params.plant,
                    }
                }
            }],

        }).then(function (result) {
            return res.json(result);
        });
    });

    // Displays all plants on the page
    app.get("/api/plants", function (req, res) {

        db.Plant.findAll({}).then(function (results) {
            res.json(results);
        })

    });

    //Adds plant to the database
    app.post("/api/add", async function (req, res) {

        var newPlant = req.body;

        await db.Plant.create({
            common_name: newPlant.common_name,
            scientific_name: newPlant.scientific_name,
            img_url: newPlant.img_url,
            description: newPlant.description
        });

        const plantArr = await db.Plant.findAll();
        const regionArr = await db.Region.findAll();
        const promises = [];
        let plantIdx = plantArr.length - 1;
        let regionIdx = newPlant.region;
        promises.push(plantArr[plantIdx].addRegion(regionArr[regionIdx]));

        await Promise.all(promises);

        res.status(204).end();

    });

}