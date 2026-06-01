const express = require("express");

const router = express.Router();

/*Upload Middleware*/

const upload = require(
  "../middleware/uploadMiddleware"
);

/*Import Controllers*/

const {

  createStudent,

  getAllStudents,

  getStudentById,

  updateStudent,

  deleteStudent,

} = require(
  "../controllers/studentController"
);

/*CREATE STUDENT

*/

router.post(

  "/create",

  upload.single("profilePhoto"),

  createStudent

);

/*

GET ALL STUDENTS

*/

router.get(
  "/get-all",
  getAllStudents
);

/*

GET STUDENT BY ID

*/

router.get(
  "/get/:id",
  getStudentById
);

/*

UPDATE STUDENT

*/

router.put(

  "/update/:id",

  upload.single("profilePhoto"),

  updateStudent

);

/*

DELETE STUDENT

*/

router.delete(
  "/delete/:id",
  deleteStudent
);

module.exports = router;