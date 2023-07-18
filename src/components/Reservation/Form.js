import React, { useEffect } from "react";

const ReservationForm = (props) => {
  useEffect(() => {
    setStep();
  }, [props]);

  const getISODate = (e) => {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = String(d.getMonth() + 1).padStart(2, 0);
    let dd = d.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };

  const getMaxISODate = (e) => {
    let d = new Date();
    let yyyy = d.getFullYear() + 1;
    let mm = String(d.getMonth() + 1).padStart(2, 0);
    let dd = d.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };

  const setStep = (e) => {
    document.querySelector("#timePicker").step = 1200;
  };

  setStep();

  return (
    <form>
      <div>Make a Reservation</div>
      <input
        id="DTPicker"
        type="date"
        min={getISODate()}
        max={getMaxISODate()}
      ></input>
      <input type="time" id="timePicker"></input>
    </form>
  );
};

export default ReservationForm;
