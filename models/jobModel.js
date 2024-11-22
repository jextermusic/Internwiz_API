const mongoose = require("mongoose");

const jobModel = new mongoose.Schema({
        students: [{type: mongoose.Schema.Types.ObjectId, ref: 'student'}],
        employe: {
            id: {type: mongoose.Schema.Types.ObjectId, ref: 'internship'},
            organization: {type: mongoose.Schema.Types.String, ref: 'internship'},
            logo: {type: mongoose.Schema.Types.String, ref: 'internship'},
         },
        profile: String,
        skill: String,
        jobtype: {type: String, enum: ["In office", "Remote"]},
        openings: Number,
        description: String,
        preferences: String,
        salary: Number,
        perks: String,
        assesments: [],
    },
    { timestamps: true },
);


const Job = mongoose.model("job", jobModel);

module.exports = Job;