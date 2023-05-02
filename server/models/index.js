const User = require('./User');
const Pizza = require('./Pizza');

User.hasMany(Pizza);
Pizza.belongsTo(User);

module.exports = {User, Pizza};