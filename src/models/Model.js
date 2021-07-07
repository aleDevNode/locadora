module.exports = (sequelize,DataTypes) =>{
    // Datatypes é parametro obrigatorio para os models do sequelize
    const Model = sequelize.define(
        'Model',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          marca: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
              notEmpty: {
                msg: "Marca empty! impossible to register"
              }
            }
          },
    },
    {
     tableName: 'models'//nome da tabela
    }
    )
    return Model
    }