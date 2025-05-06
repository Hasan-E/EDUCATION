import React from "react";
import UsersCard from "./UsersCard";
import "./Users.scss";

const Users = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UsersCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
