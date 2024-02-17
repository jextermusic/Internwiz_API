const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/errorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume = catchAsyncErrors(async (req,res,next) => {
    const { resume } = await Student.findById(req.id).exec();
    res.json({message: "Secure Resume Page",resume});
});

///////////////////////////////////// Education ////////////////////////////////////////

exports.addeducation = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "Education Added!"});
});

exports.editeducation = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex((i) => i.id === req.params.eduid);
    student.resume.education[eduIndex] = {...student.resume.education[eduIndex], ...req.body};
    await student.save();
    res.json({message: "Education Updated!"});
});

exports.deleteeducation = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filterededu = student.resume.education.filter((i) => i.id !== req.params.eduid);
    student.resume.education = filterededu
    await student.save();
    res.json({message: "Education Deleted!"});
});

///////////////////////////////////// Job ////////////////////////////////////////

exports.addjob = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.job.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "job Added!"});
});

exports.editjob = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const jobIndex = student.resume.job.findIndex((i) => i.id === req.params.jobid);
    student.resume.job[jobIndex] = {...student.resume.job[jobIndex], ...req.body};
    await student.save();
    res.json({message: "job Updated!"});
});

exports.deletejob = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredjob = student.resume.job.filter((i) => i.id !== req.params.jobid);
    student.resume.job = filteredjob
    await student.save();
    res.json({message: "job Deleted!"});
});


///////////////////////////////////// Internships ////////////////////////////////////////

exports.addintern = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.intern.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "intern Added!"});
});

exports.editintern = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const internIndex = student.resume.intern.findIndex((i) => i.id === req.params.internid);
    student.resume.intern[internIndex] = {...student.resume.intern[internIndex], ...req.body};
    await student.save();
    res.json({message: "intern Updated!"});
});

exports.deleteintern = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredintern = student.resume.intern.filter((i) => i.id !== req.params.internid);
    student.resume.intern = filteredintern
    await student.save();
    res.json({message: "intern Deleted!"});
});


///////////////////////////////////// Responsibilities ////////////////////////////////////////

exports.addresp = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.resp.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "resp Added!"});
});

exports.editresp = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const respIndex = student.resume.resp.findIndex((i) => i.id === req.params.respid);
    student.resume.resp[respIndex] = {...student.resume.resp[respIndex], ...req.body};
    await student.save();
    res.json({message: "resp Updated!"});
});

exports.deleteresp = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredresp = student.resume.resp.filter((i) => i.id !== req.params.respid);
    student.resume.resp = filteredresp
    await student.save();
    res.json({message: "resp Deleted!"});
});


///////////////////////////////////// Courses ////////////////////////////////////////

exports.addcours = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.cours.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "cours Added!"});
});

exports.editcours = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const coursIndex = student.resume.cours.findIndex((i) => i.id === req.params.coursid);
    student.resume.cours[coursIndex] = {...student.resume.cours[coursIndex], ...req.body};
    await student.save();
    res.json({message: "cours Updated!"});
});

exports.deletecours = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredcours = student.resume.cours.filter((i) => i.id !== req.params.coursid);
    student.resume.cours = filteredcours
    await student.save();
    res.json({message: "cours Deleted!"});
});

///////////////////////////////////// Projects ////////////////////////////////////////

exports.addproj = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.proj.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "proj Added!"});
});

exports.editproj = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const projIndex = student.resume.proj.findIndex((i) => i.id === req.params.projid);
    student.resume.proj[projIndex] = {...student.resume.proj[projIndex], ...req.body};
    await student.save();
    res.json({message: "proj Updated!"});
});

exports.deleteproj = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredproj = student.resume.proj.filter((i) => i.id !== req.params.projid);
    student.resume.proj = filteredproj
    await student.save();
    res.json({message: "proj Deleted!"});
});


///////////////////////////////////// Skills ////////////////////////////////////////

exports.addskil = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.skil.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "skil Added!"});
});

exports.editskil = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const skilIndex = student.resume.skil.findIndex((i) => i.id === req.params.skilid);
    student.resume.skil[skilIndex] = {...student.resume.skil[skilIndex], ...req.body};
    await student.save();
    res.json({message: "skil Updated!"});
});

exports.deleteskil = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredskil = student.resume.skil.filter((i) => i.id !== req.params.skilid);
    student.resume.skil = filteredskil
    await student.save();
    res.json({message: "skil Deleted!"});
});


///////////////////////////////////// Accomplishments ////////////////////////////////////////

exports.addacomp = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.acomp.push({...req.body, id: uuidv4() });
    await student.save();
    res.json({message: "acomp Added!"});
});

exports.editacomp = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const acompIndex = student.resume.acomp.findIndex((i) => i.id === req.params.acompid);
    student.resume.acomp[acompIndex] = {...student.resume.acomp[acompIndex], ...req.body};
    await student.save();
    res.json({message: "acomp Updated!"});
});

exports.deleteacomp = catchAsyncErrors(async (req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredacomp = student.resume.acomp.filter((i) => i.id !== req.params.acompid);
    student.resume.acomp = filteredacomp
    await student.save();
    res.json({message: "acomp Deleted!"});
});