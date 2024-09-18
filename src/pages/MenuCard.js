import React from 'react';
import styled from 'styled-components';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import phoneCall from '../assets/images/phone-call.svg';


const CardContainer = styled.div`
  width: 228px;
  height: auto;
  padding: 0px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #DDEEFF;
  gap: 10px;
  border-left: 2px solid #000; /* Based on the provided border style */
  opacity: 1;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #122740;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #6B6F82;
  margin: 0;
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #122740;
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 16px; /* Adjust size as needed */
  height: 16px; /* Adjust size as needed */
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 20px 0;
  display: block;
  text-align: center;
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const FooterText = styled.p`
  font-size: 10px;
  color: #6B6F82;
  text-align: center;
  margin-top: 10px;
`;

const MenuCard = () => {
  return (
    <CardContainer>
      <Title>About Us</Title>
      <Subtitle>Know who we are</Subtitle>
      <Title>Career</Title>
      <Subtitle>Hire best Employees</Subtitle>
      <Title>Blog</Title>
      <Subtitle>Latest information and updates</Subtitle>
      <Title>Contact Us</Title>
      <Subtitle>Get in touch with us</Subtitle>

      <ContactInfo>
        <ContactItem>
          <Icon src={phone} alt="Phone" /> +91 12345 67890
        </ContactItem>
        <ContactItem>
          <Icon src={phoneCall} alt="Phone Call" /> +1(123) 567 7890
        </ContactItem>
        <ContactItem>
          <Icon src={mail} alt="mMail" /> sales@jethitech.com
        </ContactItem>
      </ContactInfo>

      <Button>Get a Quote</Button>

      <SocialIcons>
        <SocialIcon src="/path/to/facebook-icon.png" alt="Facebook" />
        <SocialIcon src="/path/to/instagram-icon.png" alt="Instagram" />
        <SocialIcon src="/path/to/twitter-icon.png" alt="Twitter" />
      </SocialIcons>

      <FooterText>© 2023, All Rights Reserved by Jethitech</FooterText>
      <FooterText>We deliver value with information</FooterText>
      <FooterText>
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          EXPLORE CORPORATE PROFILE →
        </a>
      </FooterText>
    </CardContainer>
  );
};


export default MenuCard;