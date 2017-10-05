'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg:'Isi data lah bossss'
        }
      }
    },
    lastName: DataTypes.STRING,
    email: {
            type    : DataTypes.STRING,
            isUnique :{
              args: true,
              msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
              fields: [sequelize.fn('lower', sequelize.col('email'))]
            },
            allowNull:false,
            validate:{
                isEmail : {
                    args: true,
                    msg: 'Masukan format emaiil dengan benar'
                }
              }
            }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};