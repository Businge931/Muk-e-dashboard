import { useEffect, useState } from "react";

import classes from "./Notifications.module.css";
// import { db } from "../../Utils/Firebase";
// import { onValue, ref } from "firebase/database";
// import { async } from "@firebase/util";

const Notifications = () => {
  const [notifications, setNotifications] = useState();

  // useEffect(() => {
  //   const query = ref(db, "Notifications");
  //   onValue(query, (snapshot) => {
  //     const data = snapshot.val();
  //     const notifications = snapshot.exists();

  //     console.log("data", data);

  //     if (notifications) {
  //       console.log("notifications", notifications);
  //     } else {
  //       console.log("No data found");
  //     }
  //   });
  // }, []);

  const fetchNotifications = async () => {
    const data = await fetch(
      "https://mak-e-board-85a18-default-rtdb.firebaseio.com/Notifications.json"
    );

    const response = await data.json();

    const transformedData = Object.values(response);
    setNotifications(transformedData);

    // console.log("res", transformedData);
  };

  useEffect(() => {
    fetchNotifications();
  }, [notifications]);

  if (!notifications) {
    return <p>Loading...</p>;
  }
  return (
    <div className={classes.notifications}>
      <h2 className={classes.notification_heading}>Notifications</h2>
      <div className={classes.scroll}>
        <div className={classes.notifications_scroll}>
          {notifications
            .map((notification) => (
              <div className={classes.notification} key={notification.content}>
                <p className={classes.notification_message}>
                  {notification.content}
                </p>

                <div className={classes.notification_sender}>
                  <div className={classes.notification_sender__}>
                    <div className={classes.notification_sender__imageHolder}>
                      <img
                        src={notification.senderImageUrl}
                        alt="notification_sender__image"
                        className={classes.notification_sender__image}
                      />
                    </div>
                    <div className={classes.sender}>
                      <p className={classes.notification_sender__name}>
                        {notification.sender}
                      </p>
                      <p className={classes.notification_sender__department}>
                        {notification.department}
                      </p>
                    </div>
                  </div>
                  <p className={classes.notification_time}>
                    {notification.time}
                  </p>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
