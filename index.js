const mongoose = require('mongoose');
const studentModel = require('./models/student.model1');
// const studentModel1 = require('./models/student.model1');
mongoose.connect('mongodb://localhost/demo_db')

const db = mongoose.connection;

db.on('error', ()=>{
    console.log('Error in connecting to database')
});
db.once('open', ()=>{
    console.log('Connected to database');
    init();
    dbQueries();
})

async function init() {
    const student = {
        name: 'John Doe',
        age: 25,
        email: "syed.danish@google.com",
        subjects: ['Math', 'English', 'Science']
    }

    const std_obj = await studentModel.create(student);
    // console.log(std_obj);
    
};

async function dbQueries() {
    //find by id
    try{
        const student = await studentModel.findById('6722e89dd1782ea7c00b4e63');
        // console.log(student);
    }catch(err){
        console.log(err);
    }
    
    //find by name
    try{
        const students = await studentModel.find({name:'John Doe'});
        // console.log(students);
    }catch(err){
        console.log(err);
    }

    //dealing with multiple conditions
    try{
        const students = await studentModel.where('age').gt('18').where('name').equals('John Doe').limit(3);
        console.log(students);
    }catch(err){    
        console.log(err);
    }

    //deleting a record
    try{
        const students = await studentModel.deleteOne({name:'John Doe'});
        console.log(students);
    }catch(err){
        console.log(err);
    }
}