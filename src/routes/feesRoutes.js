// const express =
// require("express");

// const router =
// express.Router();

// const {

// createStandardFees,

// getAllStandardFees,

// getStandardFeesById,

// updateStandardFees,

// deleteStandardFees

// } = require(
// "../controllers/StandardFeesController"
// );

// router.post(
// "/create",
// createStandardFees
// );

// router.get(
// "/getall",
// getAllStandardFees
// );

// router.get(
// "/get/:id",
// getStandardFeesById
// );

// router.put(
// "/update/:id",
// updateStandardFees
// );

// router.delete(
// "/delete/:id",
// deleteStandardFees
// );

// module.exports = router;
const express = require("express");

const router = express.Router();

const {

createFees,

getAllFees,

getFeesById,

updateFees,

deleteFees

} = require(
"../controllers/feesController"
);

router.post(
"/create",
createFees
);

router.get(
"/getall",
getAllFees
);

router.get(
"/get/:id",
getFeesById
);

router.put(
"/update/:id",
updateFees
);

router.delete(
"/delete/:id",
deleteFees
);

module.exports = router;