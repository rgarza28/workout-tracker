const Workout = require("../models/workout");

module.exports = (app) => {
  app.post("/api/workouts", (req, res) => {
    Workout.create({}).then((data) => {
      console.log("Post: ", data); // posting undefined
      res.json(data);
    });
  });

  app.get("/api/workouts", (req, res) => {
    Workout.find().then((data) => {
      res.json(data);
      console.log("Data", data);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((data) => {
      res.json(data);
    });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
