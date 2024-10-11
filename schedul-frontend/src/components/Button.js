import React, { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ type, screen, variant, Icon, onClick, text, link }) => {
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

    const classname = `btn-${type}-${variant}-${screen} ${isHovevered ? "hover" : ""} ${isFocused ? "focused" : ""
        } ${isDisabled ? "disabled" : ""}`;

    return (
        <Link
            to={link}
            className={classname}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={onClick}
            disabled={isDisabled}
        >
            {Icon && variant === "icon" && <Icon />}
            {text}
            {Icon && variant === "icon" && <Icon />}
        </Link>
    );
};

export default Button;
