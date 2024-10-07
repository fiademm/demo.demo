import React from "react";
import withResponsiveLayout from "../utils/withResponsiveLayout";
import Button from "../components/Button";

const ResetPassword = ({ screenSize }) => {
  return (
    <div className="auth-screen-container">
      {screenSize === "mobile" && <div>Mobile screen</div>}
      {screenSize === "tablet" && <div>Tablet screen</div>}
      {screenSize === "laptop" && <div>Laptop screen</div>}
      {screenSize === "desktop" && (
        <div className="auth-form-container">
          <h1 className="auth-form-title">Reset password</h1>
          <div className="main-auth-input-container">
            <div className="auth-input-container">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="auth-input-container">
              <label htmlFor="Password">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Re-enter your password"
              />
            </div>

          </div>
          <div className="auth-button-group">
            <Button
              type="auth-primary"
              state="default"
              variant="no-icon"
              buttonText="Save password"
            />
          <div className="auth-text-link" style={{textAlign: 'center'}}>
            <Button
              type="auth-text"
              state="default"
              variant="no-icon"
              buttonText="Cancel & Navigate to Login"
              buttonLink="/"
            />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withResponsiveLayout(ResetPassword);
