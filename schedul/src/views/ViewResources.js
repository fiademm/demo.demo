import React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import withResponsiveLayout from "../utils/withResponsiveLayout";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import { PiBellLight, PiCaretDownLight, PiChatLight } from "react-icons/pi";

const ViewResource = ({ screenSize }) => {
  return (
    <div className="screen-container">
      {screenSize === "mobile" && <div>Mobile screen</div>}
      {screenSize === "tablet" && <div>Tablet screen</div>}
      {screenSize === "laptop" && <div>Laptop screen</div>}
      {screenSize === "desktop" && (
        <>
          <section className="main-sidebar-container">
            <Sidebar />
          </section>
          <section className="main-view-container">
            <div className="main-view-nav-container">
              <h1>Resources</h1>
              <div className="view-nav-user-info">
                <div className="view-nav-button-group">
                  <span className="view-icon-container-filled">
                    <PiBellLight />
                  </span>
                  <span className="view-icon-container-filled">
                    <PiChatLight />
                  </span>
                </div>
                <div className="nav-user-profile">
                  <p>Firstname Lastname</p>
                  <p>User role</p>
                  <span className="view-icon-container">
                    <PiCaretDownLight />
                  </span>
                </div>
              </div>
            </div>
            <div className="main-view-table-container">
                <input type="search" name="" id="" />
                <Button />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default withResponsiveLayout(ViewResource);
