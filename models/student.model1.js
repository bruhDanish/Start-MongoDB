const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        minLength: 15
    },
    subjects: [String],
    created_at: {
        type: Date,
        default: ()=> new Date(),
        immutable: true
    }
}, {versionKey:false, timestamps:true}); 

module.exports = mongoose.model('Student', studentSchema);