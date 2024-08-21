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
  color: white;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImage = styled.img`
  width: 150px;
  margin-right: 20px;
`;

const LogoText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 70%;
`;

const MiddleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const QuickLinksColumn = styled.div`
  display: flex;
  gap: 40px;
`;

const QuickLinksSubColumn = styled.div``;

const SocialProductsColumn = styled.div``;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const FooterSocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ProductsSection = styled.div`
  display: flex;
  gap: 10px;
`;

const ProductImage = styled.img`
  height: 40px;
  width: auto;
`;

const LocationSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #53A4FF;
  }

  &::before {
    left: 33.33%;
  }

  &::after {
    right: 33.33%;
  }
`;

const LocationItem = styled.div`
  text-align: center;
  flex: 1;
  padding: 0 20px;
`;

const Flag = styled.img`
  width: 50px;
  height: auto;
  margin-bottom: 10px;
`;

const CopyrightRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Copyright = styled.p`
  font-size: 14px;
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
  font-size: x-large;
  color: white;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterTag>
      <FooterContent>
        <TopRow>
          <LogoSection>
            {/* <LogoImage src={footer_logo} alt="Jethi Tech Solutions Pvt. Ltd." /> */}
            <GradientText ><b>Solminica</b></GradientText>

            <LogoText>
              Dreaming big? Let Solminica be your one-stop destination for turning visions into successful business endeavors. With our comprehensive technology support, staff augmentation, and venture capital funding, your dreams are closer than ever.
            </LogoText>
          </LogoSection>
        </TopRow>

        <MiddleRow>
          <QuickLinksColumn>
            <QuickLinksSubColumn>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">How it works</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Address</FooterLink>
            </QuickLinksSubColumn>
            <QuickLinksSubColumn>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            </QuickLinksSubColumn>
          </QuickLinksColumn>
          <SocialProductsColumn>
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
            <p>Email: sales@jethitech.com</p>
            <p>Phone: +1 832 400 8144</p>
          </LocationItem>
          <LocationItem>
            <Flag src={india} alt="India Flag" />
            <h3>INDIA</h3>
            <p>Rajasthan</p>
            <p>MAX21 Circuit House, 3rd Floor, Plot No. 72, Shri Gopal Nagar, Sirsi Road, Jaipur 302034</p>
            <p>Email: sales@jethitech.com</p>
            <p>Phone: +1 832 400 8144</p>
          </LocationItem>
          <LocationItem>
            <Flag src={uae} alt="UAE Flag" />
            <h3>UAE</h3>
            <p>Dubai</p>
            <p>Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E</p>
            <p>Email: sales@jethitech.com</p>
            <p>Phone: +971 56 238 3551</p>
          </LocationItem>
        </LocationSection>

        <CopyrightRow>
          <Copyright>
            Copyright © 2017 - 2024 Solminica. All rights reserved.
          </Copyright>
          <Copyright>
            <a href="#">Sitemap</a> | <a href="#">Privacy Policy</a> | <a href="#">TnC</a> | <a href="#">Refund Policy</a> | <a href="/code-of-conduct">Code of Conduct</a>
          </Copyright>
        </CopyrightRow>

        <Copyright style={{ fontSize: '12px', textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
          Disclaimer: All logos, images, product names, brands and other trademarks featured or referred to within this website (www.jethitech.com) are the property of their respective trademark holders. These trademark holders are not affiliated with Solminica, our products, services, or our websites. They do not sponsor or endorse Solminica or any of our products or services. These references are provided for informational purposes only.
        </Copyright>
      </FooterContent>
    </FooterTag>
  );
};

export default Footer;