'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //here it associate the model to another models
    static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, 
        { foreignKey: {
          allowNull: false
         
        }, onDelete:'CASCADE',
      }),
        models.Comment.belongsTo(models.Post, 
          { foreignKey: {
            allowNull: false,
               
          }, onDelete:'CASCADE',
        })
    }
    
  };
  Comment.init({
    message: { type: DataTypes.TEXT, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};