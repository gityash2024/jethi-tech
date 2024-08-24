import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zomato_app from '../assets/images/zomato_app.png';
import trusted_partner_4 from '../assets/images/trusted_partner_4.png';
import trusted_partner_2 from '../assets/images/trusted_partner_2.png';
import trusted_partner_1 from '../assets/images/trusted_partner_1.png';
import solmica from '../assets/images/solmica.png';
import merion from '../assets/images/merion.png';
import nete from '../assets/images/nete.png';
import delivery_app from '../assets/images/delivery_app.png';
import modul from '../assets/images/modul.png';
import market from '../assets/images/market.png';
import swiggy from '../assets/images/swiggy.png';
import zomato from '../assets/images/zomato.png';
import uber from '../assets/images/uber.png';
import foodpanda from '../assets/images/foodpanda.png';
import finding_image from '../assets/images/finding_image.png';
import flut from '../assets/images/flut.png';
import food from '../assets/images/food.png';
import volumes from '../assets/images/volumes.png';
import bigwigs from '../assets/images/bigwigs.png';
import work_on from '../assets/images/work_on.png';
import cost_build from '../assets/images/cost_build.png';
import ubuntu from '../assets/images/ubuntu.png';
import react from '../assets/images/react.png';
import php from '../assets/images/php.png';
import mysql from '../assets/images/mysql.png';
import mongo from '../assets/images/mongo.png';
import node from '../assets/images/node.png';
import delivery from '../assets/images/delivery.png';
import commision from '../assets/images/commision.png';
import peakup from '../assets/images/peakup.png';
import sound from '../assets/images/sound.png';
import Customers from '../assets/images/Customers.png';
import blogs from '../assets/images/blogs.png';
import negative from '../assets/images/negative.png';
import positive from '../assets/images/positive.png';

const PageWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const Section = styled.section`
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CostSection = styled(Section)``;

const CostContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CostText = styled.div`
  flex: 1;
  padding-right: 40px;
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const CostImage = styled.img`
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FeaturesSection = styled(Section)``;

const FeatureTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;
`;

const TableHeader = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const MoneyMakingSection = styled(Section)``;

const MoneyMakingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MoneyMakingItem = styled.div`
  display: flex;
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
  align-items: flex-start;
`;

const MoneyMakingIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const MoneyMakingContent = styled.div``;

const MoneyMakingTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MoneyMakingDescription = styled.p`
  font-size: 16px;
`;

const TestimonialSection = styled(Section)`
  text-align: center;
`;

const TestimonialCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TestimonialDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? '#0066CC' : '#ccc')};
  border-radius: 50%;
  margin: 0 5px;
`;

const FAQSection = styled(Section)``;

const FAQContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FAQContent = styled.div`
  flex: 1;
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;

const FAQToggle = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const FAQAnswer = styled.p`
  margin-top: 10px;
  padding-left: 34px;
  font-size: 16px;
  line-height: 1.5;
`;

const FAQImage = styled.img`
  width: 40%;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  span {
    color: #0066CC;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 42%;
  margin-left: 70px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

const PopularAppsSection = styled(Section)`
  text-align: center;
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 80px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const WhyChooseSection = styled(Section)`
  background-color: #f8f8f8;
`;

const WhyChooseContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WhyChooseText = styled.div`
  flex: 1;
  padding-right: 40px;
  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const WhyChooseImage = styled.img`
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ModulesSection = styled(Section)`
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background-color: ${(props) => (props.active ? '#0066CC' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  border: 1px solid #0066CC;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  padding: 16px 20px;
  cursor: pointer;
  margin: 5px;
`;

const ModuleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ModuleText = styled.div`
  flex: 1;
  text-align: left;
  padding-right: ${(props) => (props.reverse ? '0' : '40px')};
  padding-left: ${(props) => (props.reverse ? '40px' : '0')};
  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 20px;
  }
`;

const ModuleImage = styled.img`
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StatisticsSection = styled(Section)`
  background-color: #f8f8f8;
  text-align: center;
`;

const StatGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StatItem = styled.div``;

const StatValue = styled.h3`
  font-size: 36px;
  color: #434343;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 16px;
`;

const MarketShareSection = styled(Section)``;

const MarketShareContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MarketShareText = styled.div`
  flex: 1;
  padding-left: 40px;
  @media (max-width: 768px) {
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const MarketShareImage = styled.img`
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ExistingPlayersSection = styled(Section)`
  background-color: #f8f8f8;
`;

const PlayerGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const PlayerItem = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlayerLogo = styled.img`
  height: 150px;
  margin-bottom: 15px;
`;

const TechIcon = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const TechStackSection = styled(Section)`
  padding: 40px 0;
`;

const TechGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TechColumn = styled.div`
  flex: ${(props) => props.width || 1};
`;

const TechItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #e0e0e0;
`;

const TechLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const TechName = styled.span`
  font-size: 16px;
`;

const ExpertiseList = styled.ul`
  list-style-type: none;
  padding: 0;
  border-left: 3px solid #202020;
  width: 100%;
  margin-right: 40px;
`;

const ExpertiseItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? '#ffffff' : '#333')};
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
  background: ${(props) =>
    props.active
      ? 'linear-gradient(to right, #366DFA 0%, #53A4FF 100%)'
      : 'transparent'};
  padding: 10px 15px;
  width: 70%;
  text-align: left;
`;

const CustomerTestimonial = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialImage = styled.img`
  width: 20%;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TestimonialContent = styled.div`
  flex: 1;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;

const TestimonialPosition = styled.p`
  font-size: 14px;
  color: #666;
`;

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('User side');
  const [activeTech, setActiveTech] = useState('Backend Development');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <PageWrapper>
      <Container>
        <HeroSection data-aos="fade-up">
          <HeroContent>
            <Title>Are you looking to build a food delivery app like <span>Zomato?</span></Title>
            <Input type="text" placeholder="Your contact number" />
            <Select>
              <option>I want to develop an app like</option>
              <option>Zomato</option>
            </Select>
            <Button>Get Quote</Button>
          </HeroContent>
          <HeroImage src={zomato_app} alt="Zomato-like App" />
        </HeroSection>
      </Container>

      <PopularAppsSection data-aos="fade-up">
        <Container>
          <Title>Popular Food Delivery Apps Built By Solminica. <span>Your Idea Can Be Next!</span></Title>
          <LogoGrid>
            <Logo src={trusted_partner_4} alt="Trusted Partner 1" />
            <Logo src={trusted_partner_2} alt="Trusted Partner 2" />
            <Logo src={trusted_partner_1} alt="Trusted Partner 3" />
            <Logo src={solmica} alt="Solmica" />
            <Logo src={merion} alt="Merion" />
            <Logo src={nete} alt="Nete" />
          </LogoGrid>
        </Container>
      </PopularAppsSection>

      <WhyChooseSection data-aos="fade-up">
        <Container>
          <WhyChooseContent>
            <WhyChooseText>
              <Title>Why Should You Choose Solminica For An On-demand Food Delivery App Like Zomato?</Title>
              <Subtitle>Hunger is never going to end and similar is the case with the business of food...</Subtitle>
              <Subtitle>The team of Solminica has the expertise and relevant experience in delivering such food apps...</Subtitle>
              <Button>Consult Now</Button>
            </WhyChooseText>
            <WhyChooseImage src={delivery_app} alt="Food Delivery App" />
          </WhyChooseContent>
        </Container>
      </WhyChooseSection>

      <ModulesSection data-aos="fade-up">
        <Container>
          <Title>Modules for Food Delivery App like Zomato</Title>
          <TabContainer>
            <Tab active={activeTab === 'User side'} onClick={() => setActiveTab('User side')}>User side</Tab>
            <Tab active={activeTab === 'Business owner'} onClick={() => setActiveTab('Business owner')}>Business owner</Tab>
            <Tab active={activeTab === 'Delivery Driver'} onClick={() => setActiveTab('Delivery Driver')}>Delivery Driver</Tab>
            <Tab active={activeTab === 'Effective Administration'} onClick={() => setActiveTab('Effective Administration')}>Effective Administration</Tab>
          </TabContainer>
          <ModuleContent reverse={activeTab === 'Business owner'}>
            <ModuleText reverse={activeTab === 'Business owner'}>
              <Subtitle>
                {activeTab === 'User side' && "Your app should be user-oriented with smooth and rich experience..."}

                {activeTab === 'Business owner' && "The app allows the business's owners to register and create profile..."}

                {activeTab === 'Delivery Driver' && "The delivery driver module provides an intuitive interface for drivers..."}

                {activeTab === 'Effective Administration' && "The administration module offers powerful tools for managing the entire food delivery ecosystem..."}
              </Subtitle>
            </ModuleText>
            <ModuleImage src={modul} alt={`${activeTab} module`} />
          </ModuleContent>
        </Container>
      </ModulesSection>

      <StatisticsSection data-aos="fade-up">
        <Container>
          <Title>Some Statistics To Prove Demand For An App Like Zomato</Title>
          <Subtitle>Solminica delivers unparalleled value for money by offering top-quality, innovative technology solutions...</Subtitle>
          <StatGrid>
            <StatItem>
              <StatValue>$266.05 bn</StatValue>
              <StatLabel>Global Online On-Demand Food Delivery Services Market</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>53.9M Users</StatValue>
              <StatLabel>Rise in Food Delivery App Users Predicted</StatLabel>
            </StatItem>
            <StatItem>
            <StatValue>$231.30 bn</StatValue>
              <StatLabel>Expanding Revenue of the Food Delivery Market Revenue</StatLabel>
            </StatItem>
          </StatGrid>
          <hr style={{margin: '40px 0', border: 'none', borderTop: '1px solid #ddd'}} />
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            Lorem ipsum dolor sit amet...
            <Button>Consult Now!</Button>
          </div>
        </Container>
      </StatisticsSection>

      <MarketShareSection data-aos="fade-up">
        <Container>
          <Title>Market Share</Title>
          <MarketShareContent>
            <MarketShareImage src={market} alt="Market Share" />
            <MarketShareText>
              <Subtitle>Your app should be user-oriented with smooth and rich experience...</Subtitle>
            </MarketShareText>
          </MarketShareContent>
        </Container>
      </MarketShareSection>

      <ExistingPlayersSection data-aos="fade-up">
        <Container>
          <Title>Where Do The Existing Players Stand?</Title>
          <Subtitle>Solminica delivers unparalleled value for money by offering top-quality...</Subtitle>
          <PlayerGrid>
            <PlayerItem>
              <PlayerLogo src={swiggy} alt="Swiggy" />
            </PlayerItem>
            <PlayerItem>
              <PlayerLogo src={zomato} alt="Zomato" />
            </PlayerItem>
            <PlayerItem>
              <PlayerLogo src={uber} alt="UberEats" />
            </PlayerItem>
            <PlayerItem>
              <PlayerLogo src={foodpanda} alt="Foodpanda" />
            </PlayerItem>
          </PlayerGrid>
        </Container>
      </ExistingPlayersSection>

      <TechStackSection data-aos="fade-up">
        <Container>
          <Title>Technology Stack Behind Our Food Delivery App Development</Title>
          <TechGrid>
            <TechColumn>
              <ExpertiseList>
                {['Backend Development', 'Frontend Development', 'Mobile Development', 'Database', 'DevOps'].map((item) => (
                  <ExpertiseItem 
                    key={item} 
                    active={activeTech === item}
                    onClick={() => setActiveTech(item)}
                  >
                    {item}
                  </ExpertiseItem>
                ))}
              </ExpertiseList>
            </TechColumn>
            <TechColumn>
              <TechItemsContainer>
                <TechItem>
                  <TechLogo src={ubuntu} alt="Ubuntu" />
                  <TechName>Ubuntu</TechName>
                </TechItem>
                <TechItem>
                  <TechLogo src={react} alt="React JS" />
                  <TechName>React JS</TechName>
                </TechItem>
                <TechItem>
                  <TechLogo src={php} alt="PHP" />
                  <TechName>PHP</TechName>
                </TechItem>
              </TechItemsContainer>
            </TechColumn>
            <TechColumn>
              <TechItemsContainer>
                <TechItem>
                  <TechLogo src={mysql} alt="My SQL" />
                  <TechName>My SQL</TechName>
                </TechItem>
                <TechItem>
                  <TechLogo src={mongo} alt="Mongo DB" />
                  <TechName>Mongo DB</TechName>
                </TechItem>
                <TechItem>
                  <TechLogo src={node} alt="Node js" />
                  <TechName>Node js</TechName>
                </TechItem>
              </TechItemsContainer>
            </TechColumn>
          </TechGrid>
        </Container>
      </TechStackSection>

      <CostSection data-aos="fade-up">
        <Container>
          <Title>How much does it cost to build an app like Zomato?</Title>
          <CostContent>
            <CostText>
              <Subtitle>
                The cost of developing an app depends majorly upon four components...
              </Subtitle>
            </CostText>
            <CostImage src={cost_build} alt="Cost to build" />
          </CostContent>
        </Container>
      </CostSection>

      <FeaturesSection data-aos="fade-up">
        <Container>
          <Title>Features to Make an App like <span>Zomato?</span></Title>
          <FeatureTable>
            <thead>
              <tr>
                <TableHeader>Deliverables</TableHeader>
                <TableHeader>Feature</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell rowSpan="5">System Architecture and Database Design</TableCell>
                <TableCell>Logo Design</TableCell>
              </tr>
              <tr><TableCell>Application Graphic Design</TableCell></tr>
              <tr><TableCell>Application Invision Prototype</TableCell></tr>
              <tr><TableCell>1 Page Website Design</TableCell></tr>
              <tr><TableCell>System Architecture and Database Design</TableCell></tr>
              <tr>
                <TableCell rowSpan="13">Web Admin</TableCell>
                <TableCell>Category Management</TableCell>
              </tr>
              <tr><TableCell>Admin Management</TableCell></tr>
              <tr><TableCell>Customer Management</TableCell></tr>
              <tr><TableCell>Business Owner Management</TableCell></tr>
              <tr><TableCell>Delivery boys Management</TableCell></tr>
              <tr><TableCell>Payment Integration</TableCell></tr>
              <tr><TableCell>Commission Management</TableCell></tr>
              <tr><TableCell>Order Management</TableCell></tr>
              <tr><TableCell>Promo Code Management</TableCell></tr>
              <tr><TableCell>Contact Us Management</TableCell></tr>
              <tr><TableCell>Email Templates Management</TableCell></tr>
              <tr><TableCell>Site Configurations & Settings</TableCell></tr>
              <tr><TableCell>CMS Management</TableCell></tr>
              <tr>
                <TableCell rowSpan="7">Web - Restaurant Portal</TableCell>
                <TableCell>Sign Up - Business Owner</TableCell>
              </tr>
              <tr><TableCell>Business Owner - After Approval</TableCell></tr>
              <tr><TableCell>Select Category - Add Food Item - Short Description - Add price</TableCell></tr>
              <tr><TableCell>Order Management</TableCell></tr>
              <tr><TableCell>Contact Us</TableCell></tr>
              <tr><TableCell>Statistics</TableCell></tr>
              <tr><TableCell>Logout</TableCell></tr>
              <tr>
                <TableCell rowSpan="15">Android / iOS App - User</TableCell>
                <TableCell>Application Design Integration</TableCell>
              </tr>
              <tr><TableCell>Splash Screen</TableCell></tr>
              <tr><TableCell>Registration</TableCell></tr>
              <tr><TableCell>Login</TableCell></tr>
              <tr><TableCell>My Profile</TableCell></tr>
              <tr><TableCell>Forgot Password</TableCell></tr>
              <tr><TableCell>Fetch Current Location</TableCell></tr>
              <tr><TableCell>Home Screen Integration</TableCell></tr>
              <tr><TableCell>Search/Filter option</TableCell></tr>
              <tr><TableCell>Restaurant Detail Screen</TableCell></tr>
              <tr><TableCell>Cart Page</TableCell></tr>
              <tr><TableCell>Checkout</TableCell></tr>
              <tr><TableCell>Notifications</TableCell></tr>
              <tr><TableCell>Contact Us Integration</TableCell></tr>
              <tr><TableCell>My Account</TableCell></tr>
              <tr>
                <TableCell rowSpan="11">Android / iOS App - Delivery Boy</TableCell>
                <TableCell>Splash Screen</TableCell>
              </tr>
              <tr><TableCell>Login</TableCell></tr>
              <tr><TableCell>My Profile</TableCell></tr>
              <tr><TableCell>Forgot Password</TableCell></tr>
              <tr><TableCell>Current Orders</TableCell></tr>
              <tr><TableCell>Pickup and Drop-off point for each order</TableCell></tr>
              <tr><TableCell>Update order status</TableCell></tr>
              <tr><TableCell>Notifications</TableCell></tr>
              <tr><TableCell>My Account</TableCell></tr>
              <tr><TableCell>Logout</TableCell></tr>
            </tbody>
          </FeatureTable>
          <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
            <Button>Get your Quote</Button>
          </div>
        </Container>
      </FeaturesSection>

      <MoneyMakingSection data-aos="fade-up">
        <Container>
          <Title>How to <span>Make Money</span> in the Food-Delivery Business?</Title>
          <Subtitle>Solminica creates enterprise solutions that seamlessly blend traditional methods...</Subtitle>
          <MoneyMakingGrid>
            <MoneyMakingItem>
              <MoneyMakingIcon src={delivery} alt="Delivery charges" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Delivery charges</MoneyMakingTitle>
                <MoneyMakingDescription>A food delivery app can take care of the timely delivery for a fee...</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={commision} alt="Commission from food joints" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Commission from food joints</MoneyMakingTitle>
                <MoneyMakingDescription>Based on the order size the online food delivery apps can collaborate with restaurants on predefined commission charges...</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={peakup} alt="Peak hours" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Peak hours</MoneyMakingTitle>
                <MoneyMakingDescription>This monetizing technique of charging extra during peak hours can help you to generate extra revenue...</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={sound} alt="Advertising" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Advertising</MoneyMakingTitle>
                <MoneyMakingDescription>Advertising can give an awesome boost to your business...</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
          </MoneyMakingGrid>
        </Container>
      </MoneyMakingSection>

      <Section data-aos="fade-up">
        <Container>
          <Title>Our Customers love what we do</Title>
          <Subtitle>
            Our customers are at the center of everything we do, and we're passionate about delivering exceptional solutions...
          </Subtitle>
          <CustomerTestimonial>
            <TestimonialImage src={Customers} alt="Customer Testimonial" />
            <TestimonialContent>
              <TestimonialText>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit..."
              </TestimonialText>
              <TestimonialAuthor>Mark Rise</TestimonialAuthor>
              <TestimonialPosition>CEO, Founder</TestimonialPosition>
            </TestimonialContent>
          </CustomerTestimonial>
        </Container>
      </Section>

      <FAQSection data-aos="fade-up">
        <Container>
          <Title>FAQ</Title>
          <FAQContainer>
            <FAQContent>
              <FAQItem>
                <FAQQuestion>
                  <FAQToggle src={negative} alt="Expand" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </FAQQuestion>
                <FAQAnswer>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </FAQAnswer>
              </FAQItem>
              <FAQItem>
                <FAQQuestion>
                  <FAQToggle src={positive} alt="Collapse" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </FAQQuestion>
              </FAQItem>
              <FAQItem>
                <FAQQuestion>
                  <FAQToggle src={positive} alt="Collapse" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </FAQQuestion>
              </FAQItem>
              <Button>View all</Button>
            </FAQContent>
            <FAQImage src={blogs} alt="FAQ Illustration" />
          </FAQContainer>
        </Container>
      </FAQSection>
    </PageWrapper>
  );
};

export default Solutions;
