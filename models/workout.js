const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({


    day: {
        type: Date,
        default: Date.now();
        //default: () => new Date();
    },
    exercises: [
        {
            type: {
                type: String,
                trim:true,
                required: "Workout Type is required"
            },
            name : {
                type: String,
                trim: true,
                required: "Please enter an excercise name"

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
},
{
    toJSON : {
        virtuals: true
    }
}

);
workoutSchema.virtual("totalDuration").get(function (){
    return this.excercises.reduce((total, excercise)=>{
        return total + excercise.duration
    }, 0)
});


const Workout   = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;