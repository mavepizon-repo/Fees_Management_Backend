const express = require("express");
const router = express.Router();

const upload = require(
  "../middleware/uploadMiddleware"
);

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  continueStudentActivity,
  stopStudentActivity,
  getCurrentMonthActivities,
} = require("../controllers/ExtraCurricularStudentController");



router.post("/create",upload.single("profilePhoto"),createStudent);
router.get("/getall", getAllStudents);
router.get("/current-month-activities", getCurrentMonthActivities);
router.get("/get/:id", getStudentById);
router.put("/update/:id",upload.single("profilePhoto"),updateStudent);
router.delete("/delete/:id", deleteStudent);
router.put("/continue-activity/:id", continueStudentActivity);
router.put("/stop-activity/:id", stopStudentActivity);


module.exports = router;