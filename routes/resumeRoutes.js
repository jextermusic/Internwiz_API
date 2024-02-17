const express = require("express");
const router = express.Router();
const {
    resume, 
    addeducation, 
    editeducation, 
    deleteeducation,
    addjob,
    editjob,
    deletejob,
    addintern,
    editintern,
    deleteintern,
    addresp,
    editresp,
    deleteresp,
    addcours,
    editcours,
    deletecours,
    addproj,
    editproj,
    deleteproj,
    addskil,
    editskil,
    deleteskil,
    addacomp,
    editacomp,
    deleteacomp, 
} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");


// GET / Route
router.get("/", isAuthenticated, resume);

///////////////////////////////////// Education ////////////////////////////////////////

// POST /add/edu
router.post("/add-edu", isAuthenticated, addeducation)

// POST /edit-edu/eduid
router.post("/edit-edu/:eduid", isAuthenticated, editeducation)

// POST /delete-edu/eduid
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation)


///////////////////////////////////// Job ////////////////////////////////////////

// POST /add/job
router.post("/add-job", isAuthenticated, addjob)

// POST /edit-job/jobid
router.post("/edit-job/:jobid", isAuthenticated, editjob)

// POST /delete-job/jobid
router.post("/delete-job/:jobid", isAuthenticated, deletejob)


///////////////////////////////////// Internships ////////////////////////////////////////

// POST /add/intern
router.post("/add-intern", isAuthenticated, addintern)

// POST /edit-intern/internid
router.post("/edit-intern/:internid", isAuthenticated, editintern)

// POST /delete-intern/internid
router.post("/delete-intern/:internid", isAuthenticated, deleteintern)


///////////////////////////////////// Responsibilities ////////////////////////////////////////

// POST /add/resp
router.post("/add-resp", isAuthenticated, addresp)

// POST /edit-resp/respid
router.post("/edit-resp/:respid", isAuthenticated, editresp)

// POST /delete-resp/respid
router.post("/delete-resp/:respid", isAuthenticated, deleteresp)


///////////////////////////////////// Courses ////////////////////////////////////////

// POST /add/cours
router.post("/add-cours", isAuthenticated, addcours)

// POST /edit-cours/coursid
router.post("/edit-cours/:coursid", isAuthenticated, editcours)

// POST /delete-cours/coursid
router.post("/delete-cours/:coursid", isAuthenticated, deletecours)


///////////////////////////////////// Projects ////////////////////////////////////////

// POST /add/proj
router.post("/add-proj", isAuthenticated, addproj)

// POST /edit-proj/projid
router.post("/edit-proj/:projid", isAuthenticated, editproj)

// POST /delete-proj/projid
router.post("/delete-proj/:projid", isAuthenticated, deleteproj)


///////////////////////////////////// Skills ////////////////////////////////////////

// POST /add/skil
router.post("/add-skil", isAuthenticated, addskil)

// POST /edit-skil/skilid
router.post("/edit-skil/:skilid", isAuthenticated, editskil)

// POST /delete-skil/skilid
router.post("/delete-skil/:skilid", isAuthenticated, deleteskil)


///////////////////////////////////// Accomplishments ////////////////////////////////////////

// POST /add/acomp
router.post("/add-acomp", isAuthenticated, addacomp)

// POST /edit-acomp/acompid
router.post("/edit-acomp/:acompid", isAuthenticated, editacomp)

// POST /delete-acomp/acompid
router.post("/delete-acomp/:acompid", isAuthenticated, deleteacomp)

module.exports = router;