var path = require("path");

module.exports = function (app) {

    //loads main page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //goes to add page
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/addFlower.html"));
    });

    //goes to display page
    app.get("/display", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/displayFlower.html"));
    });

}