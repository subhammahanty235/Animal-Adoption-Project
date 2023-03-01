const mongoose = require('mongoose')

const RescuerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 25,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,

    },
    profilepic:{
        type:String,
    },
    contactnumber: {
        type: String,
        required: true,

    },
    workhours: {
        type: String,
    },
    ratings: {
        type: Number,
        Default: 0
    },
    location: {

        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }

    },

    totalrescues:{
        type:String,
        default:0
    },
    


})

const Rescuer = mongoose.model('rescuers', RescuerSchema)
module.exports = Rescuer