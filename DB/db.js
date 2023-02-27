const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('blogdb', 'root', 'Brksbs5620.', {
    host: 'https://nodejs-ex-eight.vercel.app',
    dialect: 'mysql'
  });

const connect = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }  
}
connect();
module.exports = sequelize