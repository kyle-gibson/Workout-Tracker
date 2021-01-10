const db = require ("../models");
const mongoose = require ("mongoose");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) =>{
        db.Workout.aggregate(
            [{$addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                    }
            }}]
        ).then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });
};

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.aggregate(
            [{$addFields: {
                totalDuration: {
                    $sum: "$excercises.duration"
                }
            }
        }])
        .limit(7)
        if (err){
            res.json(err);
        } else {
            res.json(data);
        }
    })
      

     
      
    


        