/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

const Day = db.define('day', {
    number: Sequelize.INTEGER,
}, {
    getterMethods: {
        //getter methods; 
    }
});

module.exports = Day;