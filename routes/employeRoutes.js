const express = require("express");
const {
    homepage, 
    employesignup,
    employesignin,
    employesignout,
    currentEmploye,
    employesendmail,
    employeforgetlink,
    employeresetpassword,
    employeupdate,
    employeavatar,
    createinternship,
    readinternship,
    readsingleinternship,
    createjob,
    readjob,
    readsinglejob,
    employedelete,
    viewinternship,
    reademploye,
    closeinternship,
    openinternship,
    deletesingleinternship,
    viewjob,
} = require("../controllers/employeController");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();


// GET / Route
router.get("/", homepage);

// // POST /employe
router.post("/current", isAuthenticated, currentEmploye);

// Post /employe/signup
router.post("/signup", employesignup);

// Post /employe/signin
router.post("/signin", employesignin);

// // GET /employe/signout
router.get("/signout", isAuthenticated, employesignout);

// POST /employe/send-mail
router.post("/send-mail", employesendmail);

// GET /employe/forget-link/:employe:id
router.get("/forget-link/:id", employeforgetlink)

// POST /employe/reset-password/:id
router.post("/reset-password/:id",isAuthenticated, employeresetpassword);

// POST /employe/update/:employeid
router.post("/update/:id",isAuthenticated, employeupdate);

// POST /employe/avatar/:employeid
router.post("/avatar/:id",isAuthenticated, employeavatar);

// POST /employe/delete/:employeid
router.post("/delete/:id",isAuthenticated, employedelete);

router.post("/readall", isAuthenticated, reademploye)


//////////////////////////////// Internship ////////////////////////////////

router.post("/internship/view", viewinternship)

// POST /employe/internship/create
router.post("/internship/create",isAuthenticated, createinternship);

// POST /employe/internship/read
router.post("/internship/read",isAuthenticated, readinternship);

// POST /employe/internship/read/:id
router.post("/internship/read/:id",isAuthenticated, readsingleinternship);

router.post("/internship/delete/:id",isAuthenticated, deletesingleinternship);

// POST /employe/internship/close/:id
router.post("/internship/close/:id",isAuthenticated, closeinternship);

// POST /employe/internship/open/:id
router.post("/internship/open/:id",isAuthenticated, openinternship);


//////////////////////////////// Job ////////////////////////////////

router.post("/job/view", viewjob)

// POST /employe/job/create
router.post("/job/create",isAuthenticated, createjob);

// POST /employe/job/read
router.post("/job/read",isAuthenticated, readjob);

// POST /employe/job/read/:id
router.post("/job/read/:id",isAuthenticated, readsinglejob);


module.exports = router;