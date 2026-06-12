const ExtraFees =
require(
  "../models/ExtraCurricularFeesModel"
);


const Student =
require(
  "../models/ExtraCurricularStudentModel"
);



/*
====================================
CREATE EXTRA CURRICULAR FEES
====================================
*/


const createFees =
async (req, res) => {


  try {


    const {

      studentId,

      activityId,

      paidAmount

    } = req.body;



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
        "Student Not Found"


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


        success:false,


        message:
        "Activity Not Found"


      });


    }




    /*
    Check Already Paid
    */


    const alreadyPaid =
    await ExtraFees.findOne({


      studentId,


      activityId


    });



    if (alreadyPaid) {


      return res.status(400).json({


        success:false,


        message:
        "Fees Already Paid"


      });


    }





/*
Extra Amount Validation
*/

if (
  Number(paidAmount) >
  Number(activity.fees)
) {

  const extraAmount =

    Number(paidAmount)

    -

    Number(activity.fees);

  return res.status(400).json({

    success:false,

    message:
    `You are paying extra ₹${extraAmount}. Monthly fees is only ₹${activity.fees}`

  });

}

/*
Less Amount Validation
*/

if (
  Number(paidAmount) <
  Number(activity.fees)
) {

  return res.status(400).json({

    success: false,

    message:
      `Full fees ₹${activity.fees} must be paid`

  });

}





    /*
    Generate Receipt ID
    */


    const lastFee =
await ExtraFees
  .findOne()
  .sort({ createdAt: -1 });

let receiptId = "ECF1001";

if (lastFee) {

  const lastNumber =
    parseInt(
      lastFee.receiptId.replace(
        "ECF",
        ""
      )
    );

  receiptId =
    "ECF" +
    (lastNumber + 1);

}





    /*
    Balance Amount
    */


    const balanceAmount =


    Number(activity.fees)

    -

    Number(paidAmount);






    /*
    Payment Status
    */


    let status =
    "Unpaid";



    if (balanceAmount === 0) {


      status =
      "Paid";


    }


    else if (

      Number(paidAmount) > 0

    ) {


      status =
      "Partial";


    }






    /*
    Create Fees Entry
    */


    const fees =
    await ExtraFees.create({



      receiptId,



      studentId,



      studentCustomId:
      student.studentCustomId,



      studentName:
      student.studentName,



      profilePhoto:
      student.profilePhoto,

     

      gender:
      student.gender,


      phoneNumber:
      student.phoneNumber,



      schoolName:
      student.schoolName,



      className:
      student.className,




      activityId,



      activityType:
      activity.activityType,
      
      activityName:
      activity.activityName,



      monthlyFees:
      activity.fees,



      joiningDate:
      activity.joiningDate,



      paidAmount,



      balanceAmount,



      status



    });

    if (status === "Paid") {

      activity.paymentStatus = "Paid";
    
      await student.save();
    
    }
    
    res.status(201).json({
    
      success:true,
    
      message:
      "Fees Added Successfully",
    
      data:fees
    
    });




  } catch (error) {


    res.status(500).json({


      success:false,


      error:
      error.message


    });


  }


};









/*
====================================
GET ALL FEES
====================================
*/


const getAllFees =
async (req,res)=>{


try{


const fees =
await ExtraFees.find()
.sort({

createdAt:-1

});



res.status(200).json({


success:true,


data:fees


});



}catch(error){



res.status(500).json({


success:false,


error:error.message


});


}


};

/*
GET FEES BY RECEIPT ID
*/

const getFeesById =
async(req,res)=>{


try{


const fees =
await ExtraFees.findOne({

receiptId:req.params.id

});



if(!fees){


return res.status(404).json({

success:false,

message:"Fees Not Found"

});


}



res.status(200).json({

success:true,

data:fees

});



}catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


};


/*
====================================
FILTER FEES
====================================
*/


const filterFees =
async(req,res)=>{


try{


const {

className

}=req.query;



let filter = {};



if(className){


filter.className =
className;


}




const fees =
await ExtraFees.find(
filter
);



res.status(200).json({


success:true,


total:
fees.length,


data:fees


});



}catch(error){


res.status(500).json({


success:false,


error:error.message


});


}


};


/*
====================================
UPDATE FEES
====================================
*/


const updateFees =
async(req,res)=>{


try{


const fees =
await ExtraFees.findOne({

receiptId:req.params.id

});



if(!fees){


return res.status(404).json({

success:false,

message:"Fees Not Found"

});


}




/*
Update Paid Amount
*/


fees.paidAmount =
req.body.paidAmount;


if(

    Number(req.body.paidAmount)
    
    >
    
    Number(fees.monthlyFees)
    
    ){
    
    
    const extraAmount =
    
    Number(req.body.paidAmount)
    
    -
    
    Number(fees.monthlyFees);
    
    
    
    return res.status(400).json({
    
    
    success:false,
    
    
    message:
    `You are paying extra ₹${extraAmount}. Monthly fees is only ₹${fees.monthlyFees}`
    
    
    });
    
    
    }


/*
Recalculate Balance
*/


fees.balanceAmount =

Number(fees.monthlyFees)

-

Number(req.body.paidAmount);




/*
Update Status
*/


if(fees.balanceAmount === 0){


fees.status =
"Paid";


}


else if(

Number(req.body.paidAmount) > 0

){


fees.status =
"Partial";


}


else{


fees.status =
"Unpaid";


}




await fees.save();





res.status(200).json({

success:true,

message:
"Fees Updated Successfully",

data:fees

});




}catch(error){


res.status(500).json({

success:false,

error:error.message

});


}


};


/*
====================================
DELETE FEES
====================================
*/


const deleteFees =
async(req,res)=>{


try{


await ExtraFees.findOneAndDelete({


receiptId:
req.params.id


});




res.status(200).json({


success:true,


message:
"Deleted Successfully"


});




}catch(error){



res.status(500).json({


success:false,


error:error.message


});


}


};

/*
EXPORT
*/


module.exports={

    createFees,
    
    getAllFees,
    
    getFeesById,
    
    filterFees,
    
    updateFees,
    
    deleteFees
    
    };