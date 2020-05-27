// we need express to set up router
const express = require('express');

// we need model which contains database functions
const burger = require('../models/burger');

const router = express.Router();

// first route for GET
router.get("/", function(req, res) {
  console.log("Serving main page.");
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      // will reply with index 
      res.render("index", hbsObject);
    });
  });

// add new burger
router.post("/api/burgers", function(req, res) {

  console.log(req.body.name);
    // col1, col2, new_b, is_d, cb
    burger.insertOne("burger_name","devoured",req.body.name, "false", function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      // will reply with index 
      res.render("index", hbsObject);
    });
  });


  // devour the burger
router.put("/api/burgers/:id", function(req, res) {

  

  console.log("ddd"+req.body);
    // col2, is_d, col1, bur_n, cb
     burger.updateOne("devoured",req.body.devoured, "id", req.body.burger_id, function(data) {
       var hbsObject = {
         burgers: data
       };
       console.log(hbsObject);
       // will reply with index 
       res.render("index", hbsObject);
     });
  });
  

module.exports = router

