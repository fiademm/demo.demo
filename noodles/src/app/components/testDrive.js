import React, { useState } from "react";
import {
  BsGridFill,
  BsFillPeopleFill,
  BsAward,
  BsBook,
  BsCollectionPlay,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("userId");
  };

  const buttonData = [
    {
      id: 1,
      icon: BsGridFill,
      title: "Dashboard",
      className: "sidebar-link-container",
      link: "/dashboard",
      onButtonClick: "",
    },
    {
      id: 2,
      icon: BsFillPeopleFill,
      title: "Engagements",
      className: "sidebar-link-container",
      link: "/engagements",
      onButtonClick: "",
    },
    {
      id: 3,
      icon: BsAward,
      title: "Reports",
      className: "sidebar-link-container",
      link: "/reports",
      onButtonClick: "",
    },
    {
      id: 4,
      icon: BsBook,
      title: "Resources",
      className: "sidebar-link-container",
      link: "/resources",
      onButtonClick: "",
    },
    {
      id: 5,
      icon: BsCollectionPlay,
      title: "Schedule",
      className: "sidebar-link-container",
      link: "/schedule",
      onButtonClick: "",
    },
    {
      id: 6,
      icon: BsCollectionPlay,
      title: "Tasks",
      className: "sidebar-link-container",
      link: "/tasks",
      onButtonClick: "",
    },
    {
      id: 7,
      icon: BsCollectionPlay,
      title: "Notifications",
      className: "sidebar-link-container",
      link: "/notifications",
      onButtonClick: "",
    },
    {
      id: 8,
      icon: BsCollectionPlay,
      title: "Settings",
      className: "sidebar-link-container",
      link: "/settings",
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

  const location = useLocation();

  const [activeButton, setActiveButtonId] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButtonId(buttonId);
  };

  // Update the active button when the location changes
  React.useEffect(() => {
    const currentButton = buttonData.find(
      (button) => button.link === location.pathname
    );
    if (currentButton) {
      setActiveButtonId(currentButton.id);
    }
  }, [location.pathname]);

  return (
    <section className="main-sidebar-container">
      <div className="sidebar-expanded-logo">Noodles Insider</div>
      <hr className="sidebar-line-break" />
      {buttonData.map((button) => (
        <Link to={button.link} key={button.id} className={button.className}>
          <span
            className={
              activeButton === button.id ? " sidebar-link-container-selected" : ""
            }
            onClick={() => handleButtonClick(button.id)}
          >
            <button.icon style={{ backgroundColor: "pink" }} />
            {button.title}
            {button.id}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default Sidebar;
