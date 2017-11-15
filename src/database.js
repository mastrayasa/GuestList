const Sequelize = require('sequelize');
const sequelize = new Sequelize('berita', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  //storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const News = sequelize.define('artikel', {
  judul: Sequelize.STRING,
  isi: Sequelize.STRING,
  tanggal: Sequelize.DATE
});

module.exports = {
  News: News,
}