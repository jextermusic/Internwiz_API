const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const studentModel = new mongoose.Schema({
        firstname: {
            type: String,
            required: [true, "First Name is required"],
            minLength: [4, "First name should be atleast 4 characters long"],
        },
        lastname: {
            type: String,
            required: [true, "Last Name is required"],
            minLength: [4, "Last name should be atleast 4 characters long"],
        },
        contact: {
            type: String,
            required: [true, "Contact is required"],
            maxLength: [10, "Contact must not exceed 10 characters"],
            minLength: [10, "Contact should be atleast 10 characters long"]
        },
        city: {
            type: String,
            required: [true, "City Name is required"],
            minLength: [3, "City should be atleast 3 characters long"]
        },
        gender: {type: String, enum: ["Male", "Female", "Others"]},
        email: {
            type: String,
            unique: true,
            required: [true,"Email is required"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
    password: {
        type: String,
        select: false,
        maxLength: [15, "Password should not exceed more than 15 characters"],
        minLength: [6, "Password should have atleast 6 characters"],
        // match: []
    },
    resetPasswordToken: {
        type: String,
        default: "0"
    },
    avatar: {
        type: Object,
        default:{
            fileId: '',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
        }
    },
    role: {
        type: String,
        default: "student"
    },
    resume: {
        education: [],
        jobs: [],
        internships: [],
        responsibilities: [],
        courses: [],
        projects: [],
        skills: [],
        accomplishments: [],
    },
    internships: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'internship'}
    ],
    jobs: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'job'}
    ],
    },
    { timestamps: true },
    
);

studentModel.pre("save", function () {
    if (!this.isModified("password")){
        return;
    }


    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
});

studentModel.methods.comparepassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


studentModel.methods.getjwttoken = function() {
    return jwt.sign({id: this._id},
        process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRE
        }
        
        )};


const Student = mongoose.model("student", studentModel);

module.exports = Student;