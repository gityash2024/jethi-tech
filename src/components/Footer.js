import React from 'react';
import styled from 'styled-components';
import usa from '../assets/images/usa.png';
import uae from '../assets/images/uae.png';
import india from '../assets/images/india.png';
import youtube from '../assets/images/youtube.png';
import telegram from '../assets/images/telegramblack.png';
import github from '../assets/images/githubblack.png';
import instagram from '../assets/images/instagramblack.png';
import linkedin from '../assets/images/linkedinblack.png';
import facebook from '../assets/images/facebookblack.png';
import twitter from '../assets/images/twitterblack.png';
import product_1 from '../assets/images/checkinpilot.png';
import product_2 from '../assets/images/smsjet.png';
import product_3 from '../assets/images/schoolmaster.png';
import product_4 from '../assets/images/sentiproof.png';
import footer_logo from '../assets/images/footer_logo.png';
import { useNavigate } from 'react-router-dom';

const FooterTag = styled.footer`
  background-color: #2F69B1;
  font-family: 'Poppins', sans-serif;
  color: white;
  padding: 40px 20px; // Adjusted padding for better spacing
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px; // Increased for better spacing
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoText = styled.p`
  font-size: 14px; // Updated based on Figma font size
  line-height: 1.6;
  margin: 0;
  max-width: 60%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MiddleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px; // Increased to match the Figma gap
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const QuickLinksColumn = styled.div`
  display: flex;
  gap: 50px; // Increased gap between links
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px; // Smaller gap on mobile
  }
`;

const QuickLinksSubColumn = styled.div`
`;

const FooterLink = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin-bottom: 10px; // Adjusted based on Figma
  font-size: 14px; // Updated font size to match Figma
  &:hover {
    text-decoration: underline;
  }
`;
const FooterLink2 = styled.a`
  color: white;
  cursor: not-allowed;
  text-decoration: none;
  display: block;
  margin-bottom: 10px; // Adjusted based on Figma
  font-size: 14px; // Updated font size to match Figma
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px; // Updated gap between icons based on Figma
  margin-bottom: 15px;
  justify-content: center;
`;

const FooterSocialIcon = styled.img`
cursor: pointer;
  width: 28px; // Increased size to match Figma
  height: 28px;
`;

const ProductsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Increased gap between product logos
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 0 8px;
  }
`;

const ProductImage = styled.img`
  height: 60px; // Increased height to match Figma
  cursor: pointer;
  width: auto;
`;



const Flag = styled.img`
  width: 130px; // Adjusted to match Figma
  height: auto;
`;

const SocialProductsColumn = styled.div`  // Added missing SocialProductsColumn definition
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

const CopyrightRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px; // Updated font size
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  @media (min-width: 769px) {
    text-align: left;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const GradientText = styled.span`
  cursor: pointer;
  background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: Sofia, cursive;
  font-size: 30px;
  color: white;
`;
const LocationSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LocationItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 0 30px;
  font-size: 13px;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 10%;
    height: 80%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, #53A4FF, transparent);
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    border-bottom: 1px solid #53A4FF;
    width: 100%;
    &:last-child {
      border-bottom: none;
    }
    &::after {
      display: none;
    }
  }
`;
const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <FooterTag>
      <FooterContent>
        <TopRow>
          <LogoSection>
            <GradientText onClick={() => handleNavigation('/')} ><b>Solminica</b></GradientText>
            <LogoText>
              Dreaming big? Let Solminica be your one-stop destination for turning visions into successful business endeavors. With our comprehensive technology support, staff augmentation, and venture capital funding, your dreams are closer than ever.
            </LogoText>
          </LogoSection>
        </TopRow>

        <MiddleRow>
          <QuickLinksColumn>
            <QuickLinksSubColumn>
              <FooterLink onClick={() => handleNavigation('/')}>Home</FooterLink>
              <FooterLink2 title='commign-soon'>How it works</FooterLink2>
              <FooterLink onClick={() => handleNavigation('/about')}>About</FooterLink>
              <FooterLink2 title='commign-soon'>Features</FooterLink2>
              <FooterLink2 title='commign-soon'>Address</FooterLink2>
            </QuickLinksSubColumn>
            <QuickLinksSubColumn>
              <FooterLink2 title='commign-soon'>Testimonials</FooterLink2>
              <FooterLink onClick={() => handleNavigation('/contact')}>Contact</FooterLink>
              <FooterLink2 title='commign-soon'>FAQ</FooterLink2>
              <FooterLink2 title='commign-soon' >Blog</FooterLink2>
              <FooterLink onClick={() => handleNavigation('/privacy-policy')}>Privacy Policy</FooterLink>
            </QuickLinksSubColumn>
          </QuickLinksColumn>
          <SocialProductsColumn> {/* Added SocialProductsColumn here */}
            <SocialIcons>
              <FooterSocialIcon src={linkedin} alt="LinkedIn" />
              <FooterSocialIcon src={twitter} alt="Twitter" />
              <FooterSocialIcon src={facebook} alt="Facebook" />
              <FooterSocialIcon src={instagram} alt="Instagram" />
              <FooterSocialIcon src={github} alt="GitHub" />
              <FooterSocialIcon src={youtube} alt="YouTube" />
              <FooterSocialIcon src={telegram} alt="Telegram" />
            </SocialIcons>
            <ProductsSection>
              <ProductImage onClick={()=>{navigate('/contact')}} src={product_1} alt="CHECKIN PILOT" />
              <ProductImage onClick={()=>{navigate('/contact')}} src={product_2} alt="SMS JET" />
              <ProductImage onClick={()=>{navigate('/contact')}} src={product_3} alt="SchoolMaster" />
              <ProductImage onClick={()=>{navigate('/contact')}} src={product_4} alt="SentiProof" />
            </ProductsSection>
          </SocialProductsColumn>
        </MiddleRow>

        <LocationSection>
          <LocationItem>
            <Flag src={usa} alt="USA Flag" />
            <h3>USA</h3>
            <p>Portland</p>
            <p>2709 N Hayden Island Dr STE 852364 Portland, Oregon, 97217, USA</p>
            <p>Email: <a style={{ color: 'white' ,textDecoration:'none'}}  href="mailto:sales@jethitech.com">sales@jethitech.com</a></p>
            <p>Phone: <a style={{ color: 'white' ,textDecoration:'none'}}  href="tel:+18324008144">+1 832 400 8144</a></p>
          </LocationItem>
          <LocationItem>
            <Flag src={india} alt="India Flag" />
            <h3>INDIA</h3>
            <p>Rajasthan</p>
            <p>MAX21 Circuit House, 3rd Floor, Plot No. 72, Shri Gopal Nagar, Sirsi Road, Jaipur 302034</p>
            <p>Email: <a style={{ color: 'white' ,textDecoration:'none'}}  href="mailto:sales@jethitech.com">sales@jethitech.com</a></p>
            <p>Phone: <a style={{ color: 'white' ,textDecoration:'none'}}  href="tel:+18324008144">+1 832 400 8144</a></p>
          </LocationItem>
          <LocationItem>
            <Flag src={uae} alt="UAE Flag" />
            <h3>UAE</h3>
            <p>Dubai</p>
            <p>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E</p>
            <p>Email: <a style={{ color: 'white',textDecoration:'none' }} href="mailto:sales@jethitech.com">sales@jethitech.com</a></p>
            <p>Phone: <a style={{ color: 'white',textDecoration:'none' }}  href="tel:+971562383551">+971 56 238 3551</a></p>
          </LocationItem>
        </LocationSection>

        <CopyrightRow>
          <Copyright>
            Copyright © 2017 - 2024 Solminica. All rights reserved.
          </Copyright>
          <Copyright>
            <a style={{cursor:'not-allowed',textDecoration:'none',color:'white'}} title='commign-soon'>Sitemap</a> | <a href='/privacy-policy'>Privacy Policy</a> | <a href='/terms-conditions'>TnC</a> | <a style={{cursor:'not-allowed',textDecoration:'none',color:'white'}} title='commign-soon'>Refund Policy</a> | <a style={{cursor:'not-allowed',textDecoration:'none',color:'white'}} title='commign-soon'>Code of Conduct</a>
          </Copyright>
        </CopyrightRow>

        <Copyright style={{ fontSize: '10px', textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>
          Disclaimer: All logos, images, product names, brands and other trademarks featured or referred to within this website (www.jethitech.com) are the property of their respective trademark holders. These trademark holders are not affiliated with Solminica, our products, services, or our websites. They do not sponsor or endorse Solminica or any of our products or services. These references are provided for informational purposes only.
        </Copyright>
      </FooterContent>
    </FooterTag>
  );
};

export default Footer;
