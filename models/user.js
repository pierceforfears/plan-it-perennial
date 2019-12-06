//User model 

module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 500]
            }
        }

    });

    return User;
};