const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsyns = require("../utils/wrapAsyns.js");
const ExpressError = require("../utils/ExpreeError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


// post Review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsyns(reviewController.createReview)
);

// Delete Review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsyns(reviewController.destroyReview)
);

module.exports = router;
