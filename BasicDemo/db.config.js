module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER || 'root',
    PASSWORD:  process.env.PASSWORD || 'Sarika@1234',
    DB: process.env.DATABASE || 'bookdb',
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  