import React from "react";

const UserDash = ({user}) => {
  return (
    <div>
      <h2>UserDashboard</h2>
      <h1 style={{ fontWeight: "bold" }}>
        {user._doc.name ? user._doc.name : "kir khar"}
      </h1>
    </div>
  );
};

export default UserDash;
