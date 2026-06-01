// const Fees = require(
//   "../models/feesModel"
// );

// const Student = require(
//   "../models/studentModel"
// );

// /*CREATE FEES ENTRY*/

// const createFees = async (
//   req,
//   res
// ) => {

//   try {

//     const {

//       studentId,
    
//       feesType,
    
//       paidAmount,
    
//     } = req.body;

//     /*
//     Find Student
//     */

//     const student =
//       await Student.findById(
//         studentId
//       );

//     /*
//     Check Student Exists
//     */

//     if (!student) {

//       return res.status(404).json({

//         success: false,

//         message:
//           "Student Not Found",

//       });

//     }

//     /*
//     Get Previous Fees
//     */

//     const previousFees =
//       await Fees.find({

//         studentId: studentId,

//       });

//     /*
//     Calculate Total Paid
//     */

//     let totalPaid = 0;

//     previousFees.forEach((item) => {

//       totalPaid += item.paidAmount;

//     });

//     /*
//     Remaining Amount
//     */

//     const remainingAmount =

//       student.totalFees -

//       (totalPaid + Number(paidAmount));

//       /*
// Fees Status
// */

// let status = "Unpaid";

// if (remainingAmount <= 0) {

//   status = "Paid";

// }

//     /*
//     Create Fees Entry
//     */

//     const newFees = new Fees({

//       studentId,

//       feesType,

//       paidAmount,

//       status,

//       remainingAmount,

//     });

//     /*
//     Save Fees
//     */

//     const savedFees =
//       await newFees.save();

//     /*
//     Response
//     */

//     res.status(201).json({

//       success: true,

//       message:
//         "Fees Added Successfully",

//       data: savedFees,

//     });

//   } catch (error) {

//     res.status(500).json({

//       success: false,

//       message:
//         "Error Adding Fees",

//       error: error.message,

//     });

//   }

// };

// /*
// ===================================
// GET ALL FEES
// ===================================
// */

// const getAllFees = async (
//   req,
//   res
// ) => {

//   try {

//     const fees =
//       await Fees.find()

//         .populate(
//           "studentId"
//         );

//     res.status(200).json({

//       success: true,

//       totalFeesEntries:
//         fees.length,

//       data: fees,

//     });

//   } catch (error) {

//     res.status(500).json({

//       success: false,

//       message:
//         "Error Fetching Fees",

//       error: error.message,

//     });

//   }

// };

// /*
// ===================================
// GET FEES BY ID
// ===================================
// */

// const getFeesById = async (
//   req,
//   res
// ) => {

//   try {

//     const fees =
//       await Fees.findById(
//         req.params.id
//       ).populate("studentId");

//     /*
//     Check Fees Exists
//     */

//     if (!fees) {

//       return res.status(404).json({

//         success: false,

//         message:
//           "Fees Not Found",

//       });

//     }

//     res.status(200).json({

//       success: true,

//       data: fees,

//     });

//   } catch (error) {

//     res.status(500).json({

//       success: false,

//       message:
//         "Error Fetching Fees",

//       error: error.message,

//     });

//   }

// };

// /*UPDATE FEES*/

// const updateFees = async (
//   req,
//   res
// ) => {

//   try {

//     /*
//     Get Fees Entry
//     */

//     const fees =
//       await Fees.findById(
//         req.params.id
//       );

//     /*
//     Check Fees Exists
//     */

//     if (!fees) {

//       return res.status(404).json({

//         success: false,

//         message:
//           "Fees Not Found",

//       });

//     }

//     /*
//     Find Student
//     */

//     const student =
//       await Student.findById(
//         fees.studentId
//       );

//     /*
//     Get Previous Fees
//     */

//     const previousFees =
//       await Fees.find({

//         studentId:
//           fees.studentId,

//         _id: {
//           $ne: fees._id,
//         },

//       });

//     /*
//     Calculate Previous Paid
//     */

//     let totalPaid = 0;

//     previousFees.forEach((item) => {

//       totalPaid += item.paidAmount;

//     });

//     /*
//     New Paid Amount
//     */

//     const paidAmount =
//       Number(req.body.paidAmount);

//     /*
//     Remaining Amount
//     */

//     const remainingAmount =

//       student.totalFees -

//       (totalPaid + paidAmount);

//       let status = "Unpaid";

// if (remainingAmount <= 0) {

//   status = "Paid";

// }

//     /*
//     Update Fees
//     */

//     const updatedFees =
//       await Fees.findByIdAndUpdate(

//         req.params.id,

//         {

//           ...req.body,

//           remainingAmount,

//           status,

//         },

//         {
//           returnDocument:
//             "after",
//         }

//       );

//     /*
//     Response
//     */

//     res.status(200).json({

//       success: true,

//       message:
//         "Fees Updated Successfully",

//       data: updatedFees,

//     });

//   } catch (error) {

//     res.status(500).json({

//       success: false,

//       message:
//         "Error Updating Fees",

//       error: error.message,

//     });

//   }

// };

// /*
// ===================================
// DELETE FEES
// ===================================
// */

// const deleteFees = async (
//   req,
//   res
// ) => {

//   try {

//     /*
//     Delete Fees
//     */

//     const deletedFees =
//       await Fees.findByIdAndDelete(
//         req.params.id
//       );

//     /*
//     Check Fees Exists
//     */

//     if (!deletedFees) {

//       return res.status(404).json({

//         success: false,

//         message:
//           "Fees Not Found",

//       });

//     }

//     /*
//     Response
//     */

//     res.status(200).json({

//       success: true,

//       message:
//         "Fees Deleted Successfully",

//     });

//   } catch (error) {

//     res.status(500).json({

//       success: false,

//       message:
//         "Error Deleting Fees",

//       error: error.message,

//     });

//   }

// };

// /*
// ===================================
// EXPORT CONTROLLERS
// ===================================
// */

// module.exports = {

//   createFees,

//   getAllFees,

//   getFeesById,

//   updateFees,

//   deleteFees,

// };
const Fees = require(
  "../models/feesModel"
);

const Student = require(
  "../models/studentModel"
);

/*
===================================
CREATE FEES ENTRY
===================================
*/

const createFees = async (
  req,
  res
) => {

  try {

    const {

      studentId,

      paymentType,

      paidAmount,

    } = req.body;

    /*
    Find Student
    */

    const student =
      await Student.findById(
        studentId
      );

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
    Generate Receipt ID
    */

    const feesCount =
      await Fees.countDocuments();

    const feesReceiptId =

      "FEE" +

      (1001 + feesCount);

    /*
    Get Previous Fees
    */

    const previousFees =
      await Fees.find({

        studentId,

      });

    /*
    Calculate Total Paid
    */

    let totalPaid = 0;

    previousFees.forEach((item) => {

      totalPaid += item.paidAmount;

    });

    /*
    Current Remaining Amount
    */

    const currentRemaining =

      student.totalFees -

      totalPaid;

    /*
    Check Existing Payment Type
    */

    const existingPayment =
      await Fees.findOne({

        studentId,

        paymentType,

      });

    if (existingPayment) {

      return res.status(400).json({

        success: false,

        message:

          `${paymentType} already paid`,

      });

    }

    /*
    Extra Payment Validation
    */

    if (

      Number(paidAmount) >

      currentRemaining

    ) {

      return res.status(400).json({

        success: false,

        message:

          "You are paying more than remaining amount",

      });

    }

    /*
    Payment 4 Validation
    */

    if (

      paymentType === "Payment 4"

    ) {

      if (

        Number(paidAmount) !==

        currentRemaining

      ) {

        return res.status(400).json({

          success: false,

          message:

            `You must pay full remaining amount in Payment 4. Remaining amount is ${currentRemaining}`,

        });

      }

    }

    /*
    Remaining Amount
    */

    const remainingAmount =

      currentRemaining -

      Number(paidAmount);

    /*
    Fees Status
    */

    let status = "Unpaid";

    if (remainingAmount === 0) {

      status = "Paid";

    }

    else if (

      remainingAmount <

      student.totalFees

    ) {

      status = "Partial";

    }

    /*
    Create Fees Entry
    */

    const newFees = new Fees({

      feesReceiptId,

      studentId,

      studentCustomId:
        student.studentCustomId,

      studentName:
        student.studentName,

      standard:
        student.standard,

      mobileNumber:
        student.mobileNumber,

      totalFees:
        student.totalFees,

      paymentType,

      paidAmount,

      remainingAmount,

      status,

    });

    /*
    Save Fees
    */

    const savedFees =
      await newFees.save();

    /*
    Response
    */

    res.status(201).json({

      success: true,

      message:
        "Fees Added Successfully",

      data: savedFees,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Adding Fees",

      error: error.message,

    });

  }

};

/*
===================================
GET ALL FEES
===================================
*/

const getAllFees = async (
  req,
  res
) => {

  try {

    const fees =
      await Fees.find()

        .populate(
          "studentId"
        )

        .sort({

          createdAt: -1,

        });

    res.status(200).json({

      success: true,

      totalFeesEntries:
        fees.length,

      data: fees,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Fetching Fees",

      error: error.message,

    });

  }

};

/*
===================================
GET FEES BY ID
===================================
*/

const getFeesById = async (
  req,
  res
) => {

  try {

    const fees =
    await Fees.findOne({
  
      feesReceiptId:
        req.params.id,
  
    }).populate(
      "studentId"
    );

    /*
    Check Fees Exists
    */

    if (!fees) {

      return res.status(404).json({

        success: false,

        message:
          "Fees Not Found",

      });

    }

    /*
    Response
    */

    res.status(200).json({

      success: true,

      data: fees,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Fetching Fees",

      error: error.message,

    });

  }

};
/*
===================================
GET STUDENT FEES SUMMARY
===================================
*/

const getStudentFeesSummary =
async (
  req,
  res
) => {

  try {

    /*
    Student ID
    */

    const studentId =
      req.params.studentId;

    /*
    Find Student
    */

    const student =
      await Student.findById(
        studentId
      );

    if (!student) {

      return res.status(404).json({

        success: false,

        message:
          "Student Not Found",

      });

    }

    /*
    Get Fees History
    */

    const feesHistory =
      await Fees.find({

        studentId,

      }).sort({

        createdAt: -1,

      });

    /*
    Calculate Total Paid
    */

    let totalPaid = 0;

    feesHistory.forEach((item) => {

      totalPaid += item.paidAmount;

    });

    /*
    Remaining Amount
    */

    const remainingAmount =

      student.totalFees -

      totalPaid;

    /*
    Status
    */

    let status = "Unpaid";

    if (remainingAmount === 0) {

      status = "Paid";

    }

    else if (

      totalPaid > 0

    ) {

      status = "Partial";

    }

    /*
    Response
    */

    res.status(200).json({

      success: true,

      data: {

        studentName:
          student.studentName,

        studentCustomId:
          student.studentCustomId,

        standard:
          student.standard,

        mobileNumber:
          student.mobileNumber,

        totalFees:
          student.totalFees,

        totalPaid,

        remainingAmount,

        status,

        paymentHistory:
          feesHistory,

      },

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Fetching Summary",

      error: error.message,

    });

  }

};

/*
===================================
FILTER FEES
===================================
*/

const filterFees = async (
  req,
  res
) => {

  try {

    const {

      standard,

      mobileNumber,

      status,

      paymentType,

      paymentDate,

      startDate,

      endDate,

    } = req.query;

    /*
    Dynamic Filter
    */

    let filter = {};

    /*
    Standard Filter
    */

    if (standard) {

      filter.standard =
        standard;

    }

    /*
    Mobile Filter
    */

    if (mobileNumber) {

      filter.mobileNumber =
        mobileNumber;

    }

    /*
    Status Filter
    */

    if (status) {

      filter.status =
        status;

    }

    /*
    Payment Type Filter
    */

    if (paymentType) {

      filter.paymentType =
        paymentType;

    }

    /*
    Particular Date Filter
    */

    if (paymentDate) {

      const selectedDate =
        new Date(paymentDate);

      const nextDate =
        new Date(paymentDate);

      nextDate.setDate(
        nextDate.getDate() + 1
      );

      filter.paymentDate = {

        $gte: selectedDate,

        $lt: nextDate,

      };

    }

    /*
    From Date - To Date
    */

    if (
      startDate &&
      endDate
    ) {

      filter.paymentDate = {

        $gte:
          new Date(startDate),

        $lte:
          new Date(endDate),

      };

    }

    /*
    Find Fees
    */

    const fees =
      await Fees.find(filter)

        .sort({

          paymentDate: -1,

        });

    /*
    Response
    */

    res.status(200).json({

      success: true,

      totalEntries:
        fees.length,

      data: fees,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Filtering Fees",

      error: error.message,

    });

  }

};

/*
===================================
UPDATE FEES
===================================
*/

const updateFees = async (
  req,
  res
) => {

  try {

    /*
    Find Current Fees
    */

    const fees =
      await Fees.findOne({

        feesReceiptId:
          req.params.id,

      });

    /*
    Check Fees Exists
    */

    if (!fees) {

      return res.status(404).json({

        success: false,

        message:
          "Fees Not Found",

      });

    }

    /*
    Find Student
    */

    const student =
      await Student.findById(

        fees.studentId

      );

    /*
    Update Paid Amount
    */

    const newPaidAmount =

      Number(
        req.body.paidAmount
      );

    /*
    Get All Student Fees
    */

    const allFees =
      await Fees.find({

        studentId:
          fees.studentId,

      });

    /*
    Calculate Total Paid
    Except Current Entry
    */

    let totalPaid = 0;

    allFees.forEach((item) => {

      if (

        item.feesReceiptId !==

        req.params.id

      ) {

        totalPaid +=
          item.paidAmount;

      }

    });

    /*
    Add Updated Amount
    */

    totalPaid +=
      newPaidAmount;

    /*
    Remaining Amount
    */

    const remainingAmount =

      student.totalFees -

      totalPaid;

    /*
    Over Payment Validation
    */

    if (remainingAmount < 0) {

      return res.status(400).json({

        success: false,

        message:

          "Paid amount exceeds total fees",

      });

    }

    /*
    Status
    */

    let status = "Unpaid";

    if (remainingAmount === 0) {

      status = "Paid";

    }

    else if (

      totalPaid > 0

    ) {

      status = "Partial";

    }

    /*
    Update Fees
    */

    const updatedFees =
      await Fees.findOneAndUpdate(

        {

          feesReceiptId:
            req.params.id,

        },

        {

          ...req.body,

          remainingAmount,

          status,

        },

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
        "Fees Updated Successfully",

      data: updatedFees,

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Updating Fees",

      error: error.message,

    });

  }

};


/*
===================================
DELETE FEES
===================================
*/

const deleteFees = async (
  req,
  res
) => {

  try {
    const deletedFees =
    await Fees.findOneAndDelete({
    
      feesReceiptId:
        req.params.id,
    
    });

    /*
    Check Fees Exists
    */

    if (!deletedFees) {

      return res.status(404).json({

        success: false,

        message:
          "Fees Not Found",

      });

    }

    /*
    Response
    */

    res.status(200).json({

      success: true,

      message:
        "Fees Deleted Successfully",

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message:
        "Error Deleting Fees",

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

  createFees,

  getAllFees,

  getFeesById,

  getStudentFeesSummary,

  filterFees,

  updateFees,

  deleteFees,

};