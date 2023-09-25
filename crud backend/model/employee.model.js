const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
    fullname:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},
{
    collection:"employee"
});
module.exports=mongoose.model("EmployeeSchema",employeeSchema)