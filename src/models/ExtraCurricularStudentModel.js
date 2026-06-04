// const mongoose = require(
//     "mongoose"
//   );
  
//   /*
//   ===================================
//   Activity Schema
//   ===================================
//   */
  
//   const activitySchema =
//     new mongoose.Schema({
  
//       /*
//       Main Activity
//       */
  
//       activityType: {

//         type: String,
        
//         required: true,
        
//         trim: true
        
//         },
        
//         activityName: {
        
//         type: String,
        
//         required: true,
        
//         trim: true
        
//         },
  
//       /*
//       Monthly Fees
//       */
  
//       fees: {

//         type: Number,
      
//         required: true,
      
//       },
      
//       /*
//       Payment Status
//       */
      
//       paymentStatus: {
      
//         type: String,
      
//         enum: [
//           "Paid",
//           "Unpaid"
//         ],
      
//         default: "Unpaid"
      
//       },
      
//       /*
//       Joining Date
//       */
      
//       joiningDate: {
      
//         type: Date,
      
//         required: true,
      
//       },
  
//       /*
//       Activity Status
//       */
  
//       isActive: {
  
//         type: Boolean,
  
//         default: true,
  
//       },
  
//       /*
//       Active Months
//       */
  
//       activeMonths: [
  
//         {
  
//           type: String,
  
//         },
  
//       ],
  
//     });
  
//   /*
//   ===================================
//   Student Schema
//   ===================================
//   */
  
//   const extraCurricularStudentSchema =
//     new mongoose.Schema(
  
//       {
  
//         /*
//         Student Custom ID
//         */
  
//         studentCustomId: {
  
//           type: String,
  
//           unique: true,
  
//         },
  
//         /*
//         Student Name
//         */
  
//         studentName: {
  
//           type: String,
  
//           required: true,
  
//           trim: true,
  
//         },
  
//         /*
//         Father Name
//         */
  
//         fatherName: {
  
//           type: String,
  
//           trim: true,
  
//         },
  
//         /*
//         Phone Number
//         */
  
//         phoneNumber: {
  
//           type: String,
  
//           trim: true,
  
//         },
  
//         /*
//         School Name
//         */
  
//         schoolName: {
  
//           type: String,
  
//           trim: true,
  
//         },
  
//         /*
//         Class Name
//         */
  
//         className: {
  
//           type: String,
  
//           trim: true,
  
//         },
  
//         /*
//         Profile Photo
//         */
  
//         profilePhoto: {
  
//           type: String,
  
//         },
  

//       /*
// Gender
// */

// gender: {

//   type: String,
  
//   enum: [
//   "Male",
//   "Female",
//   "Other"
//   ],
  
//   required: true,
  
//   trim: true
  
//   },


        
//         /*
//         Multiple Activities
//         */
  
//         activities: [
  
//           activitySchema,
  
//         ],

//         /*
// Payment Status
// */

// paymentStatus: {

//   type: String,

//   enum: [
//     "Paid",
//     "Unpaid"
//   ],

//   default: "Unpaid",

// },
  
//         /*
//         Student Status
//         */
  
//         isActive: {
  
//           type: Boolean,
  
//           default: true,
  
//         },
  
//       },
  
//       {
//         timestamps: true,
//       }
  
//     );
  
//   module.exports =
//   mongoose.model(
  
//     "ExtraCurricularStudent",
  
//     extraCurricularStudentSchema
  
//   );





const mongoose = require(
  "mongoose"
);

/*
===================================
Activity Schema
===================================
*/

const activitySchema =
  new mongoose.Schema({

    /*
    Main Activity
    */

    activityType: {

      type: String,

      required: true,

      trim: true

    },

    activityName: {

      type: String,

      required: true,

      trim: true

    },

    /*
    Monthly Fees
    */

    fees: {

      type: Number,

      required: true,

    },

    /*
    Payment Status
    */

    paymentStatus: {

      type: String,

      enum: [
        "Paid",
        "Unpaid"
      ],

      default: "Unpaid"

    },

    /*
    Joining Date
    */

    joiningDate: {

      type: Date,

      required: true,

    },

    /*
    Activity Status
    */

    isActive: {

      type: Boolean,

      default: true,

    },

    /*
    Active Months
    */

    activeMonths: [

      {

        type: String,

      },

    ],

  });

/*
===================================
Student Schema
===================================
*/

const extraCurricularStudentSchema =
  new mongoose.Schema(

    {

      /*
      Student Custom ID
      */

      studentCustomId: {

        type: String,

        unique: true,

      },

      /*
      Student Name
      */

      studentName: {

        type: String,

        required: true,

        trim: true,

      },

      /*
      Father Name
      */

      fatherName: {

        type: String,

        trim: true,

      },

      /*
      Phone Number
      */

      phoneNumber: {

        type: String,

        trim: true,

      },

      /*
      School Name
      */

      schoolName: {

        type: String,

        trim: true,

      },

      /*
      Class Name
      */

      className: {

        type: String,

        trim: true,

      },

      /*
      Profile Photo
      */

      profilePhoto: {

        type: String,

      },

      /*
      Gender
      */

      gender: {

        type: String,

        enum: [
          "Male",
          "Female",
          "Other"
        ],

        required: true,

        trim: true

      },

      /*
      Multiple Activities
      */

      activities: [

        activitySchema,

      ],

      /*
      Student Status
      */

      isActive: {

        type: Boolean,

        default: true,

      },

    },

    {
      timestamps: true,
    }

  );

module.exports =
  mongoose.model(

    "ExtraCurricularStudent",

    extraCurricularStudentSchema

  );