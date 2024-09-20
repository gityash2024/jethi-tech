import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import menuIcon from '../assets/images/menu-btn-3-lines.png';
import downArrow from '../assets/images/down-arrow.png';
import servicesImage from '../assets/images/serviceCard.png';
import technologyImage from '../assets/images/technologyCard.png';
import hireImage from '../assets/images/HireSolutionsCard.png';
import solutionsImage from '../assets/images/HireSolutionsCard.png';
import cardBg from '../assets/images/cardBg.png';

import MenuCard from '../pages/MenuCard';
const HeaderWrapper = styled.header`
  font-family: 'Poppins';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #FFFFFF;
`;

const TopBar = styled.div`
  background-color: #015BCC;
  color: #FFFFFF;
  padding: 0;

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
  font-weight: 600;
  font-size: 14px;
  padding: 6px 10px;
  transition: all 0.3s;
  cursor: not-allowed !important;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  display: inline-block;


  &:last-child {
    margin-right: 0;
  }
`;
const TopBarLink2 = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 10px;
  transition: all 0.3s;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  display: inline-block;

  &:hover, &.active {
    background-color: ${props => props.disabled ? 'transparent' : '#FFFFFF'};
    color: ${props => props.disabled ? '#FFFFFF' : '#015BCC'};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const MainNav = styled.nav`
  background-color: #FFFFFF;
  padding: 5px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

const Logo = styled.h1`
  cursor: pointer;
  font-family: 'Sofia', cursive;
  font-size: 32px;
  color: #015BCC;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    background-color: #FFFFFF;
    transition: left 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 999;
    height: calc(100vh - 60px);
    overflow-y: auto;
  }
`;

const NavItem = styled.li`
  margin-right: 30px;
  font-weight: 500;
  font-size: 16px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  &:hover > ul {
    display: block;
  }

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

  &.active {
    color: #015BCC;
  }

  &:hover {
    color: #015BCC;
  }

  &:after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(${downArrow});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const NavLink3 = styled(Link)`
  color: #434343;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  cursor: not-allowed;

  &.active {
    color: #015BCC;
  }

  &:hover {
    color: #015BCC;
  }

  &:after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  // margin-top: 15px;

  top: 100%;
  left: 50%;
  transform: translateX(-40%);
  background-color: #F5F5F5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0px;
  z-index: 1000;
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  width: 100vw;
  max-width: 1100px;
  height: auto;
  color: #434343;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    width: 100%;
  }
`;

const DropdownMenuShifted = styled(DropdownMenu)`
  transform: translateX(-70%);

  @media (max-width: 768px) {
    transform: none;
  }
`;

const DropdownContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px;
  color: #434343;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1px;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const TechnologyContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1px;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const HireContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  background-color: #FFFFFF;
  border-radius: 15px;
  background-image: url(${cardBg});
  background-size: cover;
  background-position: right right;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardImage = styled.div`
  flex: 1;
  min-width: 30%;
  background-size: cover;
  background-position: center;
  margin: 20px;
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid #BDBDBD;

  @media (max-width: 768px) {
    margin: 10px;
    margin-top: 20px;
    min-width: 100%;
    height: 200px;
  }
`;

const CardContent = styled.div`
  flex: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const GridItem = styled.div`
  padding: 10px 20px;
  border-bottom: 1.3px solid #606060;
  border-right: 1.3px solid #606060;

  &:nth-child(3n) {
    border-right: none;
  }

  &:nth-last-child(-n+2) {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-right: none;
    border-bottom: 1.3px solid #606060;

    &:nth-child(3n) {
      border-right: none;
    }

    &:nth-last-child(-n+2) {
      border-bottom: 1.3px solid #606060;
    }
  }
`;

const GridItemh = styled.div`
  padding: 30px 20px;
  border-bottom: 1.3px solid #606060;
  border-left: 1.3px solid #606060;
  margin-bottom: 100px;
  margin-top: 30px;

  &:nth-child(3n) {
    border-right: none;
  }

  &:nth-last-child(-n+3) {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-left: none;
    margin-bottom: 20px;
    margin-top: 10px;

    &:nth-child(3n) {
      border-right: none;
    }

    &:nth-last-child(-n+3) {
      border-bottom: 1.3px solid #606060;
    }
  }
`;

const GridItems = styled.div`
  padding: 0px 10px;
  border-bottom: 1.3px solid #606060;
  border-right: 1.3px solid #606060;

  &:nth-child(4n) {
    border-right: none;
  }

  &:nth-last-child(-n+4) {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-right: none;
    border-bottom: 1.3px solid #606060;

    &:nth-child(4n) {
      border-right: none;
    }

    &:nth-last-child(-n+4) {
      border-bottom: 1.3px solid #606060;
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #000000;
  font-weight: 600;

   &:hover {
    color: #2F69B1;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ColumnItem = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  color: #434343;

  // &:hover {
  //   color: #2F69B1;
  // }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: 1px solid #0010F1;
  color: #434343;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const MenuContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > ul {
    display: block;
  }
`;

const MenuDropdown = styled.ul`
  display: none;
  position: absolute;
  // margin-top: 15px;
  top: 100%;
  left: -100px; /* Shifted towards the left to align it under the button */
  background-color: #F5F5F5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0px;
  z-index: 1000;
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  height: auto;
  color: #434343;
  transition: display 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 8px;
`;

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <HeaderWrapper>
      <TopBar>
        <TopBarContent>
          <TopBarLink2 href="/" className="active">JTS</TopBarLink2>
          <TopBarLink title='comming soon' >Soleventure</TopBarLink>
          <TopBarLink  title='comming soon'>Realtors</TopBarLink>
          <TopBarLink  title='comming soon' >Interiors</TopBarLink>
          <TopBarLink  title='comming soon'>Branding</TopBarLink>
          <TopBarLink   title='comming soon'>Tax & accounting</TopBarLink>
          <TopBarLink   title='comming soon'>Startup incubation</TopBarLink>
        </TopBarContent>
      </TopBar>
      <MainNav>
        <NavContent>
          <Logo onClick={() => handleMenuClick("/")}>Solminica</Logo>
          <NavMenu ref={menuRef} isOpen={isOpen}>
            <NavItem>
              <NavLink onClick={() => handleMenuClick('/services')} className={location.pathname === '/services' ? 'active' : ''}>Services</NavLink>
              <DropdownMenu>
                <Card>
                  <CardImage style={{ backgroundImage: `url(${servicesImage})` }} />
                  <CardContent>
                    <ServicesContent>
                      <GridItems>
                        <ColumnTitle>Team Extension</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Product Engineering</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Web Development</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Mobility Solutions</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Emerging Tech</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>Blockchain | AI/ML | Chatbot App | IoT | Data Analytics</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>E-commerce</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>Magento | Shopify | Opencart | Prestashop | WooCommerce | Drupal</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Cyber Security</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>Penetration Testing</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Cloud And DevOps</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Quality Analyst</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>UI/UX Design</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>Digital Marketing</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                      <GridItems>
                        <ColumnTitle>PR & Media</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                      </GridItems>
                    </ServicesContent>
                  </CardContent>
                </Card>
              </DropdownMenu>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleMenuClick('/technology')} className={location.pathname === '/technology' ? 'active' : ''}>Technology</NavLink>
              <DropdownMenuShifted>
                <Card>
                  <CardImage style={{ backgroundImage: `url(${technologyImage})` }} />
                  <CardContent>
                    <TechnologyContent>
                      <GridItem>
                        <ColumnTitle>Backend Technologies</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>Node.js | PHP | .Net | Python | Java</ColumnItem>
                      </GridItem>
                      <GridItem>
                        <ColumnTitle>Front-end Technologies</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>React.js | Angular | Vue.js | Next | HTML5 | TypeScript</ColumnItem>
                      </GridItem>
                      <GridItem>
                        <ColumnTitle>Mobile Technologies</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>Flutter | React Native | Swift | Kotlin | iOS | Android | Iconic | Xamarin</ColumnItem>
                      </GridItem>
                      <GridItem>
                        <ColumnTitle>Frameworks We Use</ColumnTitle>
                        <ColumnItem>Engineer your app to perfection with our state-of-the-art frameworks that deliver exceptional outcomes</ColumnItem>
                        <ColumnItem>MERN | MEAN | DotNet Core | DotNet MVC | Django | Flask | Spring | Codeignitor | WordPress | Hibernate | Magento</ColumnItem>
                      </GridItem>
                      <GridItem>
                        <ColumnTitle>Cloud Technologies</ColumnTitle>
                        <ColumnItem>Build high-performing architectures for the backend of your app</ColumnItem>
                        <ColumnItem>AWS | Azure | Google Cloud |IBM Watson | Alibaba | MyHostLord</ColumnItem>
                      </GridItem>
                    </TechnologyContent>
                  </CardContent>
                </Card>
              </DropdownMenuShifted>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleMenuClick('/hire')} className={location.pathname === '/hire' ? 'active' : ''}>Hire</NavLink>
              <DropdownMenuShifted>
                <Card>
                  <CardImage style={{ backgroundImage: `url(${hireImage})` }} />
                  <CardContent>
                    <HireContent>
                    <GridItemh>
                        <ColumnTitle>Trending</ColumnTitle>
                        <ColumnItem>Software Developers</ColumnItem>
                        <ColumnItem>Full Stack Developer</ColumnItem>
                        <ColumnItem>Mean stack Developer</ColumnItem>
                        <ColumnItem>MERN Stack Developer</ColumnItem>
                        <ColumnItem>Web Developers</ColumnItem>
                        <ColumnItem>Blockchain Developers</ColumnItem>
                        <ColumnItem>DevOps Engineers</ColumnItem>
                        <ColumnItem>Software tester</ColumnItem>
                        <ColumnItem>Service now Developers</ColumnItem>
                        <ColumnItem>UI UX Designers</ColumnItem>
                        <ColumnItem>AWS Developers</ColumnItem>
                        <ColumnItem>Open source Developers</ColumnItem>
                        <ColumnItem>SaaS Developers</ColumnItem>
                        <ColumnItem>Open Source Developers</ColumnItem>
                      </GridItemh>
                      <GridItemh>
                        <ColumnTitle>E-commerce Developers</ColumnTitle>
                        <ColumnItem>Wordpress Developer</ColumnItem>
                        <ColumnItem>Magento Developer</ColumnItem>
                        <ColumnTitle style={{ marginTop: '20px' }}>Frontend Developers</ColumnTitle>
                        <ColumnItem>AngularJS Developers</ColumnItem>
                        <ColumnItem>ReactJS Developer</ColumnItem>
                        <ColumnItem>VueJS Developer</ColumnItem>
                        <ColumnItem>JavaScript Developer</ColumnItem>
                        <ColumnItem>NextJS Developers</ColumnItem>
                        <ColumnItem>TypeScript Developers</ColumnItem>
                        <ColumnItem>ViteJS Developers</ColumnItem>
                        <ColumnItem>Tailwind CSS Developers</ColumnItem>
                        <ColumnItem>HTML5 Developers</ColumnItem>
                      </GridItemh>
                      <GridItemh>
                        <ColumnTitle>Backend Developers</ColumnTitle>
                        <ColumnItem>ASP.NET Developers</ColumnItem>
                        <ColumnItem>PHP Developer</ColumnItem>
                        <ColumnItem>Java Developer</ColumnItem>
                        <ColumnItem>Python Developer</ColumnItem>
                        <ColumnItem>NodeJS Developers</ColumnItem>
                        <ColumnItem>ExpressJS Developers</ColumnItem>
                        <ColumnItem>SpringBoot Developers</ColumnItem>
                        <ColumnItem>Django Developers</ColumnItem>
                        <ColumnItem>Ruby on Rails</ColumnItem>
                      </GridItemh>
                    </HireContent>
                  </CardContent>
                </Card>
              </DropdownMenuShifted>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleMenuClick('/solutions')} className={location.pathname === '/solutions' ? 'active' : ''}>Solutions</NavLink>
              <DropdownMenuShifted>
                <Card>
                  <CardImage style={{ backgroundImage: `url(${solutionsImage})` }} />
                  <CardContent>
                    <SolutionsContent>
                      <GridItemh>
                        <ColumnTitle>Food Delivery App like Zomato</ColumnTitle>
                        <ColumnItem>Photo Sharing App like Instagram</ColumnItem>
                        <ColumnItem>Video Sharing App Like Youtube</ColumnItem>
                        <ColumnItem>E-learning App like Coursera</ColumnItem>
                        <ColumnItem>Cost to Develop A chat App</ColumnItem>
                        <ColumnItem>Taxi App like Uber</ColumnItem>
                        <ColumnItem>E-Learning App like Byjus</ColumnItem>
                        <ColumnItem>E- Learning Appp like Udemy/Lynda</ColumnItem>
                        <ColumnItem>Healthcare App like Zocdoc</ColumnItem>
                        <ColumnItem>Sports Betting app like Bet365</ColumnItem>
                      </GridItemh>
                      <GridItemh>
                        <ColumnTitle>Video Streaming App Like Netflix</ColumnTitle>
                        <ColumnItem>Healthcare App Like Practo</ColumnItem>
                        <ColumnItem>Food Delivery App like UberEats</ColumnItem>
                        <ColumnItem>Sports Betting App Like Dream11</ColumnItem>
                        <ColumnItem>Grocery Delivery App like Dream11</ColumnItem>
                        <ColumnItem>Music Video App Like Tiktok</ColumnItem>
                        <ColumnItem>E-commerce App/ Website Like Amazon</ColumnItem>
                        <ColumnItem>Dating App Like Tinder</ColumnItem>
                        <ColumnItem>Cost to Make an App like Airbnb</ColumnItem>
                      </GridItemh>
                    </SolutionsContent>
                  </CardContent>
                </Card>
              </DropdownMenuShifted>
            </NavItem>
            <NavItem>
              <NavLink3 title='comming soon' >Work</NavLink3>
            </NavItem>
            <MenuContainer ref={menuRef}>
            <MenuButton onClick={toggleMenu}>
              MENU <MenuIcon src={menuIcon} alt="Menu" />
            </MenuButton>
            <MenuDropdown>
                  <MenuCard /> {/* Display your MenuCard component here */}
            </MenuDropdown>
          </MenuContainer>
          </NavMenu>
        </NavContent>
      </MainNav>
    </HeaderWrapper>
  );
};

export default Header;
