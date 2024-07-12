import { useState } from "react";
import { AuthLinkButton, LinkButton } from "../components/buttons";
import { Link } from "react-router-dom";
import { Sidebar, MiniSidebar } from "../components/sidebars";

const Dashboard = () => {
  return (
    <div className="main-screen-container">
      <section classname="sidebar-container">
        <Sidebar />
      </section>
      <section classname="content-container">Dashboard</section>
    </div>
  );
};

export default Dashboard;
