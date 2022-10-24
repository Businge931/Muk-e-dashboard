import { useEffect, useState } from "react";
import Lecture from "../Lecture/Lecture";
import classes from "./EventContent.module.css";

const EventContent = () => {
  const [lectures, setLectures] = useState([]);

  const fetchLectures = async () => {
    try {
      const lectures = await fetch(
        "https://mak-e-board-85a18-default-rtdb.firebaseio.com/Lectures.json"
      );
      const response = await lectures.json();
      const transformedLectures = Object.values(response);
      setLectures(transformedLectures);
      // console.log("lectures", transformedLectures);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLectures();
  }, []);

  return (
    <>
      <section className={classes.content}>
        <h2 className={classes.content_heading}>Lectures</h2>
        <div className={classes.scroll}>
          <div className={classes.lectures}>
            {lectures.map((lecture) => (
              <Lecture
                key={lecture.courseCode}
                name={lecture.courseCode}
                location={lecture.venue}
                status={lecture.status}
                image={lecture.posterUrl}
                time={lecture.time}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventContent;
