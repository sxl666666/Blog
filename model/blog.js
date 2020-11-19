
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Blog = sequelize.define('blog',{
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    views:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    tags:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Blog.sync({
//     alter:true
// });

module.exports = Blog;