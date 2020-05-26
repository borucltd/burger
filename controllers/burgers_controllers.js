// we need express to set up router
const express = require('express');

// we need model which contains database functions
const burger = require('../models/burger');

const router = express.Router();

// first route for GET
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      // will reply with index 
      res.render("index", hbsObject);
    });
  });

  

module.exports = router

