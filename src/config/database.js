module.exports = {
  username: 'root',
  password: 'admin',
  database: 'locadora',
  host: 'localhost',
  dialect: 'mysql',
  port: parseInt(process.env.DB_PORT) || 3306,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}