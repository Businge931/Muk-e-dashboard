import classes from "./App.module.css";
import AllEvents from "./Components/All Events/AllEvents";
import Header from "./Components/Header/Header";
import EventContent from "./Components/Middle section/EventContent";
import Notifications from "./Components/Notifications/Notifications.jsx";
import Users from "./Components/Users/Users";
function App() {
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
      </div>
    </div>
  );
}

export default App;
