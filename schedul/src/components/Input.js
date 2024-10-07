import React, { useState } from "react";
import { Link } from "react-router-dom";

/* 
Button type: Primary, Secondary, Outlined, Text, Error and Warning. 
Button state: Default, Hover, Focused and Disabled.
Button variant: No icon, Icon left, Icon right.
*/

const Input = ({ type, state, variant, icon, onButtonClick, buttonText, buttonLink }) => {
  const [isHovevered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const buttonClass = `button ${type} ${isHovevered ? "hover" : ""} ${
    isFocused ? "focused" : ""
  } ${isDisabled ? "disabled" : ""} ${variant}`;

  return (
    <Link to={buttonLink}
        className={buttonClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={onButtonClick}
        disabled={isDisabled}
      >
        {icon && variant === "icon-left" && (
          <span className="buttonicon left-icon"></span>
        )}
        {buttonText}
        {icon && variant === "icon-right" && (
          <span className="buttonicon right-icon"></span>
        )}
    </Link>
  );
};

export default Input;
