const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return FOOD.init(sequelize, DataTypes);
}

class FOOD extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_food: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'NAME'
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'DESCRIPTION'
    },
    calories: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'CALORIES'
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'DIFFICULTY'
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'IMAGE'
    },
    user_id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'ID_USER'
      },
      field: 'USER_ID_USER'
    }
  }, {
    sequelize,
    tableName: 'food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_FOOD" },
        ]
      },
      {
        name: "FOOD_USER",
        using: "BTREE",
        fields: [
          { name: "USER_ID_USER" },
        ]
      },
    ]
  });
  return FOOD;
  }
}
