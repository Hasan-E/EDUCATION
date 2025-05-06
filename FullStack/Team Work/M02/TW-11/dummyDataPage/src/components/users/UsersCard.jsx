import React from "react";

const UsersCard = ({ user }) => {
  const { imageUrl, name, role } = user;
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <div className="texts">
        <h4 className="name">{name}</h4>
        <h6 className="role">{role}</h6>
      </div>
    </div>
  );
};

export default UsersCard;
