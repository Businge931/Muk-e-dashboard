import React from "react";
import classes from "./Users.module.css";
import profile from "../../Images/profile.png";

const Users = () => {
  return (
    <div className={classes.users}>
      <h2 className={classes.users_heading}>Users</h2>
      <div className={classes.users_container}>
        <div className={classes.user}>
          <img src={profile} alt="user" className={classes.user_picture} />
        </div>
        <div className={classes.user}>
          <img src={profile} alt="user" className={classes.user_picture} />
        </div>
        <div className={classes.user}>
          <img src={profile} alt="user" className={classes.user_picture} />
        </div>
        <div className={classes.user}>
          <img src={profile} alt="user" className={classes.user_picture} />
        </div>
        <div className={classes.user}>
          <img src={profile} alt="user" className={classes.user_picture} />
        </div>
        <div className={classes.user}>
          <img src={profile} alt="user" className={classes.user_picture} />
        </div>
      </div>
      <div className={classes.users_number}>
        <p>
          <span>+</span>30
        </p>
      </div>
    </div>
  );
};

export default Users;
