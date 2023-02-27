const {  DataTypes } = require('sequelize');
const sequelize = require("../DB/db")

const Blog = sequelize.define("blogs", {


  baslik: {
      type: DataTypes.STRING,
      allowNull: false
  },
  aciklama: {
      type: DataTypes.TEXT,
      allowNull: true
  },
  resim: {
      type: DataTypes.STRING,
      allowNull: false
  },
  anasayfa: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  },
  onay: {
      type: DataTypes.BOOLEAN,
      allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Blog;