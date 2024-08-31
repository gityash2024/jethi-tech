import React from 'react';
import styled, { keyframes } from 'styled-components';

import about from '../assets/images/about.png';
import award_1 from '../assets/images/award_1.png';
import award_2 from '../assets/images/award_2.png';
import award_3 from '../assets/images/award_3.png';
import award_4 from '../assets/images/award_4.png';
import award_5 from '../assets/images/award_5.png';
import trusted_partner_1 from '../assets/images/trusted_partner_1.png';
import trusted_partner_2 from '../assets/images/trusted_partner_2.png';
import trusted_partner_3 from '../assets/images/trusted_partner_3.png';
import trusted_partner_4 from '../assets/images/trusted_partner_4.png';
import trusted_partner_5 from '../assets/images/trusted_partner_5.png';
import trusted_partner_6 from '../assets/images/trusted_partner_6.png';
import Customers from '../assets/images/Customers.png';
import context from '../assets/images/context.png';
import sacred_card from "../assets/images/sacred_card.png";
import trusted_partner_5_card from "../assets/images/trusted_partner_5_card.png";
import trusted_partner_6_card from "../assets/images/trusted_partner_6_card.png";

const AboutWrapper = styled.div`
  font-family: 'Poppins';
`;

const Section = styled.section`
  padding: 80px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  line-height: 62.4px;
    font-weight: 700;
    font-family: 'Poppins';

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #4E4E4E;
  margin-bottom: 30px;
font-weight: 400;
    line-height: 30px;
    font-family: 'Poppins';
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
     background-color: #015BCC;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Poppins';
      line-height: 20px;
    font-weight: 600;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
  }
`;

const AwardsSection = styled(Section)`
  text-align: center;
`;

const AwardsTitle = styled.h2`
  font-size: 36px;
  color: #434343;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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
const shine = keyframes`
  0% {
    background-position: 200% 0%;
  }
  100% {
    background-position: -200% 0%;
  }
`;


const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

const AwardImage = styled.img`
  width: 100%;
  height: auto;
`;

const TrustedSection = styled(Section)`
  // background-color: #f8f8f8;
  text-align: center;
`;

const TrustedTitle = styled.h2`
  font-size: 48px;
  color: #434343;
  margin-bottom: 40px;
   font-weight: 700;
    line-height: 62.4px;
    text-align: center
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const TrustedGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;


const TrustedLogo = styled.img`
  height: 100px;
  cursor: pointer;
  width: auto;
`;

const TestimonialSection = styled(Section)`
  text-align: center;
`;

const TestimonialTitle = styled.h2`
  font-size: 36px;
  color: #434343;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const TestimonialCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
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



const AwardsDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "#434343" : "#ccc")};
  border-radius: 50%;
`;

const AwardsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const CustomerTestimonial = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 40px;
  margin-top: 40px;
  margin-bottom: 50px;
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

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;
`;

const FormContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;



const FormTitle = styled.h1`
  font-size: 24px;
  color: #333333;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  color: #666;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  padding: 10px;
  font-size: 16px;
`;

const Captcha = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 2;
`;

const CaptchaInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 50px;
  margin-right: 10px;
`;

const CaptchaOperator = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  padding: 10px 20px;
  background-color: #0066CC;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;



const InfoBox = styled.div`
  background-image: url(${context});
  background-size: cover;
  background-position: center;
  color: #ffffff; // White text for better contrast
  padding: 40px; // Increase padding for better spacing
  border-radius: 8px; // Soft rounded corners
  font-family: 'Arial', sans-serif; // Modern, readable font
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); // Subtle shadow for depth
  display: flex;
  flex-direction: column;
  align-items: center; // Center alignment for all content
  text-align: center; // Center text
`;

const InfoTitle = styled.h2`
  font-size: 28px; // Larger font size for title
  margin-bottom: 20px; // Space below the title
`;

// Subtitle styling
const InfoSubtitle = styled.p`
  font-size: 18px; // Readable text size
  margin-bottom: 20px; // Space below subtitles
`;

// Styling for the list of benefits
const InfoList = styled.ul`
  list-style: none; // No bullets
  padding: 0; // No padding
  margin: 0; // No margin
`;

// List item styling
const InfoItem = styled.li`
  font-size: 16px; // Consistent font size
  margin-bottom: 10px; // Space between items
  &:before {
    content: '• '; // Custom bullet point
    color: #00BFFF; // Stylish bullet color
    font-size: 20px; // Larger bullet size
    padding-right: 10px; // Space after the bullet
  }
`;
const Section0 = styled.section`
  padding: 0px 0;
  @media (max-width: 768px) {
    padding: 0px 0;
  }
`;
const TechnologiesSection = styled(Section0)`
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
const ConsultButtonHome = styled(Button)`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;
const Contact = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // Adjust based on how many logos you want visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <AboutWrapper>
      <Container>
        <HeroSection>
          <HeroContent>
          <HeroTitle>
              <DarkText>Partner With us to</DarkText>
              <br /> <GradientText>revolutionize Your</GradientText>{" "}
              <GradientText>industry</GradientText>
             
            </HeroTitle>
            <HeroSubtitle>
              Solminica creates inspirational designs and robust solutions for Web and mobile apps. We combine our expertise in tech & design to craft innovative digital solutions that lead the way in your industry.
            </HeroSubtitle>
            <ConsultButtonHome>Get Quote</ConsultButtonHome>
          </HeroContent>
          <HeroImage src={about} alt="Partner with us" />
        </HeroSection>

        <FormSection>
      <FormContainer>
        <FormTitle>Let's work together to turn your vision into a reality</FormTitle>
        <Form>
          <Input type="text" placeholder="Name*" required />
          <Input type="email" placeholder="Email*" required />
          <Select defaultValue="">
            <option value="" disabled>Contact Number*</option>
          </Select>
          <Select defaultValue="">
            <option value="" disabled>Your Budget</option>
          </Select>
          <Select defaultValue="">
            <option value="" disabled>Interested in</option>
          </Select>
          <Select defaultValue="">
            <option value="" disabled>How did you learn about us</option>
          </Select>
          <TextArea placeholder="Project Requirements" rows={4} />
          <Captcha>
            <CaptchaInput type="text" value="5" disabled />
            <CaptchaOperator>+</CaptchaOperator>
            <CaptchaInput type="text" value="8" disabled />
            <CaptchaOperator>=</CaptchaOperator>
            <CaptchaInput type="text" placeholder="Captcha code" />
          </Captcha>
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </FormContainer>
      <InfoBox>
        <InfoTitle>You have an Idea</InfoTitle>
        <InfoSubtitle>We have the experience to transform your idea in Digital Reality</InfoSubtitle>
        <InfoSubtitle>Here's what you will get for submitting your contact details</InfoSubtitle>
        {/* <InfoList> */}
        <InfoBox>
      {/* <InfoTitle>You have an Idea</InfoTitle>
      <InfoSubtitle>We have the experience to transform your idea in Digital Reality</InfoSubtitle>
      <InfoSubtitle>Here's what you will get for submitting your contact details:</InfoSubtitle>
      <InfoList>
        <InfoItem>45 minutes of free consultation</InfoItem>
        <InfoItem>A strict non-disclosure agreement</InfoItem>
        <InfoItem>Free Market & Competitive Analysis</InfoItem>
        <InfoItem>Suggestions on Revenue Models & Go to Market Strategy</InfoItem>
        <InfoItem>No obligation Technical specs & Proposal</InfoItem>
        <InfoItem>Guidance on Pre-launch & Post-launch marketing</InfoItem> */}
      {/* </InfoList> */}
    </InfoBox>
      </InfoBox>
    </FormSection>

       
    <Container>

      <AwardsSection data-aos="fade-up">
        <Title>Awards and Recognition</Title>
        <Subtitle>
          "We're proud to be recognized as a top performer by Clutch and
          Appfutura, acknowledging our expertise in IT <br />services, software
          development, and iOS app creation."
        </Subtitle>
        <AwardsGrid {...carouselSettings}>
          <AwardImage src={award_1} alt="Clutch Award" />
          <AwardImage src={award_2} alt="Top Software Development Company" />
          <AwardImage src={award_3} alt="Top App Developers" />
          <AwardImage src={award_4} alt="Top Mobile App Developers" />
          <AwardImage src={award_5} alt="Top Rated App Development Company" />
          <AwardImage
            src={award_5}
            alt="Top Rated Software Development Company"
          />
        </AwardsGrid>
      </AwardsSection>
</Container>

<TrustedSection data-aos="fade-up">
        <Container>
          <Title>Trusted By 100+ Happy Brands</Title>
          <Subtitle>
            At Solminica, we are dedicated to driving continuous innovation and
            digital transformation for our <br />stakeholders. We help our clients
            stay aligned with the latest technology trends, giving them a <br />
            competitive advantage. We are proud to have maintained a 90% client
            retention rate since 2017.
          </Subtitle>
          <TrustedGrid {...carouselSettings}>
            <TrustedLogo onClick={() => window.open("https://www.rainbowhospitals.in/", "_blank")} src={trusted_partner_1} alt="Trusted Partner 1" />
            <TrustedLogo onClick={() => window.open("https://apwrims.ap.gov.in/", "_blank")} src={trusted_partner_2} alt="Trusted Partner 2" />
            <TrustedLogo onClick={() => window.open("https://www.powergrid.in/", "_blank")} src={trusted_partner_3} alt="Trusted Partner 3" />
            <TrustedLogo onClick={() => window.open("https://www.sacredgroves.earth/", "_blank")} src={sacred_card} alt="Trusted Partner 4" />
            <TrustedLogo onClick={() => window.open("https://suvarnabhoomiinfra.com/", "_blank")} src={trusted_partner_5_card} alt="Trusted Partner 5" />
            <TrustedLogo onClick={() => window.open("https://bambinoagro.com/", "_blank")} src={trusted_partner_6_card} alt="Trusted Partner 6" />
          </TrustedGrid>
        </Container>
      </TrustedSection>
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
              <TestimonialText>
                " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore. 
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore."
              </TestimonialText>
              <TestimonialAuthor>Mark Rise</TestimonialAuthor>
              <TestimonialPosition>CEO, Founder</TestimonialPosition>
              <AwardsDots>
          <AwardsDot active />
          <AwardsDot />
          <AwardsDot />
          <AwardsDot />
        </AwardsDots>
            </TestimonialContent>
          </CustomerTestimonial>
        </Container>
      </TechnologiesSection>
      </Container>
    </AboutWrapper>
  );
};

export default Contact;
