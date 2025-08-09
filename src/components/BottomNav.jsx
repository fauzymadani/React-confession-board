// src/components/ButtonNav.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faCog } from "@fortawesome/free-solid-svg-icons";

const ButtonNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttons = [
    <FontAwesomeIcon icon={faHome} className="icon" />,
    <FontAwesomeIcon icon={faPlus} className="icon" />,
    <FontAwesomeIcon icon={faCog} className="icon" />,
  ];

  return (
    <StyledWrapper>
      <div className="button-container">
        {buttons.map((icon, index) => (
          <button
            key={index}
            className={`button ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {icon}
          </button>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;

  .button-container {
    display: flex;
    background-color: white;
    border: 1px solid #e5e7eb; /* border-gray-200 */
    width: 240px;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    border-radius: 9999px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .button {
    outline: none;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f97316; /* orange-500 */
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .button:hover {
    background-color: #f97316; /* orange */
    color: white;
    transform: translateY(-3px);
  }

  .button.active {
    background-color: #f97316;
    color: white;
    transform: translateY(-3px);
  }

  .icon {
    font-size: 20px;
  }
`;

export default ButtonNav;
