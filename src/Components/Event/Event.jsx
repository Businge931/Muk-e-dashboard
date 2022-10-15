import React from "react";
import classes from "./Event.module.css";
const Event = ({ children }) => {
  return (
    <div className={classes.event}>
      <p className={classes.event_label}>{children}</p>
    </div>
  );
};

export default Event;
