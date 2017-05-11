var db = require('./_db');
const Day = require('./day');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Day.belongsTo(Hotel);
// Restaurant.belongsToMany(Day, { through: 'RestaurantDay' });
Day.belongsToMany(Restaurant, { through: 'RestaurantDay' });
// Activity.belongsToMany(Day, { through: 'ActivityDay' });
Day.belongsToMany(Activity, { through: 'ActivityDay' });

module.exports = {
    db,
    Place,
    Hotel,
    Restaurant,
    Activity,
    Day
};
