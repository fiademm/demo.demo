import React from 'react';
import { useUser } from '../utils/UserContext';
import withResponsiveLayout from '../utils/withResponsiveLayout';
import Sidebar from '../components/Sidebar';

const Schedule = ({ screenSize }) => {
    const { user } = useUser(); //this code accesses the user details from the UserContext component
    
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
                    <div className="main-content-nav-container"></div>
                    <div className="main-content-container-2"></div>
                </section>
                </>
            )}
        </div>
    );
};

export default withResponsiveLayout(Schedule);