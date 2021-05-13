const Workout = require("../../models/workout")
const db = require("../../models");
const { route } = require("../home-routes");

const router = require("express").Router()

router.get("/", (req, res) => {
    db.Workout.aggregate([
        { 
            $addFields:{totalDuration:
                {
                    $sum:"$exercises.duration"
                }
            }
        }
      ])
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
})

router.put("/:id", (req, res) => {
    db.Workout.findByIdAndUpdate({_id: req.params.id},
        {
            $push: {"exercises": req.body}
        },
        (error, edited) => {
            if (error) {
              console.log(error);
              res.send(error);
            } else {
              console.log(edited);
              res.send(edited);
            }
          }
        )
})

router.post("/", ({body}, res) =>{
    db.Workout.create({body})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    
})

router.get("/range", (req, res) =>{
    db.Workout.aggregate([
        { 
            $addFields:{totalDuration:
                {
                    $sum:"$exercises.duration"
                }
            }
        }
        ])
    .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.json(err);
        });
})

module.exports = router