'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentSubject = sequelize.define('StudentSubject', {
    StudentId: DataTypes.INTEGER,
    SubjectId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  StudentSubject.associate = model => {
    StudentSubject.belongsTo(model.Subject)
    StudentSubject.belongsTo(model.Student)
  }
  return StudentSubject;
};