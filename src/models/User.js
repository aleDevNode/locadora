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
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
      },    
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
},
{
 tableName: 'users'//nome da tabela
}
)
return User
}