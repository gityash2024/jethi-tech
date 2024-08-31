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
  font-family: 'Poppins';
  color: white;
  padding: 20px 15px;
`;

const FooterContent = styled.div`
  font-family: 'Poppins';
  max-width: 1200px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoSection = styled.div`
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoImage = styled.img`
  font-family: 'Poppins';
  width: 130px;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const LogoText = styled.p`
  font-family: 'Poppins';
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MiddleRow = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const QuickLinksColumn = styled.div`
  font-family: 'Poppins';
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const QuickLinksSubColumn = styled.div`
  font-family: 'Poppins';
`;

const SocialProductsColumn = styled.div`
  font-family: 'Poppins';
  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const FooterLink = styled.a`
  font-family: 'Poppins';
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  font-family: 'Poppins';
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  justify-content: center;
`;

const FooterSocialIcon = styled.img`
  font-family: 'Poppins';
  width: 25px;
  height: 25px;
`;

const ProductsSection = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: center;
  margin: 0 15px;
  @media (max-width: 768px) {
    margin: 0 8px;
  }
`;

const ProductImage = styled.img`
  height: 50px;
  cursor: pointer;
  font-family: 'Poppins';
  width: auto;
`;

const LocationSection = styled.div`
  font-family: 'Poppins';
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LocationItem = styled.div`
  font-family: 'Poppins';
  text-align: center;
  flex: 1;
  padding: 0 15px;
  font-size: 13px;
  @media (max-width: 768px) {
    padding: 15px 0;
    border-bottom: 1px solid #53A4FF;
    width: 100%;
    &:last-child {
      border-bottom: none;
    }
  }
`;

const Flag = styled.img`
  font-family: 'Poppins';
  width: 125px;
  height: auto;
  margin-bottom: 0x;
`;

const CopyrightRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Poppins';
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: 'Poppins';
  font-size: 12px;
  text-align: center;
  @media (min-width: 769px) {
    text-align: left;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #ffffff 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: Sofia, cursive;
  font-size: large;
  color: white;
`;

const SocialIcon = styled.a`
  display: inline-block;
  font-family: 'Poppins';
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
            <GradientText ><b>Solminica</b></GradientText>
            <LogoText>
              Dreaming big? Let Solminica be your one-stop destination for turning visions into successful business endeavors. With our comprehensive technology support, staff augmentation, and venture capital funding, your dreams are closer than ever.
            </LogoText>
          </LogoSection>
        </TopRow>

        <MiddleRow>
          <QuickLinksColumn>
          <QuickLinksSubColumn>
          <FooterLink onClick={() => handleNavigation('/')}>Home</FooterLink>
            <FooterLink onClick={() => handleNavigation('/how-it-works')}>How it works</FooterLink>
            <FooterLink onClick={() => handleNavigation('/about')}>About</FooterLink>
            <FooterLink onClick={() => handleNavigation('/features')}>Features</FooterLink>
            <FooterLink onClick={() => handleNavigation('/address')}>Address</FooterLink>
          </QuickLinksSubColumn>
          <QuickLinksSubColumn>
            <FooterLink onClick={() => handleNavigation('/testimonials')}>Testimonials</FooterLink>
            <FooterLink onClick={() => handleNavigation('/contact')}>Contact</FooterLink>
            <FooterLink onClick={() => handleNavigation('/faq')}>FAQ</FooterLink>
            <FooterLink onClick={() => handleNavigation('/blog')}>Blog</FooterLink>
            <FooterLink onClick={() => handleNavigation('/privacy-policy')}>Privacy Policy</FooterLink>
          </QuickLinksSubColumn>
        </QuickLinksColumn>
        <SocialProductsColumn>
        <SocialIcons>
            <SocialIcon href="https://www.linkedin.com/company/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={linkedin} alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={twitter} alt="Twitter" />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={facebook} alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={instagram} alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="https://github.com/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={github} alt="GitHub" />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={youtube} alt="YouTube" />
            </SocialIcon>
            <SocialIcon href="https://t.me/solminica" target="_blank" rel="noopener noreferrer">
              <FooterSocialIcon src={telegram} alt="Telegram" />
            </SocialIcon>
          </SocialIcons>
          <ProductsSection>
            <ProductImage src={product_1} alt="CHECKIN PILOT" />
            <ProductImage src={product_2} alt="SMS JET" />
            <ProductImage src={product_3} alt="SchoolMaster" />
            <ProductImage src={product_4} alt="SentiProof" />
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
          <a href="#">Sitemap</a> | <a href='/privacy-policy'>Privacy Policy</a> | <a href='/terms-conditions'>TnC</a> | <a href="#">Refund Policy</a> | <a href="/code-of-conduct">Code of Conduct</a>
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