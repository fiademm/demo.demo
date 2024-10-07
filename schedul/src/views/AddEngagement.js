import React, { useState } from "react";
import withResponsiveLayout from "../utils/withResponsiveLayout";
import { PiCaretLeftLight, PiFloppyDisk, PiX } from "react-icons/pi";
import Button from "../components/Button";

const AddEngagement = ({ screenSize }) => {
  const serviceLineData = [
    "Cyber",
    "Connected",
    "Powered",
    "Analytics & Operations",
    "Assurance",
  ];
  const engagementClassificationData = ["Client", "RFP", "EOI", "CSR"];
  const partnerData = [
    "Kwasi Oduro",
    "Kwame Gyamfi",
    "Kofi Asare",
    "Kwaku Mintah",
    "Kwadwo Atiemo",
    "Yaw Sintim",
    "Kwabena Asamoah",
  ];
  const managerData = [
    "Kwesi Boahen",
    "Kwami Agyekum",
    "Koffie Agyei",
    "Kweku Ahenkwa",
    "Kojo Abankwa",
    "Yaw Gyan",
    "Kwabena Osei",
  ];

  const [selectedServiceLine, setSelectedServiceLine] = useState(
    serviceLineData[0]
  );
  const [selectedClassification, setSelectedClassification] = useState(
    engagementClassificationData[0]
  );
  const [selectedPartner, setSelectedPartner] = useState(partnerData[0]);
  const [selectedManager, setSelectedManager] = useState(managerData[0]);

  const handleSelectedServiceLine = (e) => {
    setSelectedServiceLine(e.target.value);
  };
  const handleSelectedClassification = (e) => {
    setSelectedClassification(e.target.value);
  };
  const handleSelectedPartner = (e) => {
    setSelectedPartner(e.target.value);
  };
  const handleSelectedManager = (e) => {
    setSelectedManager(e.target.value);
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
                  <h2 className="crud-modal-screen-title">
                    Add new engagement
                  </h2>
                </div>
                <h3>Section 1 - Engagement information</h3>
                <hr />
                <div className="crud-modal-form-container">
                  <div className="crud-modal-input-container-wide">
                    <label htmlFor="engagement-title">
                      Engagement title{" "}
                      <span className="label-state">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="engagement-title"
                      placeholder="Enter engagement title"
                    />
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="engagement-code">
                      Engagement code{" "}
                      <span className="label-state">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="engagement-code"
                      placeholder="Enter engagement code"
                    />
                  </div>
                  <div className="crud-modal-input-container-wide">
                    <label htmlFor="client-name">Client name</label>
                    <input
                      type="text"
                      name="client-name"
                      placeholder="Enter client name"
                    />
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
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="engagement-classification">
                      Engagement classification
                    </label>
                    <select
                      name="engagement-classification"
                      className="select-container"
                      value={selectedClassification}
                      onChange={handleSelectedClassification}
                      id=""
                    >
                      {engagementClassificationData.map(
                        (engagementClassification, index) => (
                          <option
                            key={index}
                            value={engagementClassification}
                            className="select-input"
                          >
                            {engagementClassification}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="engagement-manager">
                      Engagement Manager
                    </label>
                    <select
                      name="engagement-manager"
                      className="select-container"
                      value={selectedManager}
                      onChange={handleSelectedManager}
                      id=""
                    >
                      {managerData.map((manager, index) => (
                        <option
                          key={index}
                          value={manager}
                          className="select-input"
                        >
                          {manager}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="engagement-classification">
                      Engagement Partner
                    </label>
                    <select
                      name="engagement-partner"
                      className="select-container"
                      value={selectedPartner}
                      onChange={handleSelectedPartner}
                      id=""
                    >
                      {partnerData.map((partner, index) => (
                        <option
                          key={index}
                          value={partner}
                          className="select-input"
                        >
                          {partner}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="start-date">Start date</label>
                    <input type="date" name="start-date" />
                  </div>
                  <div className="crud-modal-input-container-small">
                    <label htmlFor="end-date">End date</label>
                    <input type="date" name="end-date" />
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

export default withResponsiveLayout(AddEngagement);
