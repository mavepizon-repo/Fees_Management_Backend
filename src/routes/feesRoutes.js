const express =
require("express");

const router =
express.Router();

const {

createStandardFees,

getAllStandardFees,

getStandardFeesById,

updateStandardFees,

deleteStandardFees

} = require(
"../controllers/StandardFeesController"
);

router.post(
"/create",
createStandardFees
);

router.get(
"/getall",
getAllStandardFees
);

router.get(
"/get/:id",
getStandardFeesById
);

router.put(
"/update/:id",
updateStandardFees
);

router.delete(
"/delete/:id",
deleteStandardFees
);

module.exports = router;