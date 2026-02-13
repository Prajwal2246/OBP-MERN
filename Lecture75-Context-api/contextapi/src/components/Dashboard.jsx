import React from "react";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="/dashboard/home">Home</Link>
        <Link to="/dashboard/about">About</Link>
        <Link to="/dashboard/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
