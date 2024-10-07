import React from "react";
import withResponsiveLayout from "../utils/withResponsiveLayout";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ResetPassword = ({ screenSize }) => {
  return (
    <div className="auth-screen-container">
      {screenSize === "mobile" && <div>Mobile screen</div>}
      {screenSize === "tablet" && <div>Tablet screen</div>}
      {screenSize === "laptop" && <div>Laptop screen</div>}
      {screenSize === "desktop" && (
        <div className="auth-form-container">
          <h1 className="auth-form-title">Verify account</h1>
          <div className="main-auth-input-container">
            <div className="auth-input-container">
              <label htmlFor="Email">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              <div className="auth-text-link">
                <Button
                  type="text"
                  state="default"
                  variant="no-icon"
                  buttonText="Send code via email"
                />
              </div>
            </div>

            <hr className="auth-horizontal-break" />

            <div className="auth-input-container">
              <label htmlFor="verificationcode">6-digit code</label>
              <input
                type="text"
                name="verificationcode"
                placeholder="X X X X X X"
              />
              <div className="auth-text-link">
                <Button
                  type="text"
                  state="default"
                  variant="no-icon"
                  buttonText="Verify code"
                />
              </div>
            </div>
          </div>
          <p className="auth-redirection-variants">
            <Link to="/" className="auth-link">
              Return to login screen
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default withResponsiveLayout(ResetPassword);

