module.exports = (sequelize,DataTypes) =>{
// Datatypes é parametro obrigatorio para os models do sequelize
const User = sequelize.define(
    'User',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty: {
            msg: "name empty! impossible to register"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty: {
            msg: "email empty! impossible to register"
          },
          isEmail: {
            msg: "is not a valid email"
          }
        }
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty: {
            msg: "password empty! impossible to register"
          },
          // len: {
          //   args: [4, 8],
          //   msg: "Esse campo deve ter entre 4 e 8 caractere"
          // } 
        }
      },
      status: {
        type: DataTypes.INTEGER,
      },
},
{
 tableName: 'users'//nome da tabela
}
)
return User
}