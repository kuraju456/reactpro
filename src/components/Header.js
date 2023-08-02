import React, { useState } from 'react';
import styled from 'styled-components';

// RevealBase component to reveal hidden content
const RevealBase = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleToggle = () => {
    setIsRevealed(prevState => !prevState);
  };

  return (
    <Container>
      <TriggerButton onClick={handleToggle}>Click to Reveal</TriggerButton>
      {isRevealed && (
        <RevealedContent>
          <ul>
            <li><a href="#">Exiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Artificial Intelligence</a></li>
            <li><a href="#">E Inventory</a></li>
            <li><a href="#">Rajukumar @2023</a></li>
          </ul>
        </RevealedContent>
      )}
    </Container>
  );
};

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const handleBurgerClick = () => {
    setBurgerStatus(!burgerStatus);
  };

  const handleCloseClick = () => {
    setBurgerStatus(false); // Set burgerStatus to false to close the menu
  };

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <div>
          <a href="#">Model S</a>
        </div>
        <div>
          <a href="#">Model 3</a>
        </div>
        <div>
          <a href="#">Model X</a>
        </div>
        <div>
          <a href="#">Model Y</a>
        </div>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        {/* Update: Use handleBurgerClick for the CustomMenu onClick */}
        <CustomMenu onClick={handleBurgerClick} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          {/* Update: Use handleCloseClick for the CustomClose onClick */}
          <CustomClose onClick={handleCloseClick} />
        </CloseWrapper>
        {/* Example usage of the RevealBase component */}
        <RevealBase />
      </BurgerNav>
    </Container>
  );
};

export default Header;

// Rest of the styled components remain unchanged.
const Container = styled.div`
  min-height: 55px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  cursor: pointer;
  /* Style your custom burger menu here, e.g., with three horizontal lines for a burger icon */
  width: 30px;
  height: 2px;
  background-color: #333;
  &:before, &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #333;
  }
  &:before {
    top: -8px;
  }
  &:after {
    bottom: -8px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${props => (props.show ? '0' : '-300px')}; /* Use display: none and display: block */
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  transition: right 0.3s ease; /* Use a transition for sliding animation */
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled.div`
  cursor: pointer;
  /* Style your custom close icon here, e.g., with an X mark */
  width: 24px;
  height: 24px;
  position: relative;
  &::before, &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: #333;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RevealedContent = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #333;
`;

const TriggerButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
   margin: 60px; 
  right: ${props => (props.isMoving ? '20px' : '100px')};
  top: 50%;
  transform: translateY(-50%);
  transition: right 0.2s ease;
  float: right;
  float: left;
 border-radius:12px;
`;

// Rest of the styled components remain unchanged.
