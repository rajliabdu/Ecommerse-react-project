

import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    alert("Logged Out Successfully!");

    navigate("/login");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <p className="mb-3">
        <strong>Name:</strong> {user.username}
      </p>

      <p className="mb-6">
        <strong>Email:</strong> {user.email}
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;