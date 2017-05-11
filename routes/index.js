var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;


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

router.get('/hotels', (req, res, next) => {
    Hotel.findAll()
        .then((data) => { res.json(data); })
        .catch(next);
})

router.get('/hotels/:id', (req, res, next) => {
    Hotel.findById(req.params.id)
        .then((data) => { res.json(data); })
        .catch(next);
})

router.get('/restaurants', (req, res, next) => {
    Restaurant.findAll()
        .then((data) => { res.json(data); })
        .catch(next);
})

router.get('/activities', (req, res, next) => {
    Activity.findAll()
        .then((data) => { res.json(data); })
        .catch(next);
})


//DAY ROUTES BELOW
router.get('/days', (req, res, next) => {
    Day.findAll({
            include: [{
                    model: Hotel
                },
                {
                    model: Restaurant
                },
                {
                    model: Activity
                }
            ]
        })
        .then((data) => { res.json(data); })
        .catch(next);
})

router.get('/days/:number', (req, res, next) => {
    Day.findOne({
            where: {
                number: req.params.number
            }
        })
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch(next);
})

router.delete('/days/:number', (req, res, next) => {
    Day.findOne({
            where: {
                number: req.params.number
            }
        })
        .then((data) => {
            res.send('DELETED!');
        })
        .catch(next);
})

router.post('/days', (req, res, next) => {
    Day.create()
        .then((data) => {
            res.json(data);
        })
        .catch(next);
})

// POST Attractions for a given day

router.post('/days/:id/restaurants', (req, res, next) => {
    // Day.create()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch(next);
})

router.post('/days/:id/activities', (req, res, next) => {
    // Day.create()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch(next);
})

router.post('/days/:id/hotel', (req, res, next) => {
    // Day.create()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch(next);
})

// DELETE Attractions for a given day

router.delete('/days/:id/restaurants', (req, res, next) => {
    // Day.create()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch(next);
})

router.delete('/days/:id/activities', (req, res, next) => {
    // Day.create()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch(next);
})

router.delete('/days/:id/hotel', (req, res, next) => {
    // Day.create()
    //     .then((data) => {
    //         res.json(data);
    //     })
    //     .catch(next);
})

//EXPORTING MODULE
module.exports = router;