const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sxlblog', 'root', '141604',{
    host:'localhost',
    dialect: 'mysql' 
})

module.exports = sequelize;