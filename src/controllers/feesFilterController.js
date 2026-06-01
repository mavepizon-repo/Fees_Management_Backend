const Fees = require(
    "../models/feesModel"
  );
  
  const Student = require(
    "../models/studentModel"
  );
  
  /*
  ===================================
  FILTER FEES ENTRY
  ===================================
  */
  
  const filterFeesEntry =
    async (
      req,
      res
    ) => {
  
      try {
  
        /*
        Get Query Params
        */
  
        const {
  
          standard,
  
          name,
  
          mobileNumber,
  
          startDate,
  
          endDate,
  
        } = req.query;
  
        /*
        Student Filter
        */
  
        let studentFilter = {};
  
        /*
        Standard Filter
        */
  
        if (standard) {
  
          studentFilter.standard =
            standard;
  
        }
  
        /*
        Name Search
        */
  
        if (name) {
  
          studentFilter.studentName = {
  
            $regex: name,
  
            $options: "i",
  
          };
  
        }
  
        /*
        Mobile Search
        */
  
        if (mobileNumber) {
  
          studentFilter.mobileNumber =
            mobileNumber;
  
        }
  
        /*
        Find Students
        */
  
        const students =
          await Student.find(
            studentFilter
          );
  
        /*
        Get Student IDs
        */
  
        const studentIds =
          students.map(
            (student) =>
              student._id
          );
  
        /*
        Fees Filter
        */
  
        let feesFilter = {
  
          studentId: {
            $in: studentIds,
          },
  
        };
  
        /*
        Date Filter
        */
  
        if (
          startDate &&
          endDate
        ) {
  
          feesFilter.paymentDate = {
  
            $gte: new Date(
              startDate
            ),
  
            $lte: new Date(
              endDate
            ),
  
          };
  
        }
  
        /*
        Find Fees Entries
        */
  
        const fees =
          await Fees.find(
            feesFilter
          ).populate(
            "studentId"
          );
  
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
  
        /*
        Error Response
        */
  
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
  EXPORT CONTROLLER
  ===================================
  */
  
  module.exports = {
  
    filterFeesEntry,
  
  };