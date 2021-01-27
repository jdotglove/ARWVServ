module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    DB: process.env.DB_DATABASE,
    PASSWORD: process.env.DB_PASS,
    dialect: "mysql",
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };