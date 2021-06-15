require('dotenv').config()
module.exports = {

    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: parseInt(process.env.DB_PORT) || 3306,
    timezone:  "-03:00",
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    }
  }
 