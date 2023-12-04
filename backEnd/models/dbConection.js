const Sequelizr = require('sequelize');
const Mysql2 = require('mysql2');

const dbConection = new Sequelizr('article', 'root', '', {
    host    : 'localhost',
    dialect : 'mysql',
    // port    : ''
    // port di isi saat database sudah di hosting
} );

module.exports = dbConection;