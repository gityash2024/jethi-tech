import React, { useState, useEffect, useRef } from "react";

import styled, { keyframes } from 'styled-components';

import { useInView } from 'react-intersection-observer';

import Slider from "react-slick";

import AOS from "aos";
import "slick-carousel/slick/slick.css";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import whatsapp from "../assets/images/whatsapp.png";
import practical from "../assets/images/practical.png";
import sumitian from "../assets/images/sumitian.png";
import dronekarna from "../assets/images/dronekarna.png";
import dooper from "../assets/images/dooper.png";
import womb from "../assets/images/womb.png";
import reroutee from "../assets/images/reroutee.png";
import sam from "../assets/images/sam.png";
import appreaze from "../assets/images/appreaze.png";
import inte from "../assets/images/inte.png";
import samtosh from "../assets/images/samtosh.png";
import mountain from "../assets/images/mountain.png";
import exar from "../assets/images/exar.png";

import telegram from "../assets/images/telegram.png";
import followus from "../assets/images/followus.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import negative from '../assets/images/negative.png';
import positive from '../assets/images/positive.png';
import google from "../assets/images/google.png";
import googleCloud from "../assets/images/googleCloud.png";
import razorpay from "../assets/images/razorpay.png";
import facebook2 from "../assets/images/facebook2.png";
import linkedin2 from "../assets/images/linkedin2.png";
import kaspersky from "../assets/images/kaspersky.png";
import bing from "../assets/images/bing.png";
import payu from "../assets/images/payu.png";
import digitalOcean from "../assets/images/digitalOcean.png";
import newfold from "../assets/images/newfold.png";
import bitrix24 from "../assets/images/bitrix24.png";
import transformImage from "../assets/images/transform-image.png";
import trusted_partner_1 from "../assets/images/trusted_partner_1.svg";
import trusted_partner_2 from "../assets/images/trusted_partner_2.svg";
import trusted_partner_3 from "../assets/images/trusted_partner_3.svg";
import sacred_card from "../assets/images/sacred_card.png";
import trusted_partner_4 from "../assets/images/trusted_partner_4.svg";
import trusted_partner_5 from "../assets/images/trusted_partner_5.svg";
import trusted_partner_6 from "../assets/images/trusted_partner_6.svg";
// import trusted_partner_5_card from "../assets/images/trusted_partner_5_card.svg";
// import trusted_partner_6_card from "../assets/images/trusted_partner_6_card.svg";
import trusted_partner_7 from "../assets/images/trusted_partner_7.svg";
import trusted_partner_8 from "../assets/images/trusted_partner_8.svg";
import our_digital_left_side_image from "../assets/images/our_digital_left_side_image.png";
import our_digital_web_dev from "../assets/images/our_digital_web_dev.svg";
import our_digital_mobile_dev from "../assets/images/our_digital_mobile_dev.svg";
import our_digital_hire from "../assets/images/our_digital_hire.svg";
import our_digital_blockchain from "../assets/images/our_digital_blockchain.svg";
import our_digital_digi_marketing from "../assets/images/our_digital_digi_marketing.svg";
import our_digital_public_relation from "../assets/images/our_digital_public_relation.svg";
import our_digital_cyber_security from "../assets/images/our_digital_cyber_security.svg";
import our_digital_quality_test from "../assets/images/our_digital_quality_test.svg";
import our_digital_cloud from "../assets/images/our_digital_cloud.svg";
import our_digital_lets_conect_last_card from "../assets/images/our_digital_lets_conect_last_card.png";
import reactIcon from "../assets/images/react.png";
import nextjs from "../assets/images/nextjs.png";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import jquery from "../assets/images/jquery.svg";
import php from "../assets/images/php.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import ajax from "../assets/images/ajax.svg";
import mysql from "../assets/images/mysql.svg";
import laravel from "../assets/images/laravel.svg";
import typescript from "../assets/images/typescript.png";
import angular from "../assets/images/angular.png";
import vuejs from "../assets/images/veujs.png";
import nodejs from "../assets/images/nodejs.png";
import blockchain from "../assets/images/blockchain.png";
import aiml from "../assets/images/aiml.svg";
import wordpress from "../assets/images/wordpress.png";
import shopify from "../assets/images/shopify.png";
import net from "../assets/images/net.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
import ror from "../assets/images/ror.png";
import flutter from "../assets/images/flutter.png";
import android from "../assets/images/android.png";
import ios from "../assets/images/ios.png";
import ionic from "../assets/images/ionic.png";
import native from "../assets/images/native.png";
import swift from "../assets/images/swift.png";
import kotlin from "../assets/images/kotlin.png";
import express from "../assets/images/express.png";
import codeig from "../assets/images/codeig.png";
import magento from "../assets/images/magento.png";
import django from "../assets/images/django.png";
import meanmern from "../assets/images/meanmern.png";
import aws from "../assets/images/aws.png";
import azure from "../assets/images/azure.png";
import googlecloud from "../assets/images/googlecloud.png";
import alibaba from "../assets/images/alibaba.png";
import DO from "../assets/images/DO.png";
import woo from "../assets/images/woo.png";
import drupal from "../assets/images/drupal.png";
import prista from "../assets/images/prista.png";
import metaverse from "../assets/images/metaverse.png";
import nft from "../assets/images/nft.png";
import smbs from "../assets/images/smbs.svg";
import startup from "../assets/images/startup.svg";
import enterprise from "../assets/images/enterprise.svg";
import agency from "../assets/images/agency.svg";
import digitalservices from "../assets/images/digitalservices.png";
import Customers from "../assets/images/Customers.png";
import developmentProcessImage from "../assets/images/developmentProcessImage.svg";
import industries_1 from "../assets/images/industries_1.svg";
import industries_2 from "../assets/images/industries_2.svg";
import industries_3 from "../assets/images/industries_3.svg";
import industries_4 from "../assets/images/industries_4.svg";
import industries_5 from "../assets/images/industries_5.svg";
import industries_6 from "../assets/images/industries_6.svg";
import industries_7 from "../assets/images/industries_7.svg";
import industries_8 from "../assets/images/industries_8.svg";
import industries_9 from "../assets/images/industries_9.svg";
import industries_10 from "../assets/images/industries_10.svg";
import award_1 from "../assets/images/award_1.svg";
import award_2 from "../assets/images/award_2.svg";
import award_3 from "../assets/images/award_3.svg";
import award_4 from "../assets/images/award_4.svg";
import award_5 from "../assets/images/award_5.svg";
import award_6 from "../assets/images/award_6.svg";
import blogs from "../assets/images/blogs.png";
import Businesses_1 from "../assets/images/Businesses_1.svg";
import Businesses_2 from "../assets/images/Businesses_2.svg";
import Businesses_3 from "../assets/images/Businesses_3.svg";
import Businesses_4 from "../assets/images/Businesses_4.svg";
import Businesses_5 from "../assets/images/Businesses_5.svg";
import Businesses_6 from "../assets/images/Businesses_6.svg";
import Businesses_7 from "../assets/images/Businesses_7.svg";
import Businesses_8 from "../assets/images/Businesses_8.svg";
import Businesses_9 from "../assets/images/Businesses_9.svg";
import Businesses_10 from "../assets/images/Businesses_10.svg";
import Businesses_11 from "../assets/images/Businesses_11.svg";
import Businesses_12 from "../assets/images/Businesses_12.svg";
import educationIcon from "../assets/images/education.png";
import healthcareIcon from "../assets/images/healthcare.png";
import logisticsIcon from "../assets/images/logistics-distribution.svg";
import aimlIcon from "../assets/images/aiml.svg";
import realEstateIcon from "../assets/images/realEstateIcon.svg";
import travelIcon from "../assets/images/travelIcon.svg";
import foodIcon from "../assets/images/foodIcon.svg";
import financeIcon from "../assets/images/financeIcon.svg";
import retailIcon from "../assets/images/retailIcon.svg";
import miscIcon from "../assets/images/miscIcon.svg";
import educationProject1 from "../assets/images/education_1.png";
import educationProject2 from "../assets/images/education_2.png";
import herosectionbg from "../assets/images/hero-bg-line.png";
import techbgLeft from "../assets/images/tech-bg-left.png";
import techbgRight from "../assets/images/tech-bg-right.png";
import tp_home_1 from "../assets/images/tp-home-1.png";
import tp_home_2 from "../assets/images/tp-home-2.png";
import tp_home_3 from "../assets/images/tp-home-3.png";
import tp_home_4 from "../assets/images/tp-home-4.png";
import { ArrowRightAlt } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const HomeWrapper = styled.div`
  font-family: "Poppins";
  color: #434343;
`;

const Container = styled.div`
  max-width: 75vw;
  margin: 0 auto;
  padding: 0 20px;

 
`;
const cardVariants2 = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};
const Container2 = styled.div`
background-image: url(${herosectionbg});
  background-repeat: no-repeat;
  background-position: right;
  
`;

const Section = styled.section`
  padding: 40px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;
const Section20 = styled.section`
  padding: 40px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;
const Section0 = styled.section`
  padding: 0px 0;
  @media (max-width: 768px) {
    padding: 0px 0;
  }
`;
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const Button = styled.button`
  background-color: #015bcc;
  color: white;
  border: none;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background:linear-gradient(to right, #0072FF 0%, #2F69B1 100%);
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 46px;
  background: linear-gradient(270deg, #000000 60%, #1a1a1a 70%, #0072FF 85%, #2F69B1 100%);
  background-size: 200% 200%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 3s ease infinite;
  margin-bottom: 20px;
  text-align: center; 
  font-weight: 700;
  line-height: 62.4px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 40.4px;
  }

  font-family: "Poppins";
`;
const TitleOurDigital = styled.h2`
  font-size: 46px;
  background: linear-gradient(270deg, #000000 60%, #1a1a1a 70%, #0072FF 85%, #2F69B1 100%);
  background-size: 200% 200%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 3s ease infinite;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 62.4px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 45px;
  }

  font-family: "Poppins";
`;



const Subtitle = styled.p`
  font-size: 20px;
  color:#4E4E4E;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 400;
  line-height:30px;
  font-family: "Poppins";
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const SubtitleOurDigital = styled.p`
  font-size: 20px;
  color:#4E4E4E;
  margin-bottom: 20px;
  font-weight: 400;
  line-height:30px;
  font-family: "Poppins";
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Subtitle22 = styled.p`
  font-size: 20px;
  color:#4E4E4E;
  margin-bottom: 20px;
  font-weight: 400;
  
  line-height:30px;
  font-family: "Poppins";
  @media (max-width: 768px) {
    font-size: 16px;
   text-align:center;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #2f69b1 0%, #0072ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

`;

const DarkText = styled.span`
  color: #2f2f2f;
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
  @media (max-width: 1430px) {
    display: none;
  }
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
  font-family: "Poppins";
`;
const SidebarSocialIcon2 = styled.a`
  width: 30px;
  height: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-family: "Poppins";
`;

const HeroSection = styled(Section)`
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 30px;
    margin-bottom: 40px;
  }

`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-bottom: 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 50px;
  line-height: 62.4px;
  margin-bottom: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }
`;
const CountriesList = styled.p`
  font-size: 12px;
  line-height: 22px;
  margin-top: 20px;
  font-weight: 400;
  font-family: "Poppins";
  color: #6B6B6B;
  a {
    color: #6B6B6B;
    text-decoration: none;
    cursor: pointer;
    margin-left: 5px;
    &:hover {
      color: #0072FF;
      text-decoration: underline;
    }
  }
`;


const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const shine = keyframes`
  0% {
    background-position: 200% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
`;
const ShinyLine = styled.hr`
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 114, 255, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 200% 100%;
  animation: ${shine} 3s linear infinite;
  margin: 30px 0;
`;

const TrustedBy = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`;

const TrustedTitle = styled.h3`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 20px;
  color: #434343;
  margin-bottom: 15px;
`;

const LogoGrid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 100%;
  margin: 10px;
  margin-right: 4%;
    &:hover {
    transform: scale(1.4);
  }
`;

const ServicesSection = styled(Section20)`
  // background-color: #f8f8f8;
`;

const ServicesContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServicesSideImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-right: 5%;
  @media (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto 20px auto;
  }
`;

const ServicesContent = styled.div`
  flex: 1;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceItem = styled(motion.div)`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #E1E1E1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease-in-out;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;
const ServiceItem2 = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  &:hover {
    cursor: pointer;
  }
`;
const cardVariants = {
  hidden: { opacity: 0, transform: 'translateY(20px)' },
  visible: (i) => ({
    opacity: 1,
    transform: 'translateY(0)',
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};


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
  font-size: 16px;
  margin-bottom: 0;
  font-family: 'Poppins';
    font-weight: 500;
    line-height: 26px;
    color: #434343;
`;

const TechnologiesSection = styled(Section0)`
`;
const BgWrapper = styled.div`
  background-image: url(${techbgLeft});
  background-repeat: no-repeat;
  background-position: left;
  @media (max-width: 768px) {
    background-image: none;
  }
`;
const BgWrapperRight = styled.div`
  background-image: url(${techbgRight});
  background-repeat: no-repeat;
  background-position: right;
  @media (max-width: 768px) {
    background-image: none;
  }
`;
const TechGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TechColumn = styled.div`
  flex: ${(props) => props.width || 1};
`;

const ExpertiseList = styled.ul`
  list-style-type: none;
  padding: 0;
  border-left: 3px solid #202020;
  width: 100%;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 20px;
  }
`;

const ExpertiseItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  font-family: "Poppins";
   font-weight: 500 !important;
   font-size: 20px;
   line-height: 30px;
  color: ${(props) => (props.active ? "#ffffff" : "#202020")};
  // font-weight: ${(props) => (props.active ? "600" : "normal")};
  background: ${(props) =>
    props.active
      ? "linear-gradient(to right, #0072FF 0%, #2F69B1 100%)"
      : "transparent"};
  padding: 10px 15px;
  width: 60%;
  text-align: left;
 
  &:hover {
  background:linear-gradient(to right, #0072FF 0%, #2F69B1 100%) !important;
  color: #ffffff;


  }
`;

const TechItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #5C5C5C;
  margin-right: 80px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff;
  border-radius: 10px;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-right: 0px;
  }
`;

const TechLogo = styled.img`
  width: 40px;
  margin-right: 10px;
  transition: transform 0.3s ease;

  ${TechItem}:hover & {
    transform: rotate(15deg) scale(1.1);
  }
`;

const TechName = styled.span`
  font-size: 16px;
  transition: color 0.3s ease;

  ${TechItem}:hover & {
    color: #0072FF;
  }
`;


const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const BottomText = styled.p`
  font-size: 20px;
  color: #434343;
  text-align: left;
  flex: 1;
  line-height: 30px;
    font-weight: 700;
`;

const ConsultButton = styled(Button)`
  width: 20%;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ConsultButtonHome = styled(Button)`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;


const HireSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

const HireContent = styled.div`
  flex: 1;
  max-width: 100%;
`;

const HireImage = styled.img`
  flex: 1;
  max-width: 25%;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`;


const WorkSection = styled(Section0)`
@media (max-width: 768px) {
  margin-top: 0px;
}
`;

const WorkGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const IndustryList = styled.ul`
  list-style-type: none;
  padding: 0;
  border-left: 3px solid #202020;
  width: 250px;
  margin-right: 40px;
`;



const WorkDetails = styled.div`
  flex: 1;
`;

const WorkDetailTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;
const WorkDetailTitle2 = styled.h3`
  font-size: 18px;
  cursor: not-allowed;
  margin-bottom: 15px;
`;

const WorkDetailDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const WorkCards = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const WorkCard = styled.div`
  background-image: url(${educationProject1});
  background-size: cover;
  background-position: center;
  height: 300px;
  position: relative;
`;

const WorkCardContent = styled.div`
  margin-top: 10px;
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const WorkCardTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
  color: #434343;
`;

const WorkCardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  color: #434343;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  z-index: 1;
`;

const TechIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const ProcessSection = styled(Section)`
  text-align: center;
`;

const ProcessImage = styled.img`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin: 40px 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IndustryGridItem = styled.div`
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #6C6C6C;

  }
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
  border: 1px solid #6C6C6C;
  border-radius: 60px;
  padding: 40px;
  margin-top: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TestimonialImage = styled.img`
  width: 20%;
  margin-right: 40px;
  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 20px;
    margin-right: 0;
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

const AwardsSection = styled(Section)`
  text-align: center;
`;



const AwardImage = styled.img`
  height: 100px;
  width: auto;
  margin-bottom: 20px;
`;

const AwardsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const AwardsDot = styled.span`
  width: 10px;
  cursor: pointer;
  height: 10px;
  background-color: ${(props) => (props.active ? "#434343" : "#6C6C6C")};
  border-radius: 50%;
`;

const BusinessesSection = styled(Section0)`
  text-align: center;
  margin-bottom: 50px;
`;

const BusinessesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border-radius: 10px;
    padding: 10px;
  }
`;


const TrustedLogo = styled.img`
  height: 80px;
  cursor: pointer;
  width: auto;
  margin-bottom: 20px;
`;

const TrustedDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const TrustedDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "#434343" : "#6C6C6C")};
  border-radius: 50%;
`;



const ServingCountries = styled.h3`
  font-size: 20px;
  margin-top: 25px;
  font-weight: 500;
    line-height: 26px;
    font-family: 'Poppins';
    color: #4E4E4E;
`;


const SolutionsSection = styled(Section0)`
  // background-color: #f8f8f8;
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 25px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SolutionIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
`;

const SolutionContent = styled.div`
  flex: 1;
`;

const SolutionTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SolutionDescription = styled.p`
  font-size: 16px;
`;
const ValueSection = styled(Section0)`
  text-align: center;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;

const StatItem = styled(motion.div)``;

const StatNumber = styled.h3`
  font-size: 36px;
  color: #2f2f2f;
  margin-bottom: 10px;
  border-bottom: 1px solid #5C5C5C;
`;
const IndustryItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? "#0072FF" : "#000000")}; // Text color change
  font-weight: ${(props) => (props.active ? "600" : "normal")};
  background: ${(props) =>
    props.active
      ? "linear-gradient(to right, #DDEEFF 0%, #DDEEFF 100%)"
      : "transparent"};
  padding: 20px 15px;
  width: 100%;
  text-align: left;
  
  &:hover {
    background: linear-gradient(to right, #DDEEFF 0%, #DDEEFF 100%) !important;
    color: #0072FF;
    transition: all 0.3s ease;
    text-decoration: none;
  }
`;

const IndustryIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  transition: all 0.3s ease;
  filter: ${(props) => (props.active ? "none" : "grayscale(100%)")}; 
  fill: ${(props) => (props.active ? "#0072FF" : "#000000")}; // For inline SVG
`;


const StatLabel = styled.p`
  font-size: 20px;
  margin-left: 30px;
  color: #434343;
  font-weight: 500;
    text-align: center;
    line-height: 30px;
`;
const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin: 40px 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

  }
`;

const PartnerLogo = styled(motion.img)`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }
`;
const PartnerLogoTest = styled(motion.img)`
  width: 200px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

const TrustedSection = styled(Section20)`
  text-align: center;
`;

const TrustedGrid = styled(Slider)`
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }
`;

const AwardsGrid = styled(Slider)`
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }
`;
const iconalignleft =styled.div`
  align-self: flex-start; 
`;



// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 36px;
//   font-weight: bold;
//   color: #122740;
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   color: #6B6F82;
//   margin: 20px 0;
//   line-height: 1.6;
// `;







const BlogSection = styled.section`
  padding: 30px 20px;
  background-color: #fff;
`;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 36px;
//   font-weight: bold;
//   color: #122740;
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   color: #6B6F82;
//   margin: 20px 0;
//   line-height: 1.6;
// `;

const BlogsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: flex-start;
`;

const BlogsContent = styled.div`
  width: 60%;
`;

const BlogItem = styled.div`
  margin-bottom: 30px;
  // border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
  text-align: left;
`;

const BlogQuestion = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #122740;
  margin-bottom: 10px;
`;

const BlogToggle = styled.img`
  width: 54px;  /* Updated width */
  height: 54px;  /* Updated height */
  margin-right: 10px;
`;

const BlogAnswer = styled.div`
  margin-top: 10px;
`;

const BlogDescription = styled.p`
  font-size: 14px;
  color: #6B6F82;
  margin-bottom: 10px;
`;

const ReadMore = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const BlogImage = styled.img`
  width: 35%;
  object-fit: contain;
`;

const ViewAllButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: not-allowed;
  margin: 40px auto 0;
  display: block;  /* Center the button */
  &:hover {
    background-color: #0056b3;
  }
`;

const BlogSectionComponent = ({ blogData }) => {
  const [openBlog, setOpenBlog] = useState(-1);
}


const Home = () => {

  const workData = {
    'Education': [
      {
        image: sumitian,
        title: 'Sumitian',
        description: 'Sumit EdTech, a prominent coaching institute based in Bihar, embarked on a mission to enhance its educational offerings beyond live classes. The primary business goal was to create a robust Learning Management System (LMS) through a dedicated application. The aim was to enable students from classes nine to twelve to access recorded sessions and study materials post-live classes. Through an intuitive admin portal, instructors could upload content, which students could then access offline and download for future reference. This initiative sought to bridge the gap between live sessions and self-paced learning, providing a holistic educational experience for subscribed students',
      },
      {
        image: practical,
        title: 'Practically',
        description: 'Practically, an ad tech application designed for K-6 to K-12 students embarked on a mission to revolutionize vocational education. The primary business goal was to create a comprehensive platform that seamlessly integrates virtual reality, mobile application, and chatbot technologies. This innovative approach aimed to enhance student learning experiences by providing interactive, hands-on content. With a focus on K-12 education, Practically aimed to deliver a platform where students could access courses, videos, simulations, and virtual reality content, fostering a dynamic and engaging educational environment. The ultimate objective was to contribute to the improvement of educational outcomes and facilitate effective learning for students.',
      },
    ],
    'Healthcare': [
      {
        image: dooper,
        title: 'Dooper',
        description: 'Dooper embarked on a mission to redefine healthcare services by providing a comprehensive application catering to all hospital needs. The primary objective was to create a user-friendly platform that seamlessly integrates ambulance booking, appointments with health assistants and doctors, prescription management, lab test scheduling, and more. The goal was to enhance the overall efficiency of hospital operations and improve patient care.',
      },
      {
        image: womb,
        title: 'WOMB',
        description: 'WOMB, a custom website and application, was conceptualized to offer comprehensive support to individuals navigating the transformative journey of pregnancy. The business goal was to create a holistic platform that not only tracked essential metrics but also provided coaching, valuable content, and mental health support. The aim was to empower expectant parents with a centralized hub that catered to their physical, emotional, and informational needs. The user app and admin panel were designed to facilitate a seamless exchange of information and support throughout the pregnancy experience',
      },
    ],
    'Transportation': [
      {
        image: reroutee,
        title: 'Reeroute',
        description: 'The Reeroute Trucking Application aims to revolutionize the logistics industry by providing a comprehensive solution that optimizes trucking operations for transporters, consignors, vehicle owners, drivers, administrators, and sales teams. By streamlining processes and leveraging advanced technology, Reeroute enhances efficiency, transparency, and profitability across the supply chain',
      },
      {
        image: sam,
        title: 'SAM Auto Pooling ',
        description: 'SAM, an auto-pooling application, strives to redefine commuting in Bangalore by providing a convenient and sustainable transportation solution. The primary goal is to optimize travel for users by introducing auto-pooling options, reducing traffic congestion, and promoting eco-friendly modes of transportation. SAM aims to enhance the daily commute experience, making it not just efficient but also socially responsible.SAM, an auto-pooling application, strives to redefine commuting in Bangalore by providing a convenient and sustainable transportation solution. The primary goal is to optimize travel for users by introducing auto-pooling options, reducing traffic congestion, and promoting eco-friendly modes of transportation. SAM aims to enhance the daily commute experience, making it not just efficient but also socially responsible.',
      },
    ],
    'Real Estate': [
      {
        image: appreaze,
        title: 'Appreaz',
        description: 'Appreaz sought to address the growing demand for efficient residential management by developing a comprehensive solution. The goal was to empower residents to seamlessly manage financial transactions, facility bookings, and community interactions within a secure digital ecosystem. The overarching objective was to enhance the overall living experience while simplifying administrative tasks for both residents and management',
      },
      {
        image: inte,
        title: 'INRE',
        description: 'INRE Global aspires to revolutionize the real estate sector by creating a user-friendly platform that streamlines the buying and selling of properties for both customers and administrators. The primary business goal is to enhance efficiency in real estate transactions by leveraging innovative technology solutions. The aim is to attract more customers and provide a seamless user experience, ultimately transforming the traditional real estate landscape.',
      },
    ],
    'Investment': [
      {
        image: samtosh,
        title: 'Santosh Investment',
        description: 'Santosh aims to revolutionize the real estate investment experience by providing a seamless platform for investors to effortlessly manage their portfolios. With flexible registration, secure payment integration, and automatic monthly payouts, our goal is to empower investors with a user-friendly solution that simplifies the investment process.',
      },
      {
        image: mountain,
        title: 'Mountain Run',
        description: 'Mountain Run, an Android gaming platform, aimed to scale up its mobile game application to expand the user base and elevate the gaming experience. The goal was to introduce captivating features, enhance graphics, and weave an engaging narrative, establishing Mountain Run as a premier choice for endless running adventures on Android devices. The focus extended beyond entertainment to create a dynamic and ever-evolving gameplay experience that fosters player loyalty.',
      },
      {
        image: exar,
        title: 'Exar World',
        description: 'In pursuit of shaping the future of the internet, Exar World’s embarked on the visionary goal of developing an innovative metaverse that would redefine online interactions. Additionally, the primary objective was to create a dynamic and immersive virtual world, surpassing conventional digital experiences by integrating cutting-edge technologies such as blockchain and virtual reality. Exar World’s aimed to pioneer the next era of online engagement by providing users with unprecedented metaverse experiences, transcending the limitations of traditional internet platforms.',
      }
    ],
    'Agriculture': [
      {
        image: dronekarna,
        title: 'Dronekaraan',
        description: 'In response to the evolving needs of the agriculture sector, our goal with the Dronekaaran Booking Application was to empower farmers with a cutting-edge solution for pesticide distribution. The primary objective was to streamline the booking process, ensuring farmers could easily request drone-assisted services while providing partners and administrators with robust tools for efficient management. By harnessing the power of drones, we aimed to enhance productivity, reduce costs, and contribute to sustainable agricultural practices',
      }
    ]
  };
  
  const navigate=useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Track active slide on change
    customPaging: (i) => (
      <div
        style={{
          width: "13px",
          height: "13px",
          marginTop: "30px",
          backgroundColor: activeSlide === i ? "#333" : "#ccc", // Apply color to active dot
          borderRadius: "50%",
          margin: "0 8px",
          opacity: 1,
        }}
      ></div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  const carouselSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Track active slide on change
    customPaging: (i) => (
      <div
        style={{
          width: "13px",
          height: "13px",
          marginTop: "28px",
          backgroundColor: activeSlide === i ? "#333" : "#ccc", // Apply color to active dot
          borderRadius: "50%",
          margin: "0 8px",
          opacity: 1,
        }}
      ></div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };

  
  const { ref: refValue, inView: inViewValue } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const { ref: refPartners, inView: inViewPartners } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [activeIndustry, setActiveIndustry] = useState('Education');
  const [expandedBlog, setExpandedBlog] = useState(0);
  const [activeExpertise, setActiveExpertise] = useState("Expertise");
  const [openBlog, setOpenBlog] = useState(0);

  const expertiseList = [
    "Expertise",
    "Frontend Technologies",
    "Backend Technologies",
    "Mobile Technologies",
    "Frameworks",
    "Cloud Technologies",
    "eCommerce",
    "Web 3.0",
  ];

  const techItems = {
    Expertise: [
      { logo: nodejs, name: "Node JS", url: "https://nodejs.org/en/" },
      { logo: blockchain, name: "Blockchain", url: "https://www.blockchain.com/" },
      { logo: aiml, name: "AI/ML", url: "https://www.aiml.com/" },
      { logo: laravel, name: "Laravel", url: "https://laravel.com/" },
      { logo: wordpress, name: "Wordpress" , url: "https://wordpress.org/"},
      { logo: shopify, name: "Shopify", url: "https://shopify.com/" },
    ],
    "Frontend Technologies": [
      { logo: reactIcon, name: "React JS", url: "https://reactjs.org/" },
      { logo: nextjs, name: "Next.js", url: "https://nextjs.org/" },
      { logo: angular, name: "Angular" , url: "https://angular.io/"},
      { logo: vuejs, name: "Vue JS", url: "https://vuejs.org/" },
      { logo: typescript, name: "TypeScript" ,  url: "https://www.typescriptlang.org/"},
      { logo: html, name: "HTML" },
    ],
    "Backend Technologies": [
      { logo: nodejs, name: "Node JS", url: "https://nodejs.org/en/" },
      { logo: php, name: "PHP", url: "https://www.php.net/" },
      { logo: net, name: ".net" , url: "https://dotnet.microsoft.com/en-us/"},
      { logo: python, name: "Python", url: "https://www.python.org/" },
      { logo: java, name: "Java", url: "https://www.java.com/en/" },
      { logo: ror, name: "Ruby on Rails", url: "https://rubyonrails.org/" },
    ],
    "Mobile Technologies": [
      { logo: flutter, name: "Flutter", url: "https://flutter.dev/" },
      { logo: android, name: "Android", url: "https://www.android.com/" },
      { logo: ios, name: "iOS" , url: "https://www.ios.com/"},
      { logo: ionic, name: "Ionic", url: "https://ionicframework.com/" },
      { logo: native, name: "React Native" , url: "https://reactnative.dev/"},
      { logo: swift, name: "Swift" , url: "https://swift.org/"},
      { logo: kotlin, name: "Kotlin" , url: "https://kotlinlang.org/"},
    ],
    Frameworks: [
      { logo: laravel, name: "Laravel", url: "https://laravel.com/" },
      { logo: express, name: "Express JS", url: "https://expressjs.com/" },
      { logo: django, name: "Django", url: "https://www.djangoproject.com/" },
      { logo: meanmern, name: "MEAN/MERN", url: "https://www.mean.io/" },
      { logo: wordpress, name: "Wordpress" , url: "https://wordpress.org/"},
      { logo: codeig, name: "CodeIgniter", url: "https://codeigniter.com/" },
      { logo: shopify, name: "Shopify", url: "https://shopify.com/" },
    ],
    "Cloud Technologies": [
      { logo: aws, name: "AWS", url: "https://aws.amazon.com/" },
      { logo: azure, name: "Azure" , url: "https://azure.microsoft.com/"},
      { logo: googlecloud, name: "Google Cloud" , url: "https://cloud.google.com/"},
      { logo: alibaba, name: "Alibaba ", url: "https://www.alibabacloud.com/zh-cn/" },
      { logo: DO, name: "Digital Ocean" , url: "https://www.digitalocean.com/"},
    ],
    eCommerce: [
      { logo: meanmern, name: "MEAN/MERN" , url: "https://www.mean.io/"},
      { logo: wordpress, name: "Wordpress" , url: "https://wordpress.org/"},
      { logo: shopify, name: "Shopify" , url: "https://shopify.com/"},
      { logo: woo, name: "Woo Commerce", url: "https://woocommerce.com/" },
      { logo: drupal, name: "Drupal" , url: "https://www.drupal.org/"},
      { logo: prista, name: "Pristashop" , url: "https://www.pristashop.com/"},
    ],
    "Web 3.0": [
      { logo: blockchain, name: "Blockchain", url: "https://en.bitcoin.it/wiki/Blockchain" },
      { logo: metaverse, name: "Metaverse",url: "https://www.metaverse.com/" },
      { logo: nft, name: "NFT", url: "https://nft.tech/" },
    ],
  };

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
    { src: google, alt: "Google" , url: "https://www.google.com/"},
    { src: googleCloud, alt: "Google Cloud" , url: "https://cloud.google.com/"},
    { src: razorpay, alt: "Razorpay" , url: "https://razorpay.com/"},
    { src: facebook2, alt: "Facebook", url: "https://www.facebook.com/" },
    { src: linkedin2, alt: "LinkedIn", url: "https://www.linkedin.com/" },
    { src: aws, alt: "AWS", url: "https://aws.amazon.com/" },
    { src: kaspersky, alt: "Kaspersky", url: "https://www.kaspersky.com/" },
    { src: bing, alt: "Bing" , url: "https://www.bing.com/"},
    { src: payu, alt: "PayU", url: "https://payu.in/" },
    { src: digitalOcean, alt: "Digital Ocean", url: "https://www.digitalocean.com/" },
    { src: newfold, alt: "Newfold", url: "https://www.newfold.com/" },
    { src: bitrix24, alt: "Bitrix24", url: "https://bitrix24.com/" },
  ];

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

  

  const industryData = {
    'Education': { icon: educationIcon },
    'Healthcare': { icon: healthcareIcon },
    'Transportation': { icon: logisticsIcon },
    'Real Estate': { icon: realEstateIcon },
    'Investment': { icon: financeIcon },
    'Agriculture': { icon: foodIcon }
  };

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

  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      text: "Solminica has been a game-changer for our business. Their team delivered a top-notch solution that exceeded our expectations. We're thrilled with the results!",
      author: "Mark Rise",
      position: "CEO, Founder",
    },
    {
      text: "Since implementing Solminica, we've seen a 25% increase in website traffic and a 15% boost in conversions. The team at Solminica truly understands our business needs.",
      author: "Jane Doe",
      position: "Marketing Director",
    },
    {
      text: "Working with Solminica felt like a true partnership. They were responsive, proactive, and always willing to go the extra mile. We highly recommend their services.",
      author: "John Smith",
      position: "CEO, Founder",
    },
  ];
  return (
    <HomeWrapper>
      <SocialBar>
        <SidebarSocialIcon2 href="#" target="_blank">
          <img src={telegram} alt="Telegram" />
        </SidebarSocialIcon2>
        <SidebarSocialIcon href="#" target="_blank">
          <img src={whatsapp} alt="WhatsApp" />
        </SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank">
          <img src={twitter} alt="Twitter" />
        </SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank">
          <img src={facebook} alt="Facebook" />
        </SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank">
          <img src={instagram} alt="Instagram" />
        </SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank">
          <img src={linkedin} alt="LinkedIn" />
        </SidebarSocialIcon>
        <SidebarSocialIcon href="#" target="_blank">
          <img style={{ marginTop: "100px" }} src={followus} alt="Follow Us" />
        </SidebarSocialIcon>
      </SocialBar>
      <Container2>
      <Container>
        
        <HeroSection data-aos="fade-up">
          <HeroContentWrapper>
            <HeroTitle>
              <GradientText>Transform</GradientText>
              <br /> <DarkText>Your Business</DarkText>{" "}
              <GradientText>With</GradientText>
              <br />
              <GradientText>Solminica</GradientText>
            </HeroTitle>
            <Subtitle22>
              We are firm believers that the best software comes from <br /> small
              agile and highly skilled teams.
            </Subtitle22>
            <ConsultButtonHome onClick={() => navigate("/contact")}>Consult Now!</ConsultButtonHome>
          </HeroContentWrapper>
          <HeroImage src={transformImage} alt="Transform your business" />
        </HeroSection>
        <TrustedBy data-aos="fade-up">
  <TrustedTitle>
    Trusted by the world's leading organizations
  </TrustedTitle>
  <LogoGrid>
    <Logo
      src={tp_home_1}
      alt="Trusted Partner 1"
      onClick={() => window.open("https://apwrims.ap.gov.in/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={tp_home_2}
      alt="Trusted Partner 2"
      onClick={() => window.open("https://www.sacredgroves.earth/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={tp_home_3}
      alt="Trusted Partner 3"
      onClick={() => window.open("https://www.rainbowhospitals.in/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={tp_home_4}
      alt="Trusted Partner 4"
      onClick={() => window.open("https://www.powergrid.in/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={trusted_partner_5}
      alt="Trusted Partner 5"
      onClick={() => window.open("https://bambinoagro.com/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={trusted_partner_6}
      alt="Trusted Partner 6"
      onClick={() => window.open("https://suvarnabhoomiinfra.com/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={trusted_partner_7}
      alt="Trusted Partner 7"
      onClick={() => window.open("https://www.merinolaminates.com/en/", "_blank")}
      style={{ cursor: "pointer" }}
    />
    <Logo
      src={trusted_partner_8}
      alt="Trusted Partner 8"
      onClick={() => window.open("https://www.bachpanglobal.com/", "_blank")}
      style={{ cursor: "pointer" }}
    />
  </LogoGrid>
</TrustedBy>

      </Container>

      <ServicesSection data-aos="fade-up">
  <ServicesContainer>
    <ServicesSideImage
      src={our_digital_left_side_image}
      alt="Digital Transformation"
    />
    <ServicesContent>
      <TitleOurDigital>
        Our Digital <br /> Transformation Services
      </TitleOurDigital>
      <SubtitleOurDigital>
        With a blend of reliable & long-term partner than just a Partner
      </SubtitleOurDigital>
      <ServiceGrid>
        <ServiceItem
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_web_dev} alt="Website Development" className="icon-align-left" />
          <ServiceTitle>Website Development</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_mobile_dev} alt="Mobile app Development"    className="icon-align-left" />
          <ServiceTitle>Mobile app Development</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_hire} alt="Hire Professionals"    className="icon-align-left" />
          <ServiceTitle>Hire Professionals</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_blockchain} alt="Blockchain Development"    className="icon-align-left" />
          <ServiceTitle>Blockchain Development</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={4}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_digi_marketing} alt="Digital Marketing"    className="icon-align-left"  />
          <ServiceTitle>Digital <br />Marketing</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={5}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_public_relation} alt="Public Relations and Media"    className="icon-align-left" />
          <ServiceTitle>Public Relations and Media</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={6}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_cyber_security} alt="Cyber Security" />
          <ServiceTitle>Cyber <br />Security</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={7}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_quality_test} alt="Quality Testing" />
          <ServiceTitle>Quality <br />Testing</ServiceTitle>
        </ServiceItem>
        <ServiceItem
          custom={8}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon src={our_digital_cloud} alt="Cloud and Devops" />
          <ServiceTitle>Cloud and Devops</ServiceTitle>
        </ServiceItem>
        <ServiceItem2
          onClick={()=>{navigate('/contact')}}
          custom={9}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <ServiceIcon2 src={our_digital_lets_conect_last_card} alt="Let's Connect" />
        </ServiceItem2>
      </ServiceGrid>
    </ServicesContent>
  </ServicesContainer>
</ServicesSection>
      </Container2>

      <BgWrapper>
      <BgWrapperRight>
      <ShinyLine />

      <TechnologiesSection data-aos="fade-up">
  <Container>
    <Title>Technologies that drive Growth</Title>
    <Subtitle>
      Solminica creates enterprise solutions that seamlessly blend
      traditional methods with the latest innovations.
    </Subtitle>
    <TechGrid>
      <TechColumn width="40%">
        <ExpertiseList>
          {expertiseList.map((item) => (
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
      <TechColumn width="60%">
        <TechItemsContainer>
          {techItems[activeExpertise]?.map((tech, index) => (
            <TechItem key={index} style={{ padding: "20px", textAlign: "center" }}>
              <TechLogo
                src={tech.logo}
                alt={tech.name}
                style={{ width: "80px", height: "80px", objectFit: "contain" }}
              />
              <TechName
                style={{
                  fontSize: "18px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                {tech.name}
              </TechName>
            </TechItem>
          ))}
        </TechItemsContainer>
      </TechColumn>
    </TechGrid>
    <BottomRow>
      <BottomText>
        Our expertise in designing and building digital solutions
        authorises us to develop <br />bespoke solutions
      </BottomText>
      <ConsultButton onClick={() => navigate("/contact")}>Consult Now!</ConsultButton>
    </BottomRow>
  </Container>
</TechnologiesSection>


      <ShinyLine />

      <SolutionsSection data-aos="fade-up">
      <Container>
        <Title>
          Avail Profit-Driven Development Solutions<br />
          to Resolve All-Scale Business Needs
        </Title>
        <Subtitle>
          Solminica creates enterprise solutions that seamlessly blend
          traditional methods with the latest <br/> innovations.
        </Subtitle>
        <SolutionGrid>
          <SolutionItem
            custom={0}
            initial="hiddenLeft"
            whileInView="visible"
            variants={cardVariants2}
            viewport={{ once: true }}
          >
            <SolutionIcon src={smbs} alt="SMBs" />
            <SolutionContent>
              <SolutionTitle>SMBs</SolutionTitle>
              <SolutionDescription>
                Seamlessly turn your small business into a well-known brand
                with the top development assistance. For decades, we have been
                helping small-scale businesses earn.
              </SolutionDescription>
            </SolutionContent>
          </SolutionItem>

          <SolutionItem
            custom={1}
            initial="hiddenRight"
            whileInView="visible"
            variants={cardVariants2}
            viewport={{ once: true }}
          >
            <SolutionIcon src={startup} alt="Startups" />
            <SolutionContent>
              <SolutionTitle>Startups</SolutionTitle>
              <SolutionDescription>
                Let your startups climb the ladder of success in no time. We
                offer software development services for startups and help them
                get more funding as a brand.
              </SolutionDescription>
            </SolutionContent>
          </SolutionItem>

          <SolutionItem
            custom={2}
            initial="hiddenLeft"
            whileInView="visible"
            variants={cardVariants2}
            viewport={{ once: true }}
          >
            <SolutionIcon src={enterprise} alt="Enterprises" />
            <SolutionContent>
              <SolutionTitle>Enterprises</SolutionTitle>
              <SolutionDescription>
                Seek robust and customised enterprise mobility solutions to
                meet your business needs. Our each development layer is
                engineered with experience and expertise.
              </SolutionDescription>
            </SolutionContent>
          </SolutionItem>

          <SolutionItem
            custom={3}
            initial="hiddenRight"
            whileInView="visible"
            variants={cardVariants2}
            viewport={{ once: true }}
          >
            <SolutionIcon src={agency} alt="Agencies" />
            <SolutionContent>
              <SolutionTitle>Agencies</SolutionTitle>
              <SolutionDescription>
                Our technical approach makes it accessible for offshore
                agencies to get exposure, improve business' financial growth,
                and increase sales & marketing potential.
              </SolutionDescription>
            </SolutionContent>
          </SolutionItem>
        </SolutionGrid>
      </Container>
    </SolutionsSection>

      </BgWrapperRight>
      </BgWrapper>


      <Container>
        <HireSection data-aos="fade-up">
          <HireContent>
            <TitleOurDigital>
              Are you looking to hire Efficient<br /> Mobile app and Web Development<br />
              Team for your Business ?
            </TitleOurDigital>
            <SubtitleOurDigital>
              Solminica serves you with the most innovative Mobile App & web
              development <br />team that will take your business to a whole new
              level.
            </SubtitleOurDigital>
            <Button onClick={() => navigate("/contact")}>Hire now</Button>
          </HireContent>
          <HireImage src={digitalservices} alt="Hire Efficient Team" />
        </HireSection>
      </Container>
      <ValueSection ref={refValue}>
        <Container>
          <Title>Solminica Deliver <br /> Value for Money</Title>
          <Subtitle>
            Solminica delivers unparalleled value for money by offering top-quality, innovative technology <br /> solutions at competitive prices.
            Our customized services are designed to fit any budget, ensuring<br />
            efficiency and productivity enhancements for businesses of all sizes. With exceptional customer<br /> support, we are your trusted
            partner in achieving technological success.
          </Subtitle>
          <StatsGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inViewValue ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
          {[
            { end: 99, suffix: '%', label: '◾ Satisfied Clients' },
            { end: 160, suffix: '+', label: '◾ Tech Enthusiasts' },
            { end: 30, suffix: '+', label: '◾ Industries covered' },
            { end: 550, suffix: '+', label: '◾ Projects Delivered' },
            { end: 80, suffix: '%+', label: '◾ Impressive growth of Product' },
            { end: 3.4, suffix: 'M+', label: '◾ Lines of Code' },
            { end: 20, suffix: '+', label: '◾ Industry Certified Team members' },
            { end: 850, suffix: '+', label: '◾ On time project delivery.' },
          ].map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inViewValue ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <StatNumber>
                <CountUp start={inViewValue ? 0 : null} end={stat.end} suffix={stat.suffix} duration={2.5} />
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
        <BottomRow>
            <BottomText>
              Our expertise in designing and building digital solutions authorizes us to develop <br />bespoke solutions
            </BottomText>
            <ConsultButton onClick={() => navigate("/contact")}>Consult Now!</ConsultButton>
          </BottomRow>
        </Container>
      </ValueSection>
      <WorkSection data-aos="fade-up">
    <Container>
      <Title>Our Work</Title>
      <Subtitle>Solminica working on different sectors with giving them the proof and solutions.</Subtitle>
      <WorkGrid>
        <IndustryList>
        {Object.keys(industryData).map((industry) => (
  <IndustryItem
    key={industry}
    active={activeIndustry === industry}
    onClick={() => setActiveIndustry(industry)}
  >
    <IndustryIcon
      src={industryData[industry].icon}
      alt={industry}
      active={activeIndustry === industry} // Pass active prop for dynamic color change
    />
    {industry}
  </IndustryItem>
))}

        </IndustryList>
        <WorkDetails>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <WorkDetailTitle>{activeIndustry}</WorkDetailTitle>
            <WorkDetailTitle2>View All {'->'}</WorkDetailTitle2>
          </div>
        
          <WorkCards>
            {workData[activeIndustry]?.map((card, index) => (
              <div key={index}>
                <WorkCard>
                  <OverlayImage src={card.image} alt={`${activeIndustry} Project Overlay`} />
                </WorkCard>
                <WorkCardContent>
                  <WorkCardTitle>{card.title}</WorkCardTitle>
                  <WorkCardDescription>{card.description}</WorkCardDescription>
                  <WorkCardTitle>Technologies</WorkCardTitle>
                  <TechStack>
                    <TechIcon src={html} alt="html" />
                    <TechIcon src={css} alt="css" />
                    <TechIcon src={jquery} alt="jquery" />
                    <TechIcon src={bootstrap} alt="bootstrap" />
                    <TechIcon src={php} alt="php" />
                    <TechIcon src={ajax} alt="ajax" />
                    <TechIcon src={mysql} alt="mysql" />
                    <TechIcon src={laravel} alt="laravel" />
                  </TechStack>
                  <ReadMore href="#">Read More →</ReadMore>
                </WorkCardContent>
              </div>
            ))}
          </WorkCards>
        </WorkDetails>
      </WorkGrid>
    </Container>
  </WorkSection>

      <ProcessSection data-aos="fade-up">
        <Container>
          <Title>Development Process we Follow</Title>
          <Subtitle>
            At Solminica, we follow an agile development methodology,
            emphasizing iterative development,<br/> continuous improvement, and
            collaboration among cross-functional teams. Our approach<br/> prioritizes
            customer feedback, adapts quickly to changing requirements, and
            delivers high-quality<br/> software solutions efficiently.
          </Subtitle>
          <ProcessImage
            src={developmentProcessImage}
            alt="Development Process"
          />
        </Container>
      </ProcessSection>

      <TechnologiesSection data-aos="fade-up">
        <Container>
          <Title>Key industries we serve</Title>
          <Subtitle>
            We understand the unique challenges and opportunities facing each
            industry we serve. Our tailored<br/> digital solutions are designed to
            streamline operations, enhance customer experiences, and drive<br/>
            growth for businesses of all sizes.
          </Subtitle>
          <IndustriesGrid>
          {[
            { img: industries_1, name: "Banking, Financial Services & Insurance" },
            { img: industries_2, name: "Media, News & Entertainment" },
            { img: industries_3, name: "Retail & Consumer Services" },
            { img: industries_4, name: "Travel, Tourism & Leisure" },
            { img: industries_5, name: "EdTech & Learning" },
            { img: industries_6, name: "Real estate & Prop Tech" },
            { img: industries_7, name: "Pharma & Healthcare" },
            { img: industries_8, name: "Business & IT Services" },
            { img: industries_9, name: "Automotive & Manufacturing" },
            { img: industries_10, name: "Energy & Utilities" },
          ].map((industry, index) => (
            <IndustryGridItem key={index}>
              <IndustryGridIcon
                src={industry.img}
                alt={industry.name}
              />
              <IndustryName style={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: '30px',
                textAlign: 'center'
              }}>{industry.name}</IndustryName>
            </IndustryGridItem>
          ))}
      </IndustriesGrid>
          <BottomRow>
            <BottomText>
              Our expertise in designing and building digital solutions authorises us to develop <br/>bespoke solutions
            </BottomText>
            <ConsultButton onClick={() => navigate("/contact")}>Consult Now!</ConsultButton>
          </BottomRow>
        </Container>
      </TechnologiesSection>

      <TechnologiesSection data-aos="fade-up">
        <Container>
          <Title>Our Customers love what we do</Title>
          <Subtitle>
            Our customers are at the center of everything we do, and we're
            passionate about delivering exceptional solutions <br />that exceed their
            expectations. We take pride in providing innovative services that
            delight and satisfy their needs, <br />fostering long-term relationships
            built on trust, quality, and reliability. Our dedication to customer
            satisfaction is <br />unwavering, and we continually strive to improve and
            refine our offerings to meet their evolving needs.
          </Subtitle>
          <CustomerTestimonial>
            <TestimonialImage src={Customers} alt="Customer Testimonial" />
            <TestimonialContent>
            <TestimonialText>{testimonials[activeDot].text}</TestimonialText>
        <TestimonialAuthor>{testimonials[activeDot].author}</TestimonialAuthor>
        <TestimonialPosition>{testimonials[activeDot].position}</TestimonialPosition>
        <AwardsDots>
          {testimonials.map((_, index) => (
            <AwardsDot
              key={index}
              active={index === activeDot}
              onClick={() => setActiveDot(index)}
            />
          ))}
        </AwardsDots>
            </TestimonialContent>
          </CustomerTestimonial>
        </Container>
      </TechnologiesSection>
<Container>

<AwardsSection data-aos="fade-up">
        <Title>Awards and Recognition</Title>
        <Subtitle>
          "We're proud to be recognized as a top performer by Clutch and Appfutura, acknowledging our expertise in IT services, software development, and iOS app creation."
        </Subtitle>
        <AwardsGrid {...carouselSettings}>
          <AwardImage src={award_1} alt="Clutch Award" />
          <AwardImage src={award_2} alt="Top Software Development Company" />
          <AwardImage src={award_3} alt="Top App Developers" />
          <AwardImage src={award_4} alt="Top Mobile App Developers" />
          <AwardImage src={award_5} alt="Top Rated App Development Company" />
          <AwardImage src={award_6} alt="Top Rated App Development " />
          <AwardImage src={award_5} alt="Top Rated Software Development Company" />
        </AwardsGrid>
      </AwardsSection>

</Container>

      <BusinessesSection  data-aos="fade-up">
        <Container>
          <Title>Why Businesses Prefer Us?</Title>
          <Subtitle>
            As the leading IT company, Solminica guarantees client satisfaction
            through surveys, punctual <br />delivery, established SLAs for support,
            superior quality in deliverables, and a commendable <br />client retention
            record
          </Subtitle>
          <BusinessesGrid>
            {businessReasons.map((item, index) => (
              <BusinessItem key={index}>
                <BusinessIcon src={item.icon} alt={item.text} />
                <BusinessName>{item.text}</BusinessName>
              </BusinessItem>
            ))}
          </BusinessesGrid>
        </Container>
      </BusinessesSection>
          <Container>

      <TrustedSection data-aos="fade-up">
        <Title>Trusted By 100+ Happy Brands</Title>
        <Subtitle>
          At Solminica, we are dedicated to driving continuous innovation and digital transformation for our stakeholders. We help our clients stay aligned with the latest technology trends, giving them a competitive advantage.
        </Subtitle>
        <TrustedGrid {...carouselSettings2}>
          <TrustedLogo src={trusted_partner_1} alt="Trusted Partner 1" />
          <TrustedLogo src={trusted_partner_2} alt="Trusted Partner 2" />
          {/* <TrustedLogo src={trusted_partner_3} alt="Trusted Partner 3" /> */}
          <TrustedLogo src={trusted_partner_4} alt="Trusted Partner 4" />
          <TrustedLogo src={trusted_partner_5} alt="Trusted Partner 5" />
          <TrustedLogo src={trusted_partner_6} alt="Trusted Partner 6" />
          <TrustedLogo src={trusted_partner_7} alt="Trusted Partner 7" />
          <TrustedLogo src={trusted_partner_8} alt="Trusted Partner 8" />
        </TrustedGrid>
      </TrustedSection>
          </Container>
      <BlogSection data-aos="fade-up">
      <Container>
        <Title>Blogs</Title>
        <Subtitle>
          Our blog is your gateway to the world of IT and software development. Explore a wide range of<br />
          topics, from practical how-to guides to in-depth analysis of industry trends. Stay informed and<br />
          inspired by our team of experts.
        </Subtitle>
        <BlogsContainer>
          <BlogsContent>
            {blogData.map((blog, index) => (
              <BlogItem key={index}>
                <BlogQuestion onClick={() => setOpenBlog(openBlog === index ? -1 : index)}>
                  <BlogToggle src={openBlog === index ? negative : positive} alt="Toggle" />
                  {blog.title}
                </BlogQuestion>
                {openBlog === index && (
                  <BlogAnswer>
                    <BlogDescription>{blog.description}</BlogDescription>
                    <ReadMore href="#">Read More →</ReadMore>
                  </BlogAnswer>
                )}
              </BlogItem>
            ))}
          </BlogsContent>
          <BlogImage src={blogs} alt="Blog illustration" />
        </BlogsContainer>
        <ViewAllButton>View all</ViewAllButton>
      </Container>
    </BlogSection>


      <Section ref={refPartners}>
        <Container>
          <Title>Our Enterprise Technology partners</Title>
          <Subtitle>
            We are proud to partner with industry-leading technology providers to deliver innovative solutions<br /> for our clients. Our partnerships
            with companies like Google Cloud, Razorpay, AWS, and Microsoft<br />
            empower us to leverage cutting-edge technologies and platforms to drive digital transformation<br /> and growth for your business.
          </Subtitle>
          <PartnersGrid>
            {partnerLogos.map((partner, index) => (
              <PartnerLogo
                onClick={() => window.open(partner.url, "_blank")}
                key={index}
                src={partner.src}
                alt={partner.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewPartners ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              />
            ))}
          </PartnersGrid>
        <ServingCountries>SERVING IN 70+ COUNTRIES</ServingCountries>
        <CountriesList>
  <a href="#">Web Development Company in India</a> |
  <a href="#">Web Development Company in USA</a> |
  <a href="#">Web Development Company in UK</a> |
  <a href="#">Web Development Company in Singapore</a> |
  <a href="#">Web Development Company in Germany</a> |
  <a href="#">Web Development Company in Canada</a> |
  <a href="#">Web Development Company in Australia</a> |
  <a href="#">Web Development Company in Ireland</a> |
  <a href="#">Web Development Company in Dublin</a> |
  <a href="#">Web Development Company in New Zealand</a> |
  <a href="#">Web Development Company in Netherlands</a> |
  <a href="#">Web Development Company in Norway</a> |
  <a href="#">Web Development Company in UAE</a> |
  <a href="#">Web Development Company in Saudi Arabia</a> |
  <a href="#">Web Development Company in Qatar</a> |
  <a href="#">Web Development Company in Finland</a> |
  <a href="#">Web Development Company in Mexico</a> |
  <a href="#">Web Development Company in Switzerland</a> |
  <a href="#">Web Development Company in Spain</a> |
  <a href="#">Web Development Company in France</a> |
  <a href="#">and more...</a> |
  <a href="#">Mobile Development Company in India</a> |
  <a href="#">Mobile Development Company in USA</a> |
  <a href="#">Mobile Development Company in UK</a> |
  <a href="#">Mobile Development Company in Singapore</a> |
  <a href="#">Mobile Development Company in Germany</a> |
  <a href="#">Mobile Development Company in Canada</a> |
  <a href="#">Mobile Development Company in Australia</a> |
  <a href="#">Mobile Development Company in Ireland</a> |
  <a href="#">Mobile Development Company in Dublin</a> |
  <a href="#">Mobile Development Company in New Zealand</a> |
  <a href="#">Mobile Development Company in Netherlands</a> |
  <a href="#">Mobile Development Company in Norway</a> |
  <a href="#">Mobile Development Company in UAE</a> |
  <a href="#">Mobile Development Company in Saudi Arabia</a> |
  <a href="#">Mobile Development Company in Qatar</a> |
  <a href="#">Mobile Development Company in Finland</a> |
  <a href="#">Mobile Development Company in Mexico</a> |
  <a href="#">Mobile Development Company in Switzerland</a> |
  <a href="#">Mobile Development Company in Spain</a> |
  <a href="#">Mobile Development Company in France</a> |
  <a href="#">and more...</a>
</CountriesList>

      </Container>
    </Section>
    </HomeWrapper>
  );
};

export default Home;
