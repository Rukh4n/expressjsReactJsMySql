const Sequelize = require('sequelize');
const dbConection = require('./dbConection');

const articles = dbConection.define('articleS', {
    id : {
        type : Sequelize.DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }, 
    title : {
        type : Sequelize.DataTypes.STRING,
    },
    slug : {
        type : Sequelize.DataTypes.TEXT
    },
    description : {
        type : Sequelize.DataTypes.TEXT
    }
}, {
    timestamps: true

});

articles.sync();

module.exports = articles;