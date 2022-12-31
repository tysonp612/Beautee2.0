import axios from "axios";
export const loadAllBookings = async (token, date) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/booking_getAllBookings`,
    { date },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const createBooking = async (adminToken, bookingData) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/booking_createBooking`,
    { bookingData },
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );
};
export const loadOneBooking = async (adminToken, bookingId) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/booking_getOneBooking`,
    { id: bookingId },
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );
};
