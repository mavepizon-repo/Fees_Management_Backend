const ExtraCurricularStudent =
require(
  "../models/ExtraCurricularStudentModel"
);

/*
===================================
CREATE STUDENT
===================================
*/

const createStudent = async (
  req,
  res
) => {

  try {

    /*
    Generate Student ID
    */

    const studentCount =
      await ExtraCurricularStudent.countDocuments();

    const studentCustomId =

      "ECS" +

      (1001 + studentCount);

    /*
    Profile Photo
    */

    const profilePhoto =

      req.file
        ? req.file.path
        : "";

    /*
    Activities
    */

 /*
Parse Activities
*/

/*
Activities
*/

const activities =

  req.body.activities

    ? JSON.parse(
        req.body.activities
      )

    : [];

/*
Add Active Months
*/

const formattedActivities =

  activities.map(

    (activity) => ({

      ...activity,

      activeMonths: [

        new Date(
          activity.joiningDate
        )

          .toISOString()

          .slice(0, 7),

      ],

    })

  );

    /*
    Create Student
    */

    const student =
      await ExtraCurricularStudent.create({

        ...req.body,

        studentCustomId,

        profilePhoto,

        activities:
        formattedActivities,

      });

    /*
    Response
    */

    res.status(201).json({

      success: true,

      message:
        "Student Added Successfully",

      data: student,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Adding Student",

      error: error.message,

    });

  }

};

/*
===================================
GET ALL STUDENTS
===================================
*/

const getAllStudents =
async (
  req,
  res
) => {

  try {

    const students =
      await ExtraCurricularStudent

        .find()

        .sort({

          createdAt: -1,

        });

    res.status(200).json({

      success: true,

      totalStudents:
        students.length,

      data: students,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
GET STUDENT BY ID
===================================
*/

const getStudentById =
async (
  req,
  res
) => {

  try {

    const student =
      await ExtraCurricularStudent.findById(

        req.params.id

      );

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    res.status(200).json({

      success: true,

      data: student,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
UPDATE STUDENT
===================================
*/

const updateStudent =
async (
  req,
  res
) => {

  try {

    const student =
      await ExtraCurricularStudent.findById(

        req.params.id

      );

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    /*
Update Data
*/

const updateData = {

  ...req.body,

};

/*
Parse Activities
*/

if (req.body.activities) {

  updateData.activities =

    JSON.parse(
      req.body.activities
    );

}
    /*
    Update Image
    */

    if (req.file) {

      updateData.profilePhoto =

        req.file.path;

    }

    /*
    Update Student
    */

    const updatedStudent =

      await ExtraCurricularStudent.findByIdAndUpdate(

        req.params.id,

        updateData,

        {

          new: true,

          runValidators: true,

        }

      );

    /*
    Response
    */

    res.status(200).json({

      success: true,

      message:
        "Student Updated Successfully",

      data: updatedStudent,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
DELETE STUDENT
===================================
*/

const deleteStudent =
async (
  req,
  res
) => {

  try {

    const student =
      await ExtraCurricularStudent.findByIdAndDelete(

        req.params.id

      );

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    res.status(200).json({

      success: true,

      message:
        "Student Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
CONTINUE ACTIVITY
===================================
*/

const continueStudentActivity =
async (
  req,
  res
) => {

  try {

    const {

      date,

      activityId,

    } = req.body;

    const student =
      await ExtraCurricularStudent.findById(

        req.params.id

      );

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    /*
    Find Activity
    */

    const activity =
      student.activities.id(

        activityId

      );

    if (!activity) {

      return res.status(404).json({

        success: false,

        message:
          "Activity Not Found",

      });

    }

    /*
    Format Month
    */

    const formattedMonth =

      new Date(date)

        .toISOString()

        .slice(0, 7);

    /*
    Add Month
    */

    if (

      !activity.activeMonths.includes(

        formattedMonth

      )

    ) {

      activity.activeMonths.push(

        formattedMonth

      );

    }

    /*
    Activate Activity
    */

    activity.isActive = true;

    /*
    SAVE STUDENT
    */

    await student.save();

    /*
    RESPONSE
    */

    res.status(200).json({

      success: true,

      message:
        "Activity Continued Successfully",

      data: student,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
STOP ACTIVITY
===================================
*/

const stopStudentActivity =
async (
  req,
  res
) => {

  try {

    const {

      activityId,

    } = req.body;

    const student =
      await ExtraCurricularStudent.findById(

        req.params.id

      );

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    /*
    Find Activity
    */

    const activity =
      student.activities.id(

        activityId

      );

    if (!activity) {

      return res.status(404).json({

        success: false,

        message:
          "Activity Not Found",

      });

    }

    /*
    Stop Activity
    */

    activity.isActive = false;

    await student.save();

    res.status(200).json({

      success: true,

      message:
        "Activity Stopped Successfully",

      data: student,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
CURRENT MONTH ACTIVITIES
===================================
*/

const getCurrentMonthActivities =
async (
  req,
  res
) => {

  try {

    const currentMonth =

      new Date()

        .toISOString()

        .slice(0, 7);

    /*
    Get Active Students
    */

    const students =
      await ExtraCurricularStudent.find({

        isActive: true,

      });

    /*
    Filter Activities
    */

    const filteredStudents =

      students

        .map((student) => {

          const activities =

            student.activities.filter(

              (activity) =>

                activity.isActive &&

                activity.activeMonths.includes(

                  currentMonth

                )

            );

          return {

            ...student.toObject(),

            activities,

          };

        })

        .filter(

          (student) =>

            student.activities.length > 0

        );

    /*
    Response
    */

    res.status(200).json({

      success: true,

      totalStudents:
        filteredStudents.length,

      data: filteredStudents,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      error: error.message,

    });

  }

};

/*
===================================
EXPORT CONTROLLERS
===================================
*/

module.exports = {

  createStudent,

  getAllStudents,

  getStudentById,

  updateStudent,

  deleteStudent,

  continueStudentActivity,

  stopStudentActivity,

  getCurrentMonthActivities,

};