const DataTypes = require("sequelize").DataTypes;
const _FOOD = require("./FOOD");
const _USER = require("./USER");

function initModels(sequelize) {
  const FOOD = _FOOD(sequelize, DataTypes);
  const USER = _USER(sequelize, DataTypes);

  FOOD.belongsTo(USER, { as: "user_id_user_user", foreignKey: "user_id_user"});
  USER.hasMany(FOOD, { as: "foods", foreignKey: "user_id_user"});

  return {
    FOOD,
    USER,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
