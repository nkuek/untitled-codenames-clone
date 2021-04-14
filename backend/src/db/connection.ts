import { Sequelize } from 'sequelize-typescript';

import accessEnv from '#root/helpers/accessEnv';

import Word from './models';

// Grab the DB_URL from the .env file
const DB_URL = accessEnv('DB_URL');

// New Sequelize instance utilizing the word model
const sequelize = new Sequelize(DB_URL, {
    dialectOptions: {
        charset: 'utf8',
        multipleStatements: true,
    },
    logging: false,
    models: [Word],
});

export default sequelize;
