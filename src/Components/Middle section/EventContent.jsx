import React from "react";
import Lecture from "../Lecture/Lecture";
import classes from "./EventContent.module.css";

import electronics from "../../Images/electronics 1.png";
import ai from "../../Images/ai.jpg";
import soft from "../../Images/soft.jpg";
import software from "../../Images/softawre.jpg";

const EventContent = () => {
  const DUMMY_LECTURES = [
    {
      name: "CSC2200: Operating Systems",
      location: "LLT5B",
      status: "ongoing",
      image: electronics,
      // date: "",
    },
    {
      name: "CSC2200: Artificial Intelligence",
      location: "LAB 1",
      status: "pending",
      image: ai,
    },
    {
      name: "CSC2200: Software Development",
      location: "LLT5B",
      status: "cancelled",
      image: soft,
    },
    {
      name: "CSC2200: Computer Architecture",
      location: "RM 105",
      status: "ongoing",
      image: software,
    },
    {
      name: "CSC2200: Embedded Systems",
      location: "LLT5B",
      status: "pending",
      image: electronics,
    },
    {
      name: "CSC2200: Magnestim Principals",
      location: "LLT5B",
      status: "cancelled",
      image: electronics,
    },
    {
      name: "CSC2200: Engineering Mathematics ",
      location: "LLT5B",
      status: "pending",
      image: electronics,
    },
  ];

  return (
    <section className={classes.content}>
      <h2 className={classes.content_heading}>Lectures</h2>
      <div className={classes.lectures}>
        {DUMMY_LECTURES.map((lecture) => (
          <Lecture
            key={lecture.name}
            name={lecture.name}
            location={lecture.location}
            status={lecture.status}
            image={lecture.image}
          />
        ))}
      </div>
    </section>
  );
};

export default EventContent;
