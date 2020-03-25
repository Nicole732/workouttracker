const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({


    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim:true,
                required: "Type is required"
            },
            name : {
                type: String,
                trim: true,
                required: "Please enter a name"

            },
            duration: {
                type: Number,
                required: "Please enter a duration"
            },
            weight: {
                type: Number
            },
            reps:{
                type: Number
            },
            sets: {
                type: Number
            },
            distance :{
                type: Number
            }

        }
    ]

   

});


module.exports  = mongoose.model("Workout", WorkoutSchema);
