import React from "react";
import classes from "./AllEvents.module.css";
import mukLogo from "../../Images/Mak-Logo 1.png";
import Event from "../Event/Event";
const AllEvents = () => {
  return (
    <div className={classes.aside}>
      <div className={classes.aside_logoContainer}>
        <div className={classes.aside_logoContainer__inner}>
          <img src={mukLogo} alt="muk logo" className={classes.aside_mukLogo} />
        </div>
      </div>
      <h2 className={classes.aside_heading}>ALL EVENTS</h2>
      <div className={classes.aside_events}>
        <Event>Upcoming Lectures</Event>
        <Event>Assignments</Event>
        <Event>Student Groups</Event>
        <Event>Timetables</Event>
        <Event>Dicussions</Event>
        <Event>Upcoming Tests</Event>
      </div>
    </div>
  );
};

export default AllEvents;
