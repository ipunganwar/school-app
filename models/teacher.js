'use strict';
const model = require('../models')

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
      }
    }
  });

  Teacher.associate = function(model) {
    Teacher.belongsTo(model.Subject)
  }

  return Teacher;
};