import { useEffect, useState } from "react";

import classes from "./App.module.css";
import AllEvents from "./Components/All Events/AllEvents";
import Header from "./Components/Header/Header";
import EventContent from "./Components/Middle section/EventContent";
import Notifications from "./Components/Notifications/Notifications.jsx";
import Updates from "./Components/Updates/Updates";
import Users from "./Components/Users/Users";
function App() {
  const [updates, setUpdates] = useState([]);

  const fetchUpdates = async () => {
    const updates = await fetch(
      "https://mak-e-board-85a18-default-rtdb.firebaseio.com/Updates.json"
    );

    const response = await updates.json();
    const transformedUpdates = Object.values(response);
    setUpdates(transformedUpdates);
    // console.log(transformedUpdates);
  };

  useEffect(() => {
    fetchUpdates();
  }, [updates]);

  return (
    <div className={classes.root}>
      <AllEvents />
      <div className={classes.root_right}>
        <Header />
        <div className={classes.root_content}>
          <EventContent />
          <div className={classes.root_content__aside}>
            <Notifications />
            <Users />
          </div>
        </div>
        <div className={classes.updates}>
          <div>
            <Updates />
          </div>
          <div className={classes.outerScroll}>
            <div className={classes.scroll}>
              {updates.map((update) => (
                <p key={update.content} className={classes.updates_text}>
                  {update.content}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
