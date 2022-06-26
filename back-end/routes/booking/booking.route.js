const express = require("express");
const router = express.Router();
const bookingController = require("./../../controllers/booking/booking.controller");

const {
  authTokenCheck,
  adminCheck,
} = require("./../../middlewares/authentication/authentication");

router
  .route("/booking_createBooking")
  .post(authTokenCheck, adminCheck, bookingController.createBooking);
router
  .route("/booking_getAllBookings")
  .post(authTokenCheck, adminCheck, bookingController.getAllBookings);
router
  .route("/booking_deleteBooking")
  .post(authTokenCheck, adminCheck, bookingController.deleteBooking);
router
  .route("/booking_updateBooking")
  .post(authTokenCheck, adminCheck, bookingController.updateBooking);
router
  .route("/booking_getOneBooking")
  .post(authTokenCheck, adminCheck, bookingController.getOneBooking);
module.exports = router;
