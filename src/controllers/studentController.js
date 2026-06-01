const Student = require("../models/studentModel");

/*CREATE STUDENT*/

const createStudent = async (req, res) => {

  try {

    /*Get Form Data*/

    const {
      standard,
      studentName,
      dob,
      fatherName,
      gender,
      totalFees,
      mobileNumber,
    } = req.body;

    /*
    Get Uploaded Image URL
    */

    // const profilePhoto = req.file.path;

    const profilePhoto =

  req.file
    ? req.file.path
    : "";

    /*
    Create Student
    */

    const newStudent = new Student({

      standard,

      studentName,

      profilePhoto,

      dob,

      fatherName,

      gender,

      totalFees,

      mobileNumber,

    });

    /*
    Save Student
    */

    const savedStudent =
      await newStudent.save();

    /*
    Success Response
    */

    res.status(201).json({

      success: true,

      message:
        "Student Added Successfully",

      data: savedStudent,

    });

  } catch (error) {

    /*
    Error Response
    */

    res.status(500).json({

      success: false,

      message:
        "Error Adding Student",

      error: error.message,

    });

  }

};

/*GET ALL STUDENTS*/

const getAllStudents = async (
  req,
  res
) => {

  try {

    /*
    Get All Students
    */

    const students =
      await Student.find();

    /*
    Response
    */

    res.status(200).json({

      success: true,

      totalStudents:
        students.length,

      data: students,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Fetching Students",

      error: error.message,

    });

  }

};

/*GET STUDENT BY ID*/

const getStudentById = async (
  req,
  res
) => {

  try {

    /*
    Get ID
    */

    const id = req.params.id;

    /*
    Find Student
    */

    const student =
      await Student.findById(id);

    /*
    Check Student Exists
    */

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    /*
    Response
    */

    res.status(200).json({

      success: true,

      data: student,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Fetching Student",

      error: error.message,

    });

  }

};

/*UPDATE STUDENT*/

const updateStudent = async (
  req,
  res
) => {

  try {

    /*
    Get Student ID
    */

    const id = req.params.id;

    /*
    Find Student
    */

    const student =
      await Student.findById(id);

    /*
    Check Student Exists
    */

    if (!student) {

      return res.status(404).json({

        success: false,

        message: "Student Not Found",

      });

    }

    /*
    Update Data
    */

    const updateData = {

      ...req.body,

    };

    /*
    Update Image If Uploaded
    */

    if (req.file) {

      updateData.profilePhoto =
        req.file.path;

    }

    /*
    Update Student
    */

    const updatedStudent =
      await Student.findByIdAndUpdate(

        id,

        updateData,

        {
          returnDocument: "after",
        }

      );

    /*
    Success Response
    */

    res.status(200).json({

      success: true,

      message:
        "Student Updated Successfully",

      data: updatedStudent,

    });

  } catch (error) {

    /*
    Error Response
    */

    res.status(500).json({

      success: false,

      message:
        "Error Updating Student",

      error: error.message,

    });

  }

};
/*DELETE STUDENT*/

const deleteStudent = async (
  req,
  res
) => {

  try {

    /*
    Get Student ID
    */

    const id = req.params.id;

    /*
    Delete Student
    */

    const deletedStudent =
      await Student.findByIdAndDelete(id);

    /*
    Check Student Exists
    */

    if (!deletedStudent) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    /*
    Response
    */

    res.status(200).json({

      success: true,

      message:
        "Student Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Deleting Student",

      error: error.message,

    });

  }

};

/*EXPORT CONTROLLERS*/

module.exports = {

  createStudent,

  getAllStudents,

  getStudentById,

  updateStudent,

  deleteStudent,

};