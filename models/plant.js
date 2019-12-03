//Plant model with common name, scientific name, max height, water needs, and region 

module.exports = function (sequelize, DataTypes) {

    var Plant = sequelize.define("Plant", {

        common_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        scientific_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },

        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 500]
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

    });

    Plant.associate = function (models) {
        //A  plant must belong to a region
        Plant.belongsTo(models.Region, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Plant;
};