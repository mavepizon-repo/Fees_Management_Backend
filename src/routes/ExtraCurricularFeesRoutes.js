const express=require("express");

const router=express.Router();


const {

    createFees,
    
    getAllFees,
    
    getFeesById,
    
    filterFees,
    
    updateFees,
    
    deleteFees
    
    }=require(
    "../controllers/ExtraCurricularFeesController"
    );



router.post(
"/create",
createFees
);


router.get(
"/get-all",
getAllFees
);


router.get(
    "/get/:id",
    getFeesById
    );


router.get(
"/filter",
filterFees
);


router.put(
"/update/:id",
updateFees
);


router.delete(
"/delete/:id",
deleteFees
);



module.exports=router;