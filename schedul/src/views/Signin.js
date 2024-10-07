import React from "react";
import withResponsiveLayout from "../utils/withResponsiveLayout";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Signin = ({ screenSize }) => {
  return (
    <div className="auth-screen-container">
      {screenSize === "mobile" && <div>Mobile screen</div>}
      {screenSize === "tablet" && <div>Tablet screen</div>}
      {screenSize === "laptop" && <div>Laptop screen</div>}
      {screenSize === "desktop" && (
        <div className="auth-form-container">
          <h1 className="auth-form-title">Login</h1>
          <div className="main-auth-input-container">
            <div className="auth-input-container">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
              />
            </div>

            <div className="auth-input-container">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <div className="auth-text-link">
                <Button
                  type="text"
                  state="default"
                  variant="no-icon"
                  buttonText="Forgot password?"
                  buttonLink="/Resetpassword"
                />
              </div>
            </div>

            <Button
              type="auth-primary"
              state="default"
              variant="no-icon"
              buttonText="Sign in"
              buttonLink="/Home"
            />
          </div>
          <p className="auth-redirection-variants">
            Are you a new user?&nbsp;
            <Link to="Signup" className="auth-link">
              Sign up here
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default withResponsiveLayout(Signin);
