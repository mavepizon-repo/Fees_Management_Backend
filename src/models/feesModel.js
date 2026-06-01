// const mongoose = require("mongoose");

// /*Fees Schema*/

// const feesSchema = new mongoose.Schema(

//   {

//     /*
//     Student ID
//     */

//     studentId: {

//       type: mongoose.Schema.Types.ObjectId,

//       ref: "Student",

//       required: true,

//     },

//     /*
//     Fees Type
//     */

//     feesType: {

//       type: String,

//       required: true,

//     },

//     /*
//     Paid Amount
//     */

//     paidAmount: {

//       type: Number,

//       required: true,

//     },

//     /*
//     Remaining Amount
//     */

//     remainingAmount: {

//       type: Number,

//       required: true,

//     },
//     /*
// Fees Status
// */

// status: {

//   type: String,

//   enum: ["Paid", "Unpaid"],

//   default: "Unpaid",

// },

//     /*
//     Payment Date
//     */

//     paymentDate: {

//       type: Date,

//       default: Date.now,

//     },

//   },

//   {
//     timestamps: true,
//   }

// );

// const Fees = mongoose.model(
//   "Fees",
//   feesSchema
// );

// module.exports = Fees;

const mongoose = require("mongoose");

/*Fees Schema*/

const feesSchema = new mongoose.Schema(

  {

    /*
    Fees Receipt ID
    */

    feesReceiptId: {

      type: String,

      unique: true,

    },

    /*
    Student MongoDB ID
    */

    studentId: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "Student",

      required: true,

    },

    /*
    Student Custom ID
    */

    studentCustomId: {

      type: String,

    },

    /*
    Student Name
    */

    studentName: {

      type: String,

    },

    /*
    Standard
    */

    standard: {

      type: String,

    },

    /*
    Mobile Number
    */

    mobileNumber: {

      type: String,

    },

    /*
    Total Fees
    */

    totalFees: {

      type: Number,

    },

    /*
    Payment Type
    */

    paymentType: {

      type: String,

      enum: [

        "Registration Fee",

        "Payment 1",

        "Payment 2",

        "Payment 3",

        "Payment 4",

      ],

      required: true,

    },

    /*
    Paid Amount
    */

    paidAmount: {

      type: Number,

      required: true,

    },

    /*
    Remaining Amount
    */

    remainingAmount: {

      type: Number,

      required: true,

    },

    /*
    Payment Status
    */

    status: {

      type: String,

      enum: [

        "Paid",

        "Partial",

        "Unpaid",

      ],

      default: "Unpaid",

    },

    /*
    Payment Date
    */

    paymentDate: {

      type: Date,

      default: Date.now,

    },

  },

  {
    timestamps: true,
  }

);

const Fees = mongoose.model(
  "Fees",
  feesSchema
);

module.exports = Fees;