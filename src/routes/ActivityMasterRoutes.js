const express =
require("express");

const router =
express.Router();

const {

    createActivity,
    getAllActivities,
    getActivityById,
    getActivityByType,
    getActivityByName,
    updateActivity,
    deleteActivity,
    deleteAllActivities
    
    } = require(
    "../controllers/ActivityMasterController"
    );


/*
CREATE
*/

router.post(

"/create",

createActivity

);


/*
GET ALL
*/

router.get(

"/getall",

getAllActivities

);


/*
GET BY ID
*/

router.get(

"/get/:id",

getActivityById

);


/*
GET BY TYPE
*/

router.get(

"/type/:type",

getActivityByType

);


/*
UPDATE
*/

router.put(

"/update/:id",

updateActivity

);


/*
DELETE BY ID
*/

router.delete(

"/delete/:id",

deleteActivity

);

router.get(
    "/name/:name",
    getActivityByName
    );


/*
DELETE ALL
*/

router.delete(

"/deleteall",

deleteAllActivities

);


module.exports =
router;