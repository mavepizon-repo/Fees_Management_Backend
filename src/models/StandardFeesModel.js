const mongoose =
require("mongoose");

const standardFeesSchema =
new mongoose.Schema(

{

/*
Standard
*/

standard: {

type:String,

required:true,

unique:true,

trim:true

},

/*
Total Fees
*/

totalFees: {

type:Number,

required:true

},

/*
Description
*/

description: {

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

"StandardFees",

standardFeesSchema

);