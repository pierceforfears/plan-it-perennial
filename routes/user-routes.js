var path = require("path");
var bcrypt = require('bcryptjs');
const saltRounds = 10;
var db = require("../models");

module.exports = function (app) {

    //Create username and password
    app.post("/user/create", function (req, res) {
        var newUser = req.body

        //Prevents duplicate users
        db.User.findOne({
            where: {
                username: newUser.username
            }
        }).then(function (user) {

            if (user) {
                res.send("User already exists!");
            } else {
                bcrypt.hash(newUser.password, saltRounds, function (err, hash) {

                    db.User.create({
                        username: newUser.username,
                        password: hash,
                    }).then(function (data) {

                        if (data) {
                            res.send("User created!");
                        }

                    })

                })

            }

        })

    });

    //user login
    app.post("/user", function (req, res) {

        var login = req.body

        db.User.findOne({
            where: {
                username: login.username
            }
        }).then(function (user) {
            if (!user) {
                res.send("User does not exist!")
            } else {
                bcrypt.compare(login.password, user.password, function (err, result) {

                    if (result == true) {
                        res.send("You are logged in!");
                    } else {
                        res.send("Incorrect Password");

                    }

                })

            }

        });


    });




}