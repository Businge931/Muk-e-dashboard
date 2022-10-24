import React from "react";
import classes from "./Lecture.module.css";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

const Lecture = ({ name, image, status, location, time }) => {
  const statusStyle =
    status === "ongoing"
      ? classes.ongoing
      : status === "cancelled"
      ? classes.cancelled
      : status === "pending"
      ? classes.pending
      : null;

  const borderStyle =
    status === "ongoing"
      ? classes.borderOngoing
      : status === "cancelled"
      ? classes.borderCancelled
      : status === "pending"
      ? classes.borderPending
      : null;

  return (
    <div className={classes.lecture_Container}>
      <div className={classes.lecture_image__container}>
        <div className={`${classes.border} ${borderStyle}`}></div>
        <img src={image} alt="electronics" className={classes.lecture_image} />
      </div>

      <div className={classes.lecture}>
        <h4 className={classes.lecture_name}>{name}</h4>
        <p className={classes.lecture_location}>
          <span>
            <MdLocationOn
              className={`${classes.lecture_location__icon} ${statusStyle}`}
            />
          </span>
          {location}
        </p>
      </div>

      <div className={`${classes.lecture_status} `}>
        <div className={`${classes.status_name} ${statusStyle}`}>
          <p>{status}</p>
        </div>
        <div>
          <p className={classes.status_date}>
            <span>
              <FaRegCalendarAlt
                className={`${classes.status_date__icon} ${statusStyle}`}
              />
            </span>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
