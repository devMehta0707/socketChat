const Sequelize = require('sequelize');

const sequelize = new Sequelize('socketchat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('connected to DB');
    // await sequelize.sync({ alter: true });
  } catch (error) {
    console.log('Error connecting to the database:', error);
  }
})();

module.exports = sequelize;
