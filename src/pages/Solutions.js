import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zomato_app from '../assets/images/zomato_app.png';
import trusted_partner_4 from '../assets/images/trusted_partner_4.svg';
import trusted_partner_2 from '../assets/images/trusted_partner_2.svg';
import trusted_partner_1 from '../assets/images/trusted_partner_1.svg';
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
import finding_image from '../assets/images/finding_image.svg';
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
import challange1 from '../assets/images/challange1.png';
import challange2 from '../assets/images/challange2.png';
import challange3 from '../assets/images/challange3.png';
import challange4 from '../assets/images/challange4.png';
import challange5 from '../assets/images/challange5.png';


const PageWrapper = styled.div`
  font-family: 'Poppins';
  color: #434343;
`;

const Section = styled.section`
  padding: 25px 0;
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
  background-color: #ffffff;
   box-shadow: 
    7px 0px 9px 0px rgba(190, 190, 190, 0.25),
    0px 4px 5px 0px rgba(190, 190, 190, 0.25);

  padding: 30px;
  border-radius: 8px;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  background-color: #ffffff;
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
  font-size: 38px;
  margin-bottom: 20px;
  font-family:'poppins';
  font-weight: 700;
    line-height: 45.5px;
    text-align: center;
  span {
    color: #0066CC;
  }
`;
const Title22 = styled.h1`
  font-size: 38px;
  margin-bottom: 20px;
  font-family:'poppins';
  font-weight: 700;
    line-height: 55.5px;
  span {
    color: #0066CC;
  }
`;
const Title223 = styled.h1`
  font-size: 38px;
  margin-bottom: 20px;
  font-family:'poppins';
  font-weight: 700;
  text-align:center;
    line-height: 55.5px;
  span {
    color: #0066CC;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
`;
const Subtitle22 = styled.p`
  font-size: 18px;
  align-items: center;
  text-align: center;
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
  background-color: #ffffff;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;
const HeroContentCard = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 10px;
   box-shadow: 
    7px 0px 9px 0px rgba(190, 190, 190, 0.25),
    0px 4px 5px 0px rgba(190, 190, 190, 0.25);

  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 35%;
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
  @media (max-width: 768px) {
  width: 90%;
  }
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
    display: flow;
  }
`;

const Logo = styled.img`
  height: 110px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const WhyChooseSection = styled(Section)`
  // background-color: #ffffff;
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
  max-width: 15%;
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
  background: ${(props) => (props.active ? 'linear-gradient(to right, #0072FF 0%, #2F69B1 100%)' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#434343')};
  border: 1px solid #0066CC;
  border-radius:5px;
  font-family: 'Poppins';
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
  // background-color: #ffffff;
  text-align: center;
`;

const StatGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 40px;
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
  border-bottom: 2px solid #434343;
  margin: 20px;
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
  background-color: #ffffff;
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
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  margin-right: 80px;
  border-bottom: 2px solid #434343;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
     margin-right: 0px; 
    border-bottom: 2px solid #434343;
  }
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
  @media (max-width: 768px) {
  padding: 20px;
}
`;

const ExperienceSection = styled(Section)`
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  padding: 20px;
  margin: 0;
`;
const ExpertiseItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => (props.active ? '#ffffff' : '#434343')};
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
  background: ${(props) =>
    props.active
      ? 'linear-gradient(to right, #0072FF 0%, #2F69B1 100%)' : 'transparent'};
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
            <Title22>Are you looking to build a food delivery app like <span>Zomato?</span></Title22>
            <HeroContentCard>

            <Input type="text" placeholder="Your contact number" />
            <Select>
              <option>I want to develop an app like</option>
              <option>Zomato</option>
            </Select>
            <Button>Get Quote</Button>
            </HeroContentCard>
          </HeroContent>
          <HeroImage src={zomato_app} alt="Zomato-like App" />
        </HeroSection>
      </Container>

      <PopularAppsSection data-aos="fade-up">
        <Container>
          <Title22>Popular Food Delivery Apps Built By Solminica. <span><br />Your Idea Can Be Next!</span></Title22>
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
              <Title22>Why Should You Choose<span> Solminica</span>  For An On-demand <span>Food Delivery App </span>Like Zomato?</Title22>
              <Subtitle>Hunger is never going to end and similar is the case with the business of food. This is the reason, why food delivery apps like Zomato, UberEats, etc. have gained much popularity recently. You can be the next in the list of top entrepreneurs in the Food delivery sector. All you need is a holistic app which can meet every aspect of your business.
              The team of Solminica has the expertise and relevant experience in delivering such food apps for startups and companies. By choosing us you can be sure of the final quality of your app that can find its place in the heart of your customers. With the help of latest tools and technologies, we can assure you to deliver the best possible solutions for your business.</Subtitle>
              <Button>Consult Now</Button>
            </WhyChooseText>
            <WhyChooseImage src={delivery_app} alt="Food Delivery App" />
          </WhyChooseContent>
        </Container>
      </WhyChooseSection>
      <WhyChooseSection data-aos="fade-up">
        <Container>
              <Title223>Why should you<span> invest in a food delivery app</span>  like Zomato?</Title223>
              <Subtitle>With the advent of the new digital era, gone are the days where visiting restaurants was the path abided by people to satisfy their hunger. The eatery business is expanding like never before, restaurants are coming up every day and customers are finding more convenient ways to satisfy their hunger. This has elevated the need for restaurant finder apps. It is high time that you leverage this need for the benefit of your business.
              The restaurant finder apps are having a three-fold benefit- to the restaurant owner, delivery staff, and customers. If managed efficiently, these three together will server to multiply your business and bring it to the list of top food apps like Zomato and UberEats. An on-demand food delivery app can help you to expand in a wide range and fulfill diverse desires to attract your customers. Before you begin building one, some key points need to be focused including the time and cost of the app, for gaining valuable insights into the process of creation, management, and value of such an app.</Subtitle>
            
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
                {activeTab === 'User side' && "Your app should be user-oriented with smooth and rich experience. With the team of WebClues Infotech, you can embed rich features and functionalities in your app. From searching the nearby restaurants to real-time tracking of the food and delivery driver, the app will take every minute detail into focus. Users can easily place their order and customize and save their searches. Customers are provided with multiple payment gateway options as per their convenience. Reviews and feedback can be given quickly and easily. Also, with few clicks, your customers get an idea of the tables available to book."}

                {activeTab === 'Business owner' && "The app allows the business’s owners to register and create profile including information like restaurant address, list of menu with price, offers, discounts, and contact details. The owner has all the status (dispatched, schedule, pickups etc.) of the orders to view with the simple touch on the screen and manage orders systematically. He can create and update the menu along with adding all details like items, price, special dishes, etc. The app gives the owner a chance to attract more customers by offering special discounts and offers. Through push notifications the management side can be updated regarding the status of orders, the payment received, and feedback."}

                {activeTab === 'Delivery Driver' && "The app allows the business’s owners to register and create profile including information like restaurant address, list of menu with price, offers, discounts, and contact details. The owner has all the status (dispatched, schedule, pickups etc.) of the orders to view with the simple touch on the screen and manage orders systematically. He can create and update the menu along with adding all details like items, price, special dishes, etc. The app gives the owner a chance to attract more customers by offering special discounts and offers. Through push notifications the management side can be updated regarding the status of orders, the payment received, and feedback."}

                {activeTab === 'Effective Administration' && "The app allows the business’s owners to register and create profile including information like restaurant address, list of menu with price, offers, discounts, and contact details. The owner has all the status (dispatched, schedule, pickups etc.) of the orders to view with the simple touch on the screen and manage orders systematically. He can create and update the menu along with adding all details like items, price, special dishes, etc. The app gives the owner a chance to attract more customers by offering special discounts and offers. Through push notifications the management side can be updated regarding the status of orders, the payment received, and feedback."}
              </Subtitle>
            </ModuleText>
            <ModuleImage src={modul} alt={`${activeTab} module`} />
          </ModuleContent>
        </Container>
      </ModulesSection>

      <StatisticsSection data-aos="fade-up">
        <Container>
          <Title>Some<span> Statistics</span>  To Prove <span>Demand</span> For An App Like Zomato</Title>
          <Subtitle>Solminica delivers unparalleled value for money by offering top-quality, innovative technology<br/> solutions at competitive prices. </Subtitle>
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
          {/* <hr style={{margin: '40px 0', border: 'none', borderTop: '1px solid #ddd'}} /> */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',fontFamily: 'Poppins', fontSize: '18px', fontWeight: '600', lineHeight: '27px', color: '#000'}}>
          Our expertise in  designing and building digital  solutions authorises us to develop bespoke solutions
            <Button>Consult Now!</Button>
          </div>
        </Container>
      </StatisticsSection>

      <MarketShareSection data-aos="fade-up">
        <Container>
          <Title><span>Market</span> Share</Title>
          <MarketShareContent>
            <MarketShareImage src={market} alt="Market Share" />
            <MarketShareText>
              <Subtitle>Your app should be user-oriented with smooth and rich experience. With the team of WebClues Infotech, you can embed rich features and functionalities in your app. From searching the nearby restaurants to real-time tracking of the food and delivery driver, the app will take every minute detail into focus. Users can easily place their order and customize and save their searches. Customers are provided with multiple payment gateway options as per their convenience. Reviews and feedback can be given quickly and easily. Also, with few clicks, your customers get an idea of the tables available to book.</Subtitle>
            </MarketShareText>
          </MarketShareContent>
        </Container>
      </MarketShareSection>

      <ExistingPlayersSection data-aos="fade-up">
        <Container>
          <Title>Where Do The<span> Existing Players </span>  Stand?</Title>
          
          <Subtitle22>Solminica delivers unparalleled value for money by offering top-quality, innovative technology <br/>solutions at competitive prices. </Subtitle22>
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
      <MoneyMakingSection data-aos="fade-up">
        <Container>
          <Title22><span>Challenges</span> In Entering The <span> Mobilized</span>  Food-delivery Market</Title22>
          <Subtitle22>In order to beat or even come at par with players like Zomato, UberEats, Swiggy, etc. who have already <br/> make an indelible impression for themselves in the market, there are many challenges that have to be <br/> overcome. With a shrewd strategy and right team, this is not so difficult. Let’s have a look at some of <br/> these challenges that should not loose our focus.</Subtitle22>
          <MoneyMakingGrid>
            <MoneyMakingItem>
              <MoneyMakingIcon src={challange1} alt="Delivery charges" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Wavering Customer Loyalty</MoneyMakingTitle>
                <MoneyMakingDescription>Customers are an asset to business but in the mobilized food-delivery market, customer loyalty is continuously deteriorating. You cannot be sure whether a customer will stick to a restaurant’s service if he finds it good in the first place. Later on, if another comes with better offers or unique ways to lure the customer he may eventually shift. For customers the more they get the merrier. Thus, fidelity in a customer is a common and challenging issue.</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={challange2} alt="Commission from food joints" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Inconsistent Food Quality</MoneyMakingTitle>
                <MoneyMakingDescription>The neck-to-neck competition in the food delivery market has made it really difficult to follow a specific pricing model continuously. The customer will always prefer an option that can serve him the best in the cheapest way. Now small business also can’t keep reducing their prices just to please the customer as this can lead them to run out of their business. Coping up with the fluctuating pricing models is another challenge to be faced.</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={challange3} alt="Peak hours" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Peak hours</MoneyMakingTitle>
                <MoneyMakingDescription>Will you prefer a hot and tasty meal right from the kitchen or rather a cold one delivered in a box? Obviously the first one, right! This is what happens with the delivered food. No matter how good may be the packing, your Pizza won’t taste the same. The quality of delivery is similar for the customers as the quality of food. Thus there are chances that this may reduce your customer-base.</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={challange4} alt="Advertising" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Inefficiency To Cope With Volumes</MoneyMakingTitle>
                <MoneyMakingDescription>Too much of orders and demand is always not a boon. It may happen that a particular restaurant does not have enough operations and logistics to meet the growing demand. In that case, in the absence of an alternative operation line, there are chances that the customer might switch to someone else. Amidst such a fierce competition, sometimes a chance gone once may mean a chance gone forever.</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
            <MoneyMakingItem>
              <MoneyMakingIcon src={challange5} alt="Advertising" />
              <MoneyMakingContent>
                <MoneyMakingTitle>Arrival Of Bigwigs</MoneyMakingTitle>
                <MoneyMakingDescription>Big players like Uber and Amazon have sensed the bright prospects in the mobilized food-delivery markets. Their entry which will also be accompanied by other reputed players like Dominos and Pizza Hut is a slight threat to the new and growing players. The reason is that these big names can easily meet the financial and resource requirements which can be troublesome for the smaller and independent ones.</MoneyMakingDescription>
              </MoneyMakingContent>
            </MoneyMakingItem>
          </MoneyMakingGrid>
        </Container>
      </MoneyMakingSection>

      <ExperienceSection data-aos="fade-up">
        <Container>
          <Title>Food Delivery Apps Built By <span>Solminica</span></Title>
          <ProjectGrid>
            {[1, 2, 3].map((project) => (
              <ProjectItem key={project}>
                <ProjectImage src={work_on} alt={`Project ${project}`} />
                <ProjectTitle>Rainbow Children's Hospital</ProjectTitle>
              </ProjectItem>
            ))}
          </ProjectGrid>
        </Container>
      </ExperienceSection>
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
          <Title22>How much does it <span>cost to build</span> an app like <span>Zomato?</span></Title22>
          <CostContent>
            <CostText>
              <Subtitle>
              The cost of developing an app depends majorly upon four components: App Platform, App Size, App Design, and App Development <br/> <br/>
App Platform: App development cost for iOS varies from Android. <br/> <br/>
App Size: Size of the app is decided by the number of features in it. The complexity of these features decides the app cost. <br/> <br/>
App Design: UI/UX of the app and its design play a crucial role. Design cost depends upon the animation and graphics involved. <br/> <br/>
App Development: It includes the hiring cost of the development team and license purchase. <br/> <br/>
Also, the app cost can vary on choosing a mobile app development company or mobile app developers situated in different locations. <br/> <br/>
For example: <br/> <br/>
U.S. based developers: $50 to $250 per hour. <br/> <br/>
Eastern Europe based developers: $30 to $150 per hour. <br/> <br/>
India based developers: $15 to $50 per hour. <br/> <br/>
Right from hiring to providing support post app launched, everything is dependent on the cost. You have to manage everything in your budget. <br/> <br/>
Solminica helps you stick to your spending plan and provide you with an appropriate solution. <br/>
              </Subtitle>
            </CostText>
            <CostImage src={cost_build} alt="Cost to build" />
          </CostContent>
        </Container>
      </CostSection>

      <FeaturesSection data-aos="fade-up">
        <Container>
          <Title22><span>Features</span> to Make an App like <span>Zomato?</span></Title22>
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
          <Title22>How to <span>Make Money</span> in the Food-Delivery Business?</Title22>
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
