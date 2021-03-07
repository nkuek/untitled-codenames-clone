const path = require('path');
const dotenv = require('dotenv');
const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

dotenv.config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: 'postgres',
        seederStorage: 'sequelize',
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
