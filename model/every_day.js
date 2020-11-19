
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const EveryDay = sequelize.define('every_day',{
    content:{
        type: DataTypes.STRING,
        allowNull: false
    }
})
// EveryDay.sync()

module.exports = EveryDay;