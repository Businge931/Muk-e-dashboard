import React, { useState, useEffect } from "react";
import classes from "./Users.module.css";
// import profile from "../../Images/profile.png";

const Users = () => {
  const [users, setUsers] = useState();
  const fetchUsers = async () => {
    const users = await fetch(
      "https://mak-e-board-85a18-default-rtdb.firebaseio.com/Users.json"
    );

    const response = await users.json();
    // console.log("User Response", response);
    const transformedData = Object.values(response);
    // console.log("users", transformedData);
    setUsers(transformedData);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <div className={classes.users}>
      <h2 className={classes.users_heading}>Users</h2>
      <div className={classes.users_container}>
        {users.map((user) => (
          <div className={classes.user} key={user.department}>
            <img
              src={user.image_uri}
              alt="user"
              className={classes.user_picture}
            />
          </div>
        ))}

        <div className={classes.users_number}>
          <p>
            <span>+</span>30
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
