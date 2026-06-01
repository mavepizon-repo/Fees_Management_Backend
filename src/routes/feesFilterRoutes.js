const express = require(
    "express"
  );
  
  const router =
    express.Router();
  
  /*
  ===================================
  Import Controller
  ===================================
  */
  
  const {
  
    filterFeesEntry,
  
  } = require(
    "../controllers/feesFilterController"
  );
  
  /*
  ===================================
  FILTER FEES ENTRY
  ===================================
  */
  
  router.get(
  
    "/filter",
  
    filterFeesEntry
  
  );
  
  /*
  ===================================
  EXPORT ROUTER
  ===================================
  */
  
  module.exports = router;