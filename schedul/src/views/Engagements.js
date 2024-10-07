import React from 'react';
import { useUser } from '../utils/UserContext';
import withResponsiveLayout from '../utils/withResponsiveLayout';
import Sidebar from '../components/Sidebar';
import { PiCircleFill, PiNotificationLight } from 'react-icons/pi';

const Engagements = ({ screenSize }) => {
    const { user } = useUser(); //this code accesses the user details from the UserContext component
    
    const createEngagementInputData = [
        {
          id: 1,
          title: "Dashboard",
          className: "sidebar-link-container",
          link: "/dashboard",
          onButtonClick: "",
        },
        {
          id: 2,
          title: "Engagements",
          className: "sidebar-link-container",
          link: "/engagements",
          onButtonClick: "",
        },
        {
          id: 3,
          title: "Reports",
          className: "sidebar-link-container",
          link: "/reports",
          onButtonClick: "",
        },
        {
          id: 4,
          title: "Resources",
          className: "sidebar-link-container",
          link: "/resources",
          onButtonClick: "",
        },
        {
          id: 5,
          title: "Schedule",
          className: "sidebar-link-container",
          link: "/schedule",
          onButtonClick: "",
        },
        {
          id: 6,
          title: "Jobs",
          className: "sidebar-link-container",
          link: "/jobs",
          onButtonClick: "",
        },
        {
          id: 7,
          title: "Notifications",
          className: "sidebar-link-container",
          link: "/notifications",
          onButtonClick: "",
        },
        {
          id: 8,
          title: "Settings",
          className: "sidebar-link-container",
          link: "/settings",
          onButtonClick: "",
        },
        {
          id: 9,
          title: "Logout",
          className: "sidebar-link-container",
          link: "/",
        },
        {
          id: 10,
          title: "Home",
          className: "sidebar-link-container",
          link: "/",
        },
      ];

    return(
        <div className='screen-container'>
            {screenSize === "mobile" && <div>Mobile screen</div>}
            {screenSize === "tablet" && <div>Tablet screen</div>}
            {screenSize === "laptop" && <div>Laptop screen</div>}
            {screenSize === "desktop" && (
                <>
                <section className='main-sidebar-container'>
                    <Sidebar />
                </section>
                <section className='main-content-container-1 '>
                    <div>Welcome, {user.userName}!</div>
                    <div className="main-content-nav-container">
                        <PiNotificationLight /> 
                    </div>
                    <div className="main-content-container-2">
                        <div className="page-title-and-buttons"></div>

                        <div className="engagement-birdseye-card-main-container-1">
                            <div className="engagement-birdseye-card-main-container-2">
                                <p>Service line</p>
                                <div className="engagement-birdseye-card-container-1">
                                    <PiCircleFill color='#10b981' />
                                    <p>Service line</p>
                                </div>
                                <div className="engagement-birdseye-card-container-2">
                                    <p>Manager name (Manager)</p> | <p>In-charge name (In charge)</p>
                                </div>
                                <hr />
                                <li>Resource 1 (level)</li>
                                <li>Resource 2 (level)</li>
                                <li>Resource 3 (level)</li>
                                <li>Resource 4 (level)</li>
                              </div>
                            <div className="engagement-birdseye-card-main-container-2">
                                <p>Service line</p>
                                <div className="engagement-birdseye-card-container-1">
                                    <PiCircleFill color='#10b981' />
                                    <p>Service line</p>
                                </div>
                                <div className="engagement-birdseye-card-container-2">
                                    <p>Manager name (Manager)</p> | <p>In-charge name (In charge)</p>
                                </div>
                                <hr />
                                <li>Resource 1 (level)</li>
                                <li>Resource 2 (level)</li>
                                <li>Resource 3 (level)</li>
                                <li>Resource 4 (level)</li>
                            </div>
                        </div>
                    </div>
                </section>
                </>
            )}
        </div>
    );
};

export default withResponsiveLayout(Engagements);