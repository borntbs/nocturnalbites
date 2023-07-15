import React from "react";
import { addReservation, getReservations } from "../DAL/ReservationDAL";

const Reservation = (props) => {
  return (
    <div>
      {/* Write your HTML from this comment onwards. You can delete the form below.*/}
      <form>Placeholder</form>
      <button onClick={addReservation} type="button" className="bg-red-500 w-20 h-10">Send POST</button>
      <button onClick={getReservations} type="button" className="bg-red-500 w-20 h-10">Send GET</button>
    </div>
  );
};

export default Reservation;