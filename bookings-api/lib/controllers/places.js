const { Router } = require('express');

const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const places = await Place.find().exec();
      res.json(places);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const place = await Place.findOne({ _id: req.params.id });
      res.json(place);
    } catch (err) {
      next(err);
    }
  });

//both of the try-catches above were added in attempt to fix failing tests with 'UnhandledPromiseRejectionWarning: This error originated either by throwing inside of an async function without a catch block' ...errors
