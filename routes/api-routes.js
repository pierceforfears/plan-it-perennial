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

    // Displays all plants on the page
    app.get("/api/plants", function (req, res) {

        db.Plant.findAll({}).then(function (results) {
            res.json(results);
        })

    });

    //Adds plant to the database
    app.post("/api/add", function (req, res) {

    });




}