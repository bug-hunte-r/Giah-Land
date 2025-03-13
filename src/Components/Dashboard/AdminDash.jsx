import React from "react";

const AdminDash = ({user}) => {
  return (
    <div>
      <h2>AdminDashboard</h2>
      <h1 style={{ fontWeight: "bold" }}>
        {user._doc.name ? user._doc.name : "kir khar"}
      </h1>
    </div>
  );
};

export default AdminDash;
