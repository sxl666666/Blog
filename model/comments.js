
const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Comments = sequelize.define('comment',{
    blog_id:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    parent:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    comments:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Comments.sync() 

module.exports = Comments;