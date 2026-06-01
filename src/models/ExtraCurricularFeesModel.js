const mongoose = require("mongoose");


const extraCurricularFeesSchema =
new mongoose.Schema(

{

receiptId: {

type:String,

unique:true

},


studentId: {

type: mongoose.Schema.Types.ObjectId,

ref:"ExtraCurricularStudent",

required:true

},


studentCustomId: {

type:String

},


studentName: {

type:String

},


profilePhoto: {

type:String

},

gender: {

    type:String
    
    },


phoneNumber: {

type:String

},


schoolName: {

type:String

},


className: {

type:String

},


activityId: {

type:String

},


activityType: {

    type:String
    
    },
    
    activityName: {
    
    type:String
    
    },
    
    monthlyFees: {
    
    type:Number
    
    },
    
    paidAmount: {
    
    type:Number,
    
    required:true
    
    },
    
    balanceAmount: {
    
    type:Number
    
    },
    
    joiningDate: {
    
    type:Date
    
    },
    
    status: {
    
    type:String,
    
    enum:[
    "Paid",
    "Partial",
    "Unpaid"
    ],
    
    default:"Unpaid"
    
    },
    
    paymentDate: {
    
    type:Date,
    
    default:Date.now
    
    }


},

{

timestamps:true

}

);


module.exports =
mongoose.model(

"ExtraCurricularFees",

extraCurricularFeesSchema

);