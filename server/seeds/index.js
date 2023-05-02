
const seedPizzas = require("./pizzasSeeds");
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPizzas();
  console.log('\n----- PIZZAS SEEDED -----\n');
};



module.exports = seedAll