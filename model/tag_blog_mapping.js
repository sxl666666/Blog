const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const TagBlogMapping = sequelize.define('tag_blog_mapping',{
    tag_id:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    blog_id:{
        type: DataTypes.BIGINT,
        allowNull: false
    }
})

// TagBlogMapping.sync()

module.exports = TagBlogMapping;