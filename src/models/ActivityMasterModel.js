const mongoose = require("mongoose");

const activityMasterSchema =
new mongoose.Schema(

{

/*
Activity Type
*/

activityType:{

type:String,

required:true,

trim:true

},

/*
Activity Name
*/

activityName:{

type:String,

required:true,

trim:true

},

/*
Monthly Fees
*/

monthlyFees:{

type:Number,

required:true

},

/*
Description
*/

description:{

type:String,

default:""

}

},

{

timestamps:true

}

);

module.exports =
mongoose.model(
"ActivityMaster",
activityMasterSchema
);
