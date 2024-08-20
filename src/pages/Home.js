import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import AOS from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import whatsapp from '../assets/images/whatsapp.png';
import telegram from '../assets/images/telegram.png';
import followus from '../assets/images/followus.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import google from '../assets/images/google.png';
import googleCloud from '../assets/images/googleCloud.png';
import razorpay from '../assets/images/razorpay.png';
import facebook2 from '../assets/images/facebook2.png';
import linkedin2 from '../assets/images/linkedin2.png';
import aws from '../assets/images/aws.png';
import kaspersky from '../assets/images/kaspersky.png';
import bing from '../assets/images/bing.png';
import payu from '../assets/images/payu.png';
import digitalOcean from '../assets/images/digitalOcean.png';
import newfold from '../assets/images/newfold.png';
import bitrix24 from '../assets/images/bitrix24.png';
import transformImage from '../assets/images/transform-image.png';
import trusted_partner_1 from '../assets/images/trusted_partner_1.png';
import trusted_partner_2 from '../assets/images/trusted_partner_2.png';
import trusted_partner_3 from '../assets/images/trusted_partner_3.png';
import trusted_partner_4 from '../assets/images/trusted_partner_4.png';
import trusted_partner_5 from '../assets/images/trusted_partner_5.png';
import trusted_partner_6 from '../assets/images/trusted_partner_6.png';
import trusted_partner_7 from '../assets/images/trusted_partner_7.png';
import trusted_partner_8 from '../assets/images/trusted_partner_8.png';
import our_digital_left_side_image from '../assets/images/our_digital_left_side_image.png';
import our_digital_web_dev from '../assets/images/our_digital_web_dev.png';
import our_digital_mobile_dev from '../assets/images/our_digital_mobile_dev.png';
import our_digital_hire from '../assets/images/our_digital_hire.png';
import our_digital_blockchain from '../assets/images/our_digital_blockchain.png';
import our_digital_digi_marketing from '../assets/images/our_digital_digi_marketing.png';
import our_digital_public_relation from '../assets/images/our_digital_public_relation.png';
import our_digital_cyber_security from '../assets/images/our_digital_cyber_security.png';
import our_digital_quality_test from '../assets/images/our_digital_quality_test.png';
import our_digital_cloud from '../assets/images/our_digital_cloud.png';
import our_digital_lets_conect_last_card from '../assets/images/our_digital_lets_conect_last_card.png';
import reactIcon from '../assets/images/react.png';
import nextjs from '../assets/images/nextjs.png';
import html from '../assets/images/html.png';
import typescript from '../assets/images/typescript.png';
import angular from '../assets/images/angular.png';
import vuejs from '../assets/images/veujs.png';
import smbs from '../assets/images/smbs.png';
import startup from '../assets/images/startup.png';
import enterprise from '../assets/images/enterprise.png';
import agency from '../assets/images/agency.png';
import digitalservices from '../assets/images/digitalservices.png';
import Customers from '../assets/images/Customers.png';
import developmentProcessImage from '../assets/images/developmentProcessImage.png';
import industries_1 from '../assets/images/industries_1.png';
import industries_2 from '../assets/images/industries_2.png';
import industries_3 from '../assets/images/industries_3.png';
import industries_4 from '../assets/images/industries_4.png';
import industries_5 from '../assets/images/industries_5.png';
import industries_6 from '../assets/images/industries_6.png';
import industries_7 from '../assets/images/industries_7.png';
import industries_8 from '../assets/images/industries_8.png';
import industries_9 from '../assets/images/industries_9.png';
import industries_10 from '../assets/images/industries_10.png';
import award_1 from '../assets/images/award_1.png';
import award_2 from '../assets/images/award_2.png';
import award_3 from '../assets/images/award_3.png';
import award_4 from '../assets/images/award_4.png';
import award_5 from '../assets/images/award_5.png';
import blogs from '../assets/images/blogs.png';
import Businesses_1 from '../assets/images/Businesses_1.png';
import Businesses_2 from '../assets/images/Businesses_2.png';
import Businesses_3 from '../assets/images/Businesses_3.png';
import Businesses_4 from '../assets/images/Businesses_4.png';
import Businesses_5 from '../assets/images/Businesses_5.png';
import Businesses_6 from '../assets/images/Businesses_6.png';
import Businesses_7 from '../assets/images/Businesses_7.png';
import Businesses_8 from '../assets/images/Businesses_8.png';
import Businesses_9 from '../assets/images/Businesses_9.png';
import Businesses_10 from '../assets/images/Businesses_10.png';
import Businesses_11 from '../assets/images/Businesses_11.png';
import Businesses_12 from '../assets/images/Businesses_12.png';

import educationIcon from '../assets/images/education.png';
import healthcareIcon from '../assets/images/healthcare.png';
import logisticsIcon from '../assets/images/logistics-distribution.png';
import aimlIcon from '../assets/images/aiml.png';
import realEstateIcon from '../assets/images/real-estate.png';
import travelIcon from '../assets/images/travel-hospitality.png';
import foodIcon from '../assets/images/food-restaurant.png';
import financeIcon from '../assets/images/finance.png';
import retailIcon from '../assets/images/retail-e-commerce.png';
import miscIcon from '../assets/images/miscellaneous.png';
import educationProject1 from '../assets/images/education_1.png';
import educationProject2 from '../assets/images/education_2.png';
// import healthcareProject1 from '../assets/images/healthcare_1.png';
// import healthcareProject2 from '../assets/images/healthcare_2.png';
const HomeWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  // padding: 60px 0;
`;
const Button = styled.button`
  background-color: #015BCC;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
`;
const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
`;

const TrustedBy = styled.div`
  margin-top: 40px;
`;



const LogoGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 40px;
  margin: 10px;
`;

const ServicesSection = styled(Section)`
  // background-color: #f8f8f8;
`;

const ServicesContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const ServicesSideImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-right: 5%;
`;

const ServicesContent = styled.div`
  flex: 1;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

const ServiceItem = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;
const ServiceIcon2 = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 0;
`;

const ConnectButton = styled(Button)`
  background-color: #000080;
  color: white;
  margin-top: 10px;
`;

const TechnologiesSection = styled(Section)``;

const TechGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const TechColumn = styled.div`
  flex: 1;
`;
const TechColumn2= styled.div`
margin-top: 40px;
margin-right: 8px;
  flex: 1;
`;

const ExpertiseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExpertiseItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: ${props => props.active ? '#015BCC' : '#333'};
  font-weight: ${props => props.active ? '600' : 'normal'};
  background: ${props => props.active ? 'linear-gradient(90deg, #366DFA 0%, #53A4FF 100%)' : 'transparent'};
  padding: 5px 10px;
  border-radius: 4px;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const TechLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const TechName = styled.span`
  font-size: 16px;
`;

const SolutionsSection = styled(Section)`
  // background-color: #f8f8f8;
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
`;

const SolutionItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SolutionIcon = styled.img`
  width: 60px;
  margin-right: 20px;
`;

const SolutionContent = styled.div``;

const SolutionTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SolutionDescription = styled.p`
  font-size: 16px;
`;

const HireSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HireContent = styled.div`
  flex: 1;
  max-width: 100%;
`;

const HireImage = styled.img`
  flex: 1;
  max-width: 25%;
`;



const WorkSection = styled(Section)``;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 40px;
`;

const IndustryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const IndustryItem = styled.li`
  font-size: 18px;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => props.active ? '#0066CC' : 'inherit'};
`;

const IndustryIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const WorkDetails = styled.div``;

const WorkDetailTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const WorkDetailDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const WorkCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const WorkCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
`;

const WorkCardImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const WorkCardTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

const WorkCardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const TechIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;



const ProcessSection = styled(Section)`
  text-align: center;
`;

const ProcessImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin: 40px 0;
`;

const IndustryGridItem = styled.div`
  text-align: center;
`;

const IndustryGridIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const IndustryName = styled.p`
  font-size: 14px;
`;

const CustomerTestimonial = styled.div`
  display: flex;
  align-items: center;
  // background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 40px;
  margin-top: 40px;
`;

const TestimonialImage = styled.img`
  width: 40%;
  margin-right: 40px;
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



const AwardItem = styled.img`
  width: 100px;
  height: auto;
`;
const BlogSection = styled.section`
  padding: 60px 0;
`;



const BlogsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlogsContent = styled.div`
  flex: 1;
`;

const BlogItem = styled.div`
  margin-bottom: 20px;
  padding: ${props => props.expanded ? '20px' : '10px'};
  background-color: ${props => props.expanded ? '#f5f5f5' : 'transparent'};
  border-radius: 10px;
  transition: all 0.3s ease;
`;

const BlogItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const BlogTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const BlogDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const BlogImage = styled.img`
  width: 40%;
  max-width: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ReadMore = styled.a`
  color: #0066CC;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
`;

const ViewAllButton = styled.button`
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  display: block;
  margin: 40px auto 0;
`;


const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin: 40px 0;
`;

const PartnerLogo = styled.img`
  width: 100%;
  // max-height: 60px;
  object-fit: contain;
`;

const ServingCountries = styled.h3`
  font-size: 24px;
  margin-top: 40px;
`;

const CountriesList = styled.p`
  font-size: 12px;
  line-height: 1.6;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const AwardsSection = styled(Section)`
  text-align: center;
`;
const AwardsTitle = styled.h2`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const AwardsDescription = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const AwardsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const AwardImage = styled.img`
  height: 100px;
  width: auto;
`;

const AwardsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const AwardsDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#333' : '#ccc'};
  border-radius: 50%;
`;


const BusinessesSection = styled(Section)`
  text-align: center;
`;

const BusinessesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

const BusinessIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const BusinessName = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;



const BusinessItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;


const TrustedSection = styled(Section)`
  text-align: center;
`;

const TrustedTitle = styled.h2`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

const TrustedDescription = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 1000px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const TrustedGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const TrustedLogo = styled.img`
  height: 60px;
  width: auto;
`;

const TrustedDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const TrustedDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#333' : '#ccc'};
  border-radius: 50%;
`;
const ValueSection = styled.section`
  text-align: center;
  padding: 60px 0;
  // background-color: #f8f8f8;
`;


const Title = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  // max-width: 800px;
  // margin-left: auto;
  margin-right: auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
`;

const StatItem = styled.div``;

const StatNumber = styled.h3`
  font-size: 36px;
  color: #2F2F2F;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 16px;
  margin-left: 30px;
  color: #666;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 40px 0;
`;

const BottomText = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;
const SocialBar = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 100;
`;
const SidebarSocialIcon = styled.a`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 14px;
`;
const Home = () => {

  const industryData = {
    'Education': {
      icon: educationIcon,
      projects: [educationProject1, educationProject2]
    },
    'Healthcare': {
      icon: healthcareIcon,
      projects: [educationProject1, educationProject2]
    },
    'Logistics & Distribution': {
      icon: logisticsIcon,
      projects: [/* Add project images */]
    },
    'AIML': {
      icon: aimlIcon,
      projects: [/* Add project images */]
    },
    'Real Estate': {
      icon: realEstateIcon,
      projects: [/* Add project images */]
    },
    'Travel & Hospitality': {
      icon: travelIcon,
      projects: [/* Add project images */]
    },
    'Food & Restaurant': {
      icon: foodIcon,
      projects: [/* Add project images */]
    },
    'Finance': {
      icon: financeIcon,
      projects: [/* Add project images */]
    },
    'Retail & E-commerce': {
      icon: retailIcon,
      projects: [/* Add project images */]
    },
    'Miscellaneous': {
      icon: miscIcon,
      projects: [/* Add project images */]
    }
  };
  const [expandedBlog, setExpandedBlog] = useState(0);

  const blogData = [
    {
      title: "Can Good Design Grow your Business and Customer",
      description: "Learn how to grow your business and customers to generate huge profits and create awareness for your brand. Best way to grow your business in 2023"
    },
    {
      title: "How to Enhance Motivation for Better Business leads",
      description: "Discover effective strategies to boost motivation and generate high-quality business leads for your company's growth and success."
    },
    {
      title: "7 Ways Neuromarketing Impact Marketing Campaign",
      description: "Explore the fascinating world of neuromarketing and learn how it can revolutionize your marketing campaigns for better engagement and conversions."
    }
  ];
  const partnerLogos = [
    { src: google, alt: "Google" },
    { src: googleCloud, alt: "Google Cloud" },
    { src: razorpay, alt: "Razorpay" },
    { src: facebook2, alt: "Facebook" },
    { src: linkedin2, alt: "LinkedIn" },
    { src: aws, alt: "AWS" },
    { src: kaspersky, alt: "Kaspersky" },
    { src: bing, alt: "Bing" },
    { src: payu, alt: "PayU" },
    { src: digitalOcean, alt: "Digital Ocean" },
    { src: newfold, alt: "Newfold" },
    { src: bitrix24, alt: "Bitrix24" }
  ];

  const [activeExpertise, setActiveExpertise] = useState('Expertise');
  const [activeIndustry, setActiveIndustry] = useState('Healthcare');
  const businessReasons = [
    { icon: Businesses_1, text: "SEO and Digital Marketing" },
    { icon: Businesses_2, text: "4 months + free post launch support" },
    { icon: Businesses_3, text: "Non-Disclosure Agreement" },
    { icon: Businesses_4, text: "100% value for the money" },
    { icon: Businesses_5, text: "Professional coding and version controls" },
    { icon: Businesses_6, text: "Flexible Payment Plans" },
    { icon: Businesses_7, text: "Real-time project tracking tools" },
    { icon: Businesses_8, text: "Custom Tailored support | AMC Plans" },
    { icon: Businesses_9, text: "Quality Assurance and Unit Test Cases" },
    { icon: Businesses_10, text: "Penalty enforcement in case of Delivery Delay" },
    { icon: Businesses_11, text: "In-depth analysis of revenue business Models" },
    { icon: Businesses_12, text: "Mind Maps and video demos" },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <HomeWrapper>

<SocialBar>
        <SidebarSocialIcon href="#" target="_blank"><img src={telegram} alt="Telegram" /></SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank"><img src={whatsapp} alt="Whats App" /></SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank"><img src={twitter} alt="Twitter" /></SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank"><img src={facebook} alt="Facebook" /></SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank"><img src={instagram} alt="Instagram" /></SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank"><img src={linkedin} alt="LinkedIn" /></SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank"><img style={{marginTop: '100px'}} src={followus} alt="Follow Us" /></SidebarSocialIcon>
      </SocialBar>
      <Container>
        <HeroSection data-aos="fade-up">
          <HeroContent>
            <Title>Transform your Business with <span>Solminica</span></Title>
            <Subtitle>We are firm believers that the best software comes from small agile and highly skilled teams.</Subtitle>
            <ViewAllButton>Consult Now!</ViewAllButton>
          </HeroContent>
          <HeroImage src={transformImage} alt="Transform your business" />
        </HeroSection>

        <TrustedBy data-aos="fade-up">
          <TrustedTitle>Trusted by the world's leading organizations</TrustedTitle>
          <LogoGrid>
            <Logo src={trusted_partner_1} alt="Trusted Partner 1" />
            <Logo src={trusted_partner_2} alt="Trusted Partner 2" />
            <Logo src={trusted_partner_3} alt="Trusted Partner 3" />
            <Logo src={trusted_partner_4} alt="Trusted Partner 4" />
            <Logo src={trusted_partner_5} alt="Trusted Partner 5" />
            <Logo src={trusted_partner_6} alt="Trusted Partner 6" />
            <Logo src={trusted_partner_7} alt="Trusted Partner 7" />
            <Logo src={trusted_partner_8} alt="Trusted Partner 8" />
          </LogoGrid>
        </TrustedBy>
      </Container>

      <ServicesSection data-aos="fade-up">
        <ServicesContainer>
          <ServicesSideImage src={our_digital_left_side_image} alt="Digital Transformation" />
          <ServicesContent>
            <Title>Our Digital Transformation Services</Title>
            <Subtitle>With a blend of reliable & long-term partner than just a Partner</Subtitle>
            <ServiceGrid>
              <ServiceItem>
                <ServiceIcon src={our_digital_web_dev} alt="Website Development" />
                <ServiceTitle>Website Development</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_mobile_dev} alt="Mobile app Development" />
                <ServiceTitle>Mobile app Development</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_hire} alt="Hire Professionals" />
                <ServiceTitle>Hire Professionals</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_blockchain} alt="Blockchain Development" />
                <ServiceTitle>Blockchain Development</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_digi_marketing} alt="Digital Marketing" />
                <ServiceTitle>Digital Marketing</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_public_relation} alt="Public Relations and Media" />
                <ServiceTitle>Public Relations and Media</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_cyber_security} alt="Cyber Security" />
                <ServiceTitle>Cyber Security</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_quality_test} alt="Quality Testing" />
                <ServiceTitle>Quality Testing</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon src={our_digital_cloud} alt="Cloud and Devops" />
                <ServiceTitle>Cloud and Devops</ServiceTitle>
              </ServiceItem>
              <ServiceItem>
              <ServiceIcon2 src={our_digital_lets_conect_last_card} alt="Cloud and Devops" />

                {/* <ServiceTitle>To discuss a project</ServiceTitle>
                <ConnectButton>Let's Connect</ConnectButton> */}
              </ServiceItem>
            </ServiceGrid>
          </ServicesContent>
        </ServicesContainer>
      </ServicesSection>
<hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '20px', marginRight: '20px',marginTop: '60px'}}/>
      <TechnologiesSection data-aos="fade-up">
        <Container>
          <Title>Technologies that drive Growth</Title>
          <Subtitle>Solminica creates enterprise solutions that seamlessly blend traditional methods with the latest innovations.</Subtitle>
          <TechGrid>
            <TechColumn>
              <ExpertiseList>
                {['Expertise', 'Frontend Technologies', 'Backend Technologies', 'Mobile Technologies', 'Frameworks', 'Cloud Technologies', 'eCommerce', 'Web 3.0'].map((item) => (
                  <ExpertiseItem 
                    key={item} 
                    active={activeExpertise === item}
                    onClick={() => setActiveExpertise(item)}
                  >
                    {item}
                  </ExpertiseItem>
                ))}
              </ExpertiseList>
            </TechColumn>
            <TechColumn2>
              <TechItem>
                <TechLogo src={reactIcon} alt="React" />
                <TechName>React JS</TechName>
              </TechItem>
              <TechItem>
                <TechLogo src={angular} alt="Angular" />
                <TechName>Angular</TechName>
              </TechItem>
              <TechItem>
                <TechLogo src={vuejs} alt="Vue.js" />
                <TechName>Vue.js</TechName>
              </TechItem>
            </TechColumn2>
            <TechColumn2>
              <TechItem>
                <TechLogo src={nextjs} alt="Next.js" />
                <TechName>Next.js</TechName>
              </TechItem>
              <TechItem>
                <TechLogo src={html} alt="HTML5" />
                <TechName>HTML5</TechName>
              </TechItem>
              <TechItem>
                <TechLogo src={typescript} alt="TypeScript" />
                <TechName>TypeScript</TechName>
              </TechItem>
            </TechColumn2>
          </TechGrid>
          <Subtitle>Our expertise in designing and building digital solutions authorises us to develop bespoke solutions</Subtitle>
          <ViewAllButton>Consult Now!</ViewAllButton>
        </Container>
      </TechnologiesSection>
      <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '20px', marginRight: '20px',marginTop: '60px'}}/>

      <SolutionsSection data-aos="fade-up">
        <Container>
          <Title>Avail Profit-Driven Development Solutions to Resolve All-Scale Business Needs</Title>
          <Subtitle>Solminica creates enterprise solutions that seamlessly blend traditional methods with the latest innovations.</Subtitle>
          <SolutionGrid>
            <SolutionItem>
              <SolutionIcon src={smbs} alt="SMBs" />
              <SolutionContent>
                <SolutionTitle>SMBs</SolutionTitle>
                <SolutionDescription>Seamlessly turn your small business into a well-known brand with the top development assistance. For decades, we have been helping small-scale businesses earn.</SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem>
              <SolutionIcon src={startup} alt="Startups" />
              <SolutionContent>
                <SolutionTitle>Startups</SolutionTitle>
                <SolutionDescription>Let your startups climb the ladder of success in no time. We offer software development services for startups and help them get more funding as a brand</SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem>
              <SolutionIcon src={enterprise} alt="Enterprises" />
              <SolutionContent>
                <SolutionTitle>Enterprises</SolutionTitle>
                <SolutionDescription>Seek robust and customised enterprise mobility solutions to meet your business needs. Our each development layer is engineered with experience and expertise</SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem>
              <SolutionIcon src={agency} alt="Agencies" />
              <SolutionContent>
                <SolutionTitle>Agencies</SolutionTitle>
                <SolutionDescription>Our technical approach makes it accessible for offshore agencies to get exposure, improve business' financial growth, and increase sales & marketing potential</SolutionDescription>
              </SolutionContent>
            </SolutionItem>
          </SolutionGrid>
        </Container>
      </SolutionsSection>
                <Container>

      <HireSection data-aos="fade-up">
        <HireContent>
          <Title>Are you looking to hire Efficient Mobile app and Web Development Team for your Business ?</Title>
          <Subtitle>Solminica serves you with the most innovative Mobile App & web development team that will take your business to a whole new level.</Subtitle>
          <Button>Hire now</Button>
        </HireContent>
        <HireImage src={digitalservices} alt="Hire Efficient Team" />
      </HireSection>
                </Container>

                <ValueSection>
      <Container>
        <Title>
          Solminica Deliver Value for Money
        </Title>
        <Subtitle>
          Solminica delivers unparalleled value for money by offering top-quality, innovative technology
          solutions at competitive prices. Our customized services are designed to fit any budget, ensuring
          efficiency and productivity enhancements for businesses of all sizes. With exceptional customer
          support, we are your trusted partner in achieving technological success.
        </Subtitle>
        <StatsGrid>
          <StatItem>
            <StatNumber>99%</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>
            <StatLabel>Satisfied Clients</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>160+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Tech Enthusiasts</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>30+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Industries covered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>550+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Projects Delivered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>80%+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Impressive growth of Product</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>3.4M+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Lines of Code</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Industry Certified Team members</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>850+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>On time project delivery.</StatLabel>
          </StatItem>
        </StatsGrid>
        {/* <Divider /> */}
        <BottomText>
          Our expertise in designing and building digital solutions authorises us to develop bespoke solutions
        </BottomText>
        <ViewAllButton>Consult Now!</ViewAllButton>
      </Container>
    </ValueSection>

      <WorkSection data-aos="fade-up">
  <Container>
    <Title>Our Work</Title>
    <Subtitle>Solminica working on different sectors with giving them the proof and solutions. From agriculture to fintech, we cater to a wide array of industries, offering tailored solutions to meet their specific needs</Subtitle>
    <WorkGrid>
      <IndustryList>
        {Object.keys(industryData).map(industry => (
          <IndustryItem key={industry} active={activeIndustry === industry} onClick={() => setActiveIndustry(industry)}>
            <IndustryIcon src={industryData[industry].icon} alt={industry} />
            {industry}
          </IndustryItem>
        ))}
      </IndustryList>
      <WorkDetails>
        <WorkDetailTitle>{activeIndustry}</WorkDetailTitle>
        <WorkDetailDescription>The {activeIndustry.toLowerCase()} industry utilizes advanced technology solutions for various purposes, thereby enhancing accessibility, improving outcomes, and streamlining operational efficiency.</WorkDetailDescription>
        <WorkCards>
          {industryData[activeIndustry].projects.map((project, index) => (
            <WorkCard key={index}>
              <WorkCardImage src={project} alt={`${activeIndustry} Project ${index + 1}`} />
              <WorkCardTitle>{`${activeIndustry} Project ${index + 1}`}</WorkCardTitle>
              <WorkCardDescription>Description of the project goes here.</WorkCardDescription>
              <TechStack>
                <TechIcon src={reactIcon} alt="React" />
                <TechIcon src={nextjs} alt="Next.js" />
              </TechStack>
              <ReadMore href="#">Read More →</ReadMore>
            </WorkCard>
          ))}
        </WorkCards>
      </WorkDetails>
    </WorkGrid>
  </Container>
</WorkSection>

      <ProcessSection data-aos="fade-up">
        <Container>
          <Title>Development Process we Follow</Title>
          <Subtitle>At Solminica , we follow an agile development methodology, emphasizing iterative development, continuous improvement, and collaboration among cross-functional teams. Our approach prioritizes customer feedback, adapts quickly to changing requirements, and delivers high-quality software solutions efficiently.</Subtitle>
          <ProcessImage src={developmentProcessImage} alt="Development Process" />
        </Container>
      </ProcessSection>

      <Section data-aos="fade-up">
        <Container>
          <Title>Key industries we serve</Title>
          <Subtitle>We understand the unique challenges and opportunities facing each industry we serve. Our tailored digital solutions are designed to streamline operations, enhance customer experiences, and drive growth for businesses of all sizes.</Subtitle>
          <IndustriesGrid>
            {[industries_1, industries_2, industries_3, industries_4, industries_5, industries_6, industries_7, industries_8, industries_9, industries_10].map((industry, index) => (
              <IndustryGridItem key={index}>
                <IndustryGridIcon src={industry} alt={`Industry ${index + 1}`} />
                <IndustryName>{`Industry ${index + 1}`}</IndustryName>
              </IndustryGridItem>
            ))}
          </IndustriesGrid>
          <Subtitle>Our expertise in designing and building digital solutions authorises us to develop bespoke solutions</Subtitle>
          <ViewAllButton>Consult Now!</ViewAllButton>
        </Container>
      </Section>

      <Section data-aos="fade-up">
        <Container>
          <Title>Our Customers love what we do</Title>
          <Subtitle>Our customers are at the center of everything we do, and we're passionate about delivering exceptional solutions that exceed their expectations. We take pride in providing innovative services that delight and satisfy their needs, fostering long-term relationships built on trust, quality, and reliability. Our dedication to customer satisfaction is unwavering, and we continually strive to improve and refine our offerings to meet their evolving needs.</Subtitle>
          <CustomerTestimonial>
            <TestimonialImage src={Customers} alt="Customer Testimonial" />
            <TestimonialContent>
              <TestimonialText>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
              </TestimonialText>
              <TestimonialAuthor>Mark Rise</TestimonialAuthor>
              <TestimonialPosition>CEO, Founder</TestimonialPosition>
            </TestimonialContent>
          </CustomerTestimonial>
        </Container>
      </Section>

      
      <AwardsSection>
  <AwardsTitle>Awards and Recognition</AwardsTitle>
  <AwardsDescription>
    We're proud to be recognized as a top performer by Clutch and Appfutura, acknowledging our
    expertise in IT services, software development, and iOS app creation.
  </AwardsDescription>
  <AwardsGrid>
    <AwardImage src={award_1} alt="Clutch Award" />
    <AwardImage src={award_2} alt="Top Software Development Company" />
    <AwardImage src={award_3} alt="Top App Developers" />
    <AwardImage src={award_4} alt="Top Mobile App Developers" />
    <AwardImage src={award_5} alt="Top Rated App Development Company" />
    <AwardImage src={award_5} alt="Top Rated Software Development Company" />
  </AwardsGrid>
  <AwardsDots>
    <AwardsDot active />
    <AwardsDot />
    <AwardsDot />
    <AwardsDot />
  </AwardsDots>
</AwardsSection>

<Container>

<BusinessesSection>
        <Title>Why Businesses Prefer Us?</Title>
        <Description>
          As the leading IT company, Solminica guarantees client satisfaction through surveys, punctual
          delivery, established SLAs for support, superior quality in deliverables, and a commendable client
          retention record
        </Description>
        <BusinessesGrid>
          {businessReasons.map((item, index) => (
            <BusinessItem key={index}>
              <BusinessIcon src={item.icon} alt={item.text} />
              <BusinessName>{item.text}</BusinessName>
            </BusinessItem>
          ))}
        </BusinessesGrid>
      </BusinessesSection>
</Container>
      <Container>
      <TrustedSection>
  <TrustedTitle>Trusted By 100+ Happy Brands</TrustedTitle>
  <TrustedDescription>
    At Solminica, we are dedicated to driving continuous innovation and digital transformation for our
    stakeholders. We help our clients stay aligned with the latest technology trends, giving them a
    competitive advantage. We are proud to have maintained a 90% client retention rate since 2017.
  </TrustedDescription>
  <TrustedGrid>
    <TrustedLogo src={trusted_partner_1} alt="Trusted Partner 1" />
    <TrustedLogo src={trusted_partner_2} alt="Trusted Partner 2" />
    <TrustedLogo src={trusted_partner_3} alt="Trusted Partner 3" />
    <TrustedLogo src={trusted_partner_4} alt="Trusted Partner 4" />
    <TrustedLogo src={trusted_partner_5} alt="Trusted Partner 5" />
    <TrustedLogo src={trusted_partner_6} alt="Trusted Partner 6" />
  </TrustedGrid>
  <TrustedDots>
    <TrustedDot active />
    <TrustedDot />
    <TrustedDot />
    <TrustedDot />
  </TrustedDots>
</TrustedSection>
      </Container>

      <BlogSection>
      <Container>
        <Title>Blogs</Title>
        <Subtitle>
          Our blog is your gateway to the world of IT and software development. Explore a wide range of
          topics, from practical how-to guides to in-depth analysis of industry trends. Stay informed and
          inspired by our team of experts.
        </Subtitle>
        <BlogsContainer>
          <BlogsContent>
            {blogData.map((blog, index) => (
              <BlogItem key={index} expanded={expandedBlog === index}>
                <BlogItemHeader onClick={() => setExpandedBlog(expandedBlog === index ? -1 : index)}>
                  <BlogTitle>{blog.title}</BlogTitle>
                  {expandedBlog === index ? <ExpandLess /> : <ExpandMore />}
                </BlogItemHeader>
                {expandedBlog === index && (
                  <>
                    <BlogDescription>{blog.description}</BlogDescription>
                    <ReadMore href="#">Read More →</ReadMore>
                  </>
                )}
              </BlogItem>
            ))}
          </BlogsContent>
          <BlogImage src={blogs} alt="Blog illustration" />
        </BlogsContainer>
        <ViewAllButton>View all</ViewAllButton>
      </Container>
    </BlogSection>
      <Section data-aos="fade-up">
        <Container>
        <Title>Our Enterprise Technology partners</Title>
    <Subtitle>
      We are proud to partner with industry-leading technology providers to deliver innovative solutions
      for our clients. Our partnerships with companies like Google Cloud, Razorpay, AWS, and Microsoft
      empower us to leverage cutting-edge technologies and platforms to drive digital transformation
      and growth for your business.
    </Subtitle>
    <PartnersGrid>
      {partnerLogos.map((partner, index) => (
        <PartnerLogo key={index} src={partner.src} alt={partner.alt} />
      ))}
    </PartnersGrid>
          <ServingCountries>
            SERVING IN 70+ COUNTRIES
          </ServingCountries>
          <CountriesList>
            Web Development Company in India | Web Development Company in USA | Web Development Company in UK | Web Development Company in Singapore | Web Development Company in Germany |
            Web Development Company in Canada | Web Development Company in Australia | Web Development Company in Ireland | Web Development Company in Dublin | Web Development Company in
            New Zealand | Web Development Company in Netherlands | Web Development Company in Norway | Web Development Company in UAE | Web Development Company in Saudi Arabia | Web
            Development Company in Qatar | Web Development Company in Finland | Web Development Company in Mexico | Web Development Company in Switzerland | Web Development Company in Spain |
            Web Development Company in France and more... | Mobile Development Company in India | Mobile Development Company in USA | Mobile Development Company in UK | Mobile Development
            Company in Singapore | Mobile Development Company in Germany | Mobile Development Company in Canada | Mobile Development Company in Australia | Mobile Development Company in Ireland |
            Mobile Development Company in Dublin | Mobile Development Company in New Zealand | Mobile Development Company in Netherlands | Mobile Development Company in Norway | Mobile
            Development Company in UAE | Mobile Development Company in Saudi Arabia | Mobile Development Company in Qatar | Mobile Development Company in Finland | Mobile Development Company in
            Mexico | Web Development Company in Switzerland | Mobile Development Company in Spain | Mobile Development Company in France and more...
          </CountriesList>
        </Container>
      </Section>
    </HomeWrapper>
  );
};

export default Home;