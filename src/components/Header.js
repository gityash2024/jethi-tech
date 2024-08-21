import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import jethiTechLogo from '../assets/images/jethi-tech-solution.png';
import menuIcon from '../assets/images/menu-btn-3-lines.png';
import downArrow from '../assets/images/down-arrow.png';

const HeaderWrapper = styled.header`
  font-family: 'Poppins', sans-serif;
`;

const TopBar = styled.div`
  background-color: #015BCC;
  color: #FFFFFF;
  padding: 10px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TopBarLink = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600; /* SemiBold */
  margin-right: 20px;
  font-size: 14px;
  padding: 5px 10px;
  transition: all 0.3s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  // opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover, &.active {
    background-color: ${props => props.disabled ? 'transparent' : '#FFFFFF'};
    color: ${props => props.disabled ? '#FFFFFF' : '#015BCC'};
    border-radius: 2px;
  }

  &:last-child {
    margin-right: 0;
  }
`;


const MainNav = styled.nav`
  background-color: #FFFFFF;
  padding: 15px 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 15px;
  }
`;

const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFFFFF;
    padding: 20px;
    z-index: 100;
    justify-content: center;
  }
`;

const NavItem = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
      font-family: 'Poppins', sans-serif;
  font-weight: 500; /* Medium */
  font-size: 16px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const NavLink = styled(Link)`
  color: #434343;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    color: #015BCC;
  }

  &:after {
    content: '';
    display: inline-block;
    width: 22px;
    height: 22px;
    background-image: url(${downArrow});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #434343;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <HeaderWrapper>
      <TopBar>
        <TopBarContent>
        <TopBarLink href="/" className="active">JTS</TopBarLink>
<TopBarLink href="#" disabled>Soleventure</TopBarLink>
<TopBarLink href="#" disabled>Realtors</TopBarLink>
<TopBarLink href="#" disabled>Interiors</TopBarLink>
<TopBarLink href="#" disabled>Branding</TopBarLink>
<TopBarLink href="#" disabled>Tax & accounting</TopBarLink>
<TopBarLink href="#" disabled>Startup incubation</TopBarLink>

        </TopBarContent>
      </TopBar>
      <MainNav>
        <NavContent>
          {/* <Logo src={jethiTechLogo} alt="JETHI TECH SOLUTIONS Pvt. Ltd." /> */}
          <h1 style={{ fontFamily: 'Sofia, cursive' }}>Solminica</h1>
          <MenuButton onClick={toggleMenu}>
            MENU <MenuIcon src={menuIcon} alt="Menu" />
          </MenuButton>
          <NavMenu isOpen={isMenuOpen}>
            {isMenuOpen && <CloseButton onClick={closeMenu}>&times;</CloseButton>}
            <NavItem><NavLink to="/" onClick={closeMenu}>Home</NavLink></NavItem>
            <NavItem><NavLink to="/services" onClick={closeMenu}>Services</NavLink></NavItem>
            <NavItem><NavLink to="/technology" onClick={closeMenu}>Technology</NavLink></NavItem>
            <NavItem><NavLink to="/hire" onClick={closeMenu}>Hire</NavLink></NavItem>
            <NavItem><NavLink to="/solutions" onClick={closeMenu}>Solutions</NavLink></NavItem>
            <NavItem><NavLink to="/work" onClick={closeMenu}>Work</NavLink></NavItem>
          </NavMenu>
        </NavContent>
      </MainNav>
    </HeaderWrapper>
  );
};

export default Header;