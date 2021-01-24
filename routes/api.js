const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(results =>{
        res.json(results)
     })
        .catch(err =>{
        res.json(err)
        });
});

router.get("/api/workouts", (req, res) =>{
    db.Workout.find({})
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        res.json(err)
    })
})


router.put("/api/workouts/:id", ({ body, params}) =>{
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercises: body}},
        {new: true, runValidators: true}
    ).then(results =>{
        res.json(results);
    }).catch(err => {
        res.json(err);
    });
});


router.get("/api/workouts/range",(req, res) => {
    db.Workout.find({})
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        res.json(err)
    });
});

module.exports = router;