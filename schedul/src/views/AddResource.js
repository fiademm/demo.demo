/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import withResponsiveLayout from "../utils/withResponsiveLayout";
import { PiCaretLeftLight, PiFloppyDisk, PiX } from "react-icons/pi";
import Button from "../components/Button";

const AddResource = ({ screenSize }) => {
  const levelData = [
    "Partner",
    "Associate Director",
    "Senior Manager",
    "Manager",
    "Assistant Manager",
    "Senior Associate 2",
    "Senior Associate 1",
    "Associate 3",
    "Associate 2",
    "Associate 1",
  ];
  const serviceLineData = [
    "Cyber",
    "Connected",
    "Powered",
    "Analytics & Operations",
    "Assurance",
  ];

  const [selectedLevel, setSelectedLevel] = useState(levelData[0]);
  const [selectedServiceLine, setSelectedServiceLine] = useState(
    serviceLineData[0]
  );

  const handleSelectedLevel = (e) => {
    setSelectedLevel(e.target.value);
  };
  const handleSelectedServiceLine = (e) => {
    setSelectedServiceLine(e.target.value);
  };

  return (
    <div className="screen-container">
      {screenSize === "mobile" && <div>Mobile screen</div>}
      {screenSize === "tablet" && <div>Tablet screen</div>}
      {screenSize === "laptop" && <div>Laptop screen</div>}
      {screenSize === "desktop" && (
        <>
          <section className="main-crud-modal-container-1">
            <section className="right-crud-modal-container">
              <section className="crud-modal-form-section">
                <div className="crud-modal-nav">
                  <div
                    className="crud-modal-back-button"
                    onClick={() => {
                      return <></>;
                    }}
                  >
                    <div className="crud-modal-back-button-icon">
                      <PiCaretLeftLight />
                    </div>
                    <h4 className="crud-modal-back-button-back">Back</h4>
                  </div>
                  <h2 className="crud-modal-screen-title">Add resource</h2>
                </div>
                <h3>Section 1 - Resource Details</h3>
                <hr />
                <div className="crud-modal-form-container">
                  <div className="crud-modal-input-container-wide">
                    <label htmlFor="fullname">
                      Full name <span className="label-state">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="First name Middle name Last name"
                    />
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="staffID">Staff ID</label>
                    <input
                      type="text"
                      name="staffID"
                      placeholder="X X X X X X X X"
                    />
                  </div>
                  <div className="crud-modal-input-container-wide">
                    <label htmlFor="email">
                      Email address{" "}
                      <span className="label-state">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email-address"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="date-joined">Date joined</label>
                    <input
                      type="date"
                      name="date-joined"
                      placeholder="Select date"
                    />
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="Level">Level</label>
                    <select
                      name="level"
                      className="select-container"
                      value={selectedLevel}
                      onChange={handleSelectedLevel}
                      id=""
                    >
                      {levelData.map((level, index) => (
                        <option
                          key={index}
                          value={level}
                          className="select-input"
                        >
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="Service-line">Service line</label>
                    <select
                      name="service-line"
                      className="select-container"
                      value={selectedServiceLine}
                      onChange={handleSelectedServiceLine}
                      id=""
                    >
                      {serviceLineData.map((serviceLine, index) => (
                        <option
                          key={index}
                          value={serviceLine}
                          className="select-input"
                        >
                          {serviceLine}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>
              <section className="crud-modal-button-group">
                <Button
                  type="crud-outlined-icon"
                  state="default"
                  variant="icon-left"
                  Icon={PiX}
                  onButtonClick={() => {
                    return <></>;
                  }}
                  buttonText="Discard changes"
                />
                <Button
                  type="crud-primary-icon"
                  state="default"
                  variant="icon-left"
                  Icon={PiFloppyDisk}
                  onButtonClick={() => {
                    return <></>;
                  }}
                  buttonText="Save details"
                />
              </section>
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default withResponsiveLayout(AddResource);
