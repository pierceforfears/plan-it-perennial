//Region model with name
module.exports = function (sequelize, DataTypes) {
    var Region = sequelize.define("Region", {

        name: DataTypes.STRING
    });

    Region.associate = function (models) {
        //Region has many plants
        Region.belongsToMany(models.Plant, {
            through: 'regionPlant',
            as: 'plants',
            foreignKey: 'regionId',
            otherKey: 'plantId'
        });
    };

    return Region;
};
