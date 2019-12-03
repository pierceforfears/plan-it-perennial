//Region model with name
module.exports = function (sequelize, DataTypes) {
    var Region = sequelize.define("Region", {

        name: DataTypes.STRING
    });

    Region.associate = function (models) {
        //Region has many plants
        Region.hasMany(models.Plant, {
            onDelete: "cascade"
        });
    };

    return Region;
};
