var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;


router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

router.get('/hotels',(req, res, next)=>{
  Hotel.findAll()
    .then((data)=>{res.json(data);})
    .catch(next);
})

router.get('/restaurants',(req, res, next)=>{
  Restaurant.findAll()
    .then((data)=>{res.json(data);})
    .catch(next);
})

router.get('/activities',(req, res, next)=>{
  Activity.findAll()
    .then((data)=>{res.json(data);})
    .catch(next);
})

module.exports = router;
