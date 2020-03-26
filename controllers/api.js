//const app = require("express").Router();

const db = require("../models");

module.exports = (app) => {
  //get api/workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // put api/workouts/:id
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // put rpute
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        
      req.params.id,
      {
        $push: { exercises: req.body }
      },
      {
        runValidator: true,
        new: true
      }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // post api/workouts/
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
