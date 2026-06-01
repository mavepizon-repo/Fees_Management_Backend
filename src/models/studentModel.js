const mongoose = require("mongoose");

/*Student Schema*/

const studentSchema = new mongoose.Schema(

  {

    // Standard
    standard: {
      type: String,
      required: true,
    },

    // Student Name
    studentName: {
      type: String,
      required: true,
    },

    // Profile Photo
    profilePhoto: {

      type: String,
    
      default: "",
    
    },
    

    // DOB
    dob: {
      type: Date,
      required: true,
    },

    // Father Name
    fatherName: {
      type: String,
      required: true,
    },

    // Gender
    gender: {
      type: String,
      required: true,
    },

    // Total Fees
    totalFees: {
      type: Number,
      required: true,
    },

    // Mobile Number
    mobileNumber: {
      type: String,
      required: true,
    },

  },

  /*
  Automatically creates:
  createdAt
  updatedAt
  */

  {
    timestamps: true,
  }

);

const Student = mongoose.model(
  "Student",
  studentSchema
);

module.exports = Student;