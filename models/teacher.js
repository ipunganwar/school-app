'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    // email: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate: {isEmail:true}
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Teacher;
};
