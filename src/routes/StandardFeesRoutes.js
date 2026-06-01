const express =
require("express");

const router =
express.Router();

const {

createStandardFees,

getAllStandardFees,

getStandardFeesById,

getFeesByStandard,

updateStandardFees,

deleteStandardFees,

deleteAllStandardFees

}=require(

"../controllers/StandardFeesController"

);


/*
CREATE
*/

router.post(

"/create",

createStandardFees

);


/*
GET ALL
*/

router.get(

"/getall",

getAllStandardFees

);


/*
GET BY ID
*/

router.get(

"/get/:id",

getStandardFeesById

);

/*
GET BY STANDARD
*/
router.get(
    "/standard/:standard",
    getFeesByStandard
    );


/*
UPDATE
*/

router.put(

"/update/:id",

updateStandardFees

);


/*
DELETE
*/

router.delete(

"/delete/:id",

deleteStandardFees

);

router.delete(
    "/deleteall",
    deleteAllStandardFees
    );


module.exports =
router;