import React, { useState } from "react";
import styled, {keyframes} from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {useSelector} from "react-redux";
import { selectCars } from "../features/car/carSlice";

const Header = () => {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return(
    <Container>
      <a>
        <img src='/images/logo.svg' />
      </a>
      <Menu>
        {cars && cars.map((car, index) => (
          <a key={index} href='#'>{car}</a>
        ))}
      </Menu>
      <RightMenu>
        <a href='#'>shop</a>
        <a href='#'>tesla account</a>
        <CustomMenu onClick={() => {setBurgerStatus(true)}}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <ClosedWrapper>
          <CustomClose onClick={() => {setBurgerStatus(false)}} />
        </ClosedWrapper>
          {cars && cars.map((car, index) => (
            <li key={index}><a key={index} href='#'>{car}</a></li>
          ))}
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-in</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadster</a></li>
      </BurgerNav>
      {
        burgerStatus && (
          <DarkMode onClick={() => {setBurgerStatus(false)}} />
        )
      }
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`

const ClosedWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const DarkMode = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.2s;
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
`
