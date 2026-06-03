const ActivityMaster =
require("../models/ActivityMasterModel");


/*
=================================
CREATE
=================================
*/

const createActivity =
async(req,res)=>{

try{

const {

activityType,

activityName,

monthlyFees,

description

}=req.body;


const existing =
await ActivityMaster.findOne({

activityType,

activityName

});


if(existing){

return res.status(400).json({

success:false,

message:"Activity Already Exists"

});

}


const activity =
await ActivityMaster.create({

activityType,

activityName,

monthlyFees,

description

});


res.status(201).json({

success:true,

message:"Activity Added Successfully",

data:activity

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};



/*
=================================
GET ALL
=================================
*/

const getAllActivities =
async(req,res)=>{

try{

const activities =
await ActivityMaster.find();

res.status(200).json({

success:true,

total:activities.length,

data:activities

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};



/*
=================================
GET BY ID
=================================
*/

const getActivityById =
async(req,res)=>{

try{

const activity =
await ActivityMaster.findById(

req.params.id

);


if(!activity){

return res.status(404).json({

success:false,

message:"Activity Not Found"

});

}


res.status(200).json({

success:true,

data:activity

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};



/*
=================================
GET BY TYPE
=================================
*/

const getActivityByType =
async(req,res)=>{

try{

const activities =
await ActivityMaster.find({

activityType:req.params.type

});


res.status(200).json({

success:true,

total:activities.length,

data:activities

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};


/*
=================================
GET BY Name
=================================
*/
const getActivityByName =
async(req,res)=>{

try{

const activity =
await ActivityMaster.findOne({

activityName:req.params.name

});

if(!activity){

return res.status(404).json({

success:false,
message:"Activity Not Found"

});

}

res.status(200).json({

success:true,
data:activity

});

}catch(error){

res.status(500).json({

success:false,
error:error.message

});

}

};


/*
=================================
UPDATE
=================================
*/

const updateActivity =
async(req,res)=>{

try{

const activity =
await ActivityMaster.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true,
runValidators:true
}

);

res.status(200).json({

success:true,
message:"Updated Successfully",
data:activity

});

}catch(error){

res.status(500).json({

success:false,
error:error.message

});

}

};



/*
=================================
DELETE
=================================
*/

const deleteActivity =
async(req,res)=>{

try{

const activity =
await ActivityMaster.findByIdAndDelete(

req.params.id

);


if(!activity){

return res.status(404).json({

success:false,

message:"Activity Not Found"

});

}


res.status(200).json({

success:true,

message:"Deleted Successfully"

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};



/*
=================================
DELETE ALL
=================================
*/

const deleteAllActivities =
async(req,res)=>{

try{

await ActivityMaster.deleteMany({});

res.status(200).json({

success:true,

message:"All Activities Deleted Successfully"

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};



module.exports={

createActivity,

getAllActivities,

getActivityById,

getActivityByType,

getActivityByName,

updateActivity,

deleteActivity,

deleteAllActivities

};