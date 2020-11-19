
const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const TagBlogMapping = require('./tag_blog_mapping');

const Tags = sequelize.define('tag',{
    tag:{
        type:DataTypes.STRING,
        allowNull: false
    }
}) 

Tags.sync();

module.exports = Tags;  