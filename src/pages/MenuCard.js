import React from 'react';
import styled from 'styled-components';
import phone from '../assets/images/phone.svg';
import mail from '../assets/images/mail.svg';
import phoneCall from '../assets/images/phone-call.svg';
import github from '../assets/images/githubblack.png';
import instagram from '../assets/images/instagramblack.png';
import linkedin from '../assets/images/linkedinblack.png';
import facebook from '../assets/images/facebookblack.png';
import twitter from '../assets/images/twitterblack.png';
import { useNavigate } from 'react-router-dom';
const CardContainer = styled.div`
  width: 350px; /* Adjusted width to match the desired Figma layout */
  background-color: #DDEEFF;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
// padding-left: 15px;
`;

const Title = styled.h2`
border-left: 2px solid #434343;
  font-size: 30px;
  font-weight: bold;
  color: #434343;
  margin: 0 0 5px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6B6F82;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #434343;
`;

const Icon = styled.img`
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const SocialIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const FooterSection = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
const FooterSection2 = styled.div`
  padding: 2px;
  border-radius: 10px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 12px;
  color: #6B6F82;
  margin: 5px 0;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
`;

const MenuCard = () => {
  const navigate=useNavigate();
  return (
    <CardContainer>
      <Section>
        <div>
          <Title><span style={{marginLeft:"7px"}}>About Us</span></Title>
          <Subtitle>Know who we are</Subtitle>
        </div>
        <div>
          <Title><span style={{marginLeft:"7px"}}>Career</span></Title>
          <Subtitle>Hire best Employees</Subtitle>
        </div>
        <div>
          <Title><span style={{marginLeft:"7px"}}>Blog</span></Title>
          <Subtitle>Latest information and updates</Subtitle>
        </div>
        <div>
          <Title><span style={{marginLeft:"7px"}}>Contact Us</span></Title>
          <Subtitle>Get in touch with us</Subtitle>
        </div>
      </Section>

      <ContactInfo>
        <ContactItem>
          <Icon src={phone} alt="Phone" /><a href="tel: +91 12345 67890"> +91 12345 67890</a>
        </ContactItem>
        <ContactItem>
          <Icon src={phoneCall} alt="Phone Call"  /><a href="tel: +1(123) 567 7890"> +1(123) 567 7890</a>
        </ContactItem>
        <ContactItem>
          <Icon src={mail} alt="Mail" /> <a href="mailto: sales@jethitech.com">sales@jethitech.com</a>
        </ContactItem>
      </ContactInfo>

      <Button onClick={() => navigate('/contact')}>Get a Quote</Button>

      <SocialIcons>
        <SocialIcon src={facebook} alt="Facebook" />
        <SocialIcon src={instagram} alt="Instagram" />
        <SocialIcon src={github} alt="Github" />
        <SocialIcon src={linkedin} alt="Linkedin" />
        <SocialIcon src={twitter} alt="Twitter" />
      </SocialIcons>
      <FooterSection2>
        <FooterText>© 2023, All Rights Reserved by Jethitech</FooterText>
      </FooterSection2>

      <FooterSection>
        <FooterText>We deliver value with information</FooterText>
        <FooterLink href="#">EXPLORE CORPORATE PROFILE →</FooterLink>
      </FooterSection>
    </CardContainer>
  );
};

export default MenuCard;
