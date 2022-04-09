const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return USER.init(sequelize, DataTypes);
}

class USER extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "USER_ak_1",
      field: 'USERNAME'
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'PASSWORD'
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID_USER" },
        ]
      },
      {
        name: "USER_ak_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USERNAME" },
        ]
      },
    ]
  });
  return USER;
  }
}
