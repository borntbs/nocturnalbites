import React from "react";

import { addReservation, getReservations } from "../DAL/ReservationDAL";
import ReservationForm from "../components/Reservation/Form.js";

const Reservation = (props) => {
  return (
    <div>
      <ReservationForm />
    </div>
  );
};

export default Reservation;
