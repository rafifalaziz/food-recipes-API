const Sequelize = require("sequelize")
const initModels = require("./init-models");

const sequelize = new Sequelize(
    process.env.DB_NAME ?? "food_recipes",
    process.env.DB_USERNAME ?? "root",
    process.env.DB_PASSWORD ?? "",
    {
        host: process.env.DB_IP ?? "127.0.0.1",
        dialect: "mysql",
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    }
);

exports.init = initModels(sequelize);