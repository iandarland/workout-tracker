const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        type: {
            type: String,
            required: "Type of workout required"
        },
        name: {
            type: String,
            required: "Name of workout required"
        },
        duration: {
            type: Number,
            required: "Duration of workout required"
        },
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        },
    ],

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout