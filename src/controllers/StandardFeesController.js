const StandardFees =
require(
"../models/StandardFeesModel"
);


/*
=================================
CREATE FEES
=================================
*/

const createStandardFees =
async(req,res)=>{

try{

const {

standard,

totalFees,

description

}=req.body;


/*
Already Exists
*/

const existing =
await StandardFees.findOne({

standard

});


if(existing){

return res.status(400).json({

success:false,

message:
"Standard Already Exists"

});

}


/*
Create
*/

const fees =
await StandardFees.create({

standard,

totalFees,

description

});


res.status(201).json({

success:true,

message:
"Standard Fees Added Successfully",

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
=================================
GET ALL
=================================
*/

const getAllStandardFees =
async(req,res)=>{

try{

const fees =
await StandardFees.find()
.sort({

standard:1

});


res.status(200).json({

success:true,

total:fees.length,

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
=================================
GET BY ID
=================================
*/

const getStandardFeesById =
async(req,res)=>{

try{

const fees =
await StandardFees.findById(

req.params.id

);


if(!fees){

return res.status(404).json({

success:false,

message:
"Standard Fees Not Found"

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
=================================
GET FEES BY STANDARD
=================================
*/

const getFeesByStandard =
async(req,res)=>{

try{

const fees =
await StandardFees.findOne({

standard:req.params.standard

});


if(!fees){

return res.status(404).json({

success:false,

message:"Standard Not Found"

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
=================================
UPDATE
=================================
*/

const updateStandardFees =
async(req,res)=>{

try{

const fees =
await StandardFees.findByIdAndUpdate(

req.params.id,

req.body,

{

new:true,

runValidators:true

}

);


if(!fees){

return res.status(404).json({

success:false,

message:
"Standard Fees Not Found"

});

}


res.status(200).json({

success:true,

message:
"Updated Successfully",

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
=================================
DELETE
=================================
*/

const deleteStandardFees =
async(req,res)=>{

try{

const fees =
await StandardFees.findByIdAndDelete(

req.params.id

);


if(!fees){

return res.status(404).json({

success:false,

message:
"Standard Fees Not Found"

});

}


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
=================================
DELETE ALL
=================================
*/

const deleteAllStandardFees =
async(req,res)=>{

try{

await StandardFees.deleteMany({});

res.status(200).json({

success:true,

message:
"All Standard Fees Deleted Successfully"

});

}catch(error){

res.status(500).json({

success:false,

error:error.message

});

}

};



module.exports = {

createStandardFees,

getAllStandardFees,

getStandardFeesById,

getFeesByStandard,

updateStandardFees,

deleteStandardFees,

deleteAllStandardFees

};