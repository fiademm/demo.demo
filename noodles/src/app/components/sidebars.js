import React, { useState } from "react";
import {
  BsGridFill,
  BsFillPeopleFill,
  BsAward,
  BsBook,
  BsCollectionPlay,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const handleLogout = () => {
    localStorage.removeItem("userId");
  };

  const buttonData = [
    {
      id: 1,
      icon: BsGridFill,
      title: "Dashboard",
      link: "/a-dashboard",
      onButtonClick: "",
    },
    {
      id: 2,
      icon: BsFillPeopleFill,
      title: "Engagements",
      link: "/a-administrators",
      onButtonClick: "",
    },
    {
      id: 3,
      icon: BsAward,
      title: "Reports",
      link: "/a-badges",
      onButtonClick: "",
    },
    {
      id: 4,
      icon: BsBook,
      title: "Resources",
      link: "/a-courses",
      onButtonClick: "",
    },
    {
      id: 5,
      icon: BsCollectionPlay,
      title: "Schedule",
      link: "/a-course-videos",
      onButtonClick: "",
    },
    {
      id: 6,
      icon: BsCollectionPlay,
      title: "Tasks",
      link: "/a-course-videos",
      onButtonClick: "",
    },
    {
      id: 7,
      icon: BsCollectionPlay,
      title: "Notifications",
      link: "/a-course-videos",
      onButtonClick: "",
    },
    {
      id: 8,
      icon: BsCollectionPlay,
      title: "Settings",
      link: "/a-course-videos",
      onButtonClick: "",
    },
    {
      id: 9,
      icon: BsCollectionPlay,
      title: "Logout",
      link: "/",
      onButtonClick: handleLogout,
    },
  ];

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <section className="main-sidebar-container">
      {buttonData.map((button) => (
        <Link
          to={button.link}
          onClick={button.onButtonClick}
          key={button.id}
          style={{ textDecoration: "none", backgroundColor: "transparent" }}
        >
          <span
            className={`sidebar-button ${
              activeButton === button.title ? "active-sidebar-button" : ""
            }`}
            onClick={() => handleClick(button.title)}
          >
            <button.icon style={{ backgroundColor: "transparent" }} />
            {button.title}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default Sidebar;
