const express = require("express");
const { homepage, studentsignup, studentsignin, studentsignout, currentUser, studentsendmail, studentforgetlink, studentresetpassword, studentupdate, studentavatar, studentdelete, applyinternship, applyjob, studenttokencheck } = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();


// GET / Route
router.get("/", homepage);

// POST /student
router.post("/student", isAuthenticated, currentUser);

// Post /student/signup
router.post("/student/signup", studentsignup);

// Post /student/signin
router.post("/student/signin", studentsignin);

// GET /student/signout
router.get("/student/signout", isAuthenticated, studentsignout);

// POST /student/send-mail
router.post("/student/send-mail", studentsendmail);

// GET /student/forget-link/:student:id
router.post("/student/forget-link/:id", studentforgetlink)

router.post("/student/forget-link/tokencheck/:id", studenttokencheck)

// POST /student/reset-password/:id
router.post("/student/reset-password/:id",isAuthenticated, studentresetpassword);

// POST /student/update/:studentid
router.post("/student/update/:id",isAuthenticated, studentupdate);

// POST /student/avatar/:studentid
router.post("/student/avatar/:id",isAuthenticated, studentavatar);

router.post("/student/delete/:id",isAuthenticated, studentdelete);


/////////////////// Apply Internship ///////////////////

// POST /student/apply/:internshipid
router.post("/student/apply/internship/:internshipid",isAuthenticated, applyinternship);


/////////////////// Apply Job ///////////////////

// POST /student/apply/:jobid
router.post("/student/apply/job/:jobid",isAuthenticated, applyjob);


module.exports = router;