const mongoose = require("mongoose");

const internshipModel = new mongoose.Schema({
        students: [{type: mongoose.Schema.Types.ObjectId, ref: 'student'}],
        employe: {
           id: {type: mongoose.Schema.Types.ObjectId, ref: 'internship'},
           organization: {type: mongoose.Schema.Types.String, ref: 'internship'},
           logo: {type: mongoose.Schema.Types.String, ref: 'internship'},
        },
        status: {
            type: String,
            default: "Open",
        },
        profile: String,
        skill: String,
        internshiptype: {type: String, enum: ["In office", "Remote"]},
        openings: Number,
        from: String,
        to: String,
        duration: String,
        responsibility: String,
        stipend: {
            status: { 
            type: String,
            enum: ["Fixed", "Negotiable", "Performance based", "Unpaid"]
        },
        amount: Number,
        according: {
            status: { 
            type: String,
            enum: ["/month", "/year"],
        },
    }
        
        },
        perks: String,
        assesments: [],
    },
    

    { timestamps: true },
    
);


const Internship = mongoose.model("internship", internshipModel);

module.exports = Internship;