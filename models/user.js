'use strict'
const { Model } = require('sequelize')


module.exports = (sequelize, DataTypes) => {
    class User extends Model{
        static associate(models){
            User.hasOne(models.Student, { foreignKey: 'user_id', as: 'student'})
        }
    }

    User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            allowNull: true,
            type: DataTypes.STRING
        },
        phone_number: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        created_at: {
           type: DataTypes.DATE,
           allowNull: false,
        },
        updated_at: {
           type: DataTypes.DATE,
           allowNull: false,
        },
    
    },
    {
        sequelize, 
        modelName: 'User',
        tableName: 'users',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    })
    
    return User

}