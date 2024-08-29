import React from 'react';
import styled from 'styled-components';
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
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

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

const Title = styled.h2`
  font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  text-align: center; 
  font-weight:700;
  line-height: 62.4px;
  @media (max-width: 768px) {
    font-size: 28px;
    
  }
     font-family: "Poppins";
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
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }
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



const FormSection = styled(Section)`
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  background-color: #0066CC;
  color: white;
  padding: 30px;
  border-radius: 8px;
  flex: 0 0 40%;

  @media (max-width: 768px) {
    flex: 1;
    margin-bottom: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const InfoSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoList = styled.ol`
  padding-left: 20px;
`;

const InfoItem = styled.li`
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormTitle = styled.h2`
  font-size: 36px;
  color: #434343;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  appearance: none;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  grid-column: span 2;
  resize: vertical;

  @media (max-width: 768px) {
    grid-column: span 1;
    padding: 10px;
  }
`;

const Captcha = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const CaptchaInput = styled(Input)`
  width: 60px;
  text-align: center;
`;

const CaptchaOperator = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  grid-column: span 2;
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 12px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
  

  @media (max-width: 768px) {
    grid-column: span 1;
    padding: 10px;
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

const Contact = () => {
  return (
    <AboutWrapper>
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>Partner with us to revolutionize your industry</HeroTitle>
            <HeroSubtitle>
              Solminica creates inspirational designs and robust solutions for Web and mobile apps. We combine our expertise in tech & design to craft innovative digital solutions that lead the way in your industry.
            </HeroSubtitle>
            <Button>Get Quote</Button>
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
                <option value="" disabled>
                  Contact Number*
                </option>
              </Select>
              <Select defaultValue="">
                <option value="" disabled>
                  Your Budget
                </option>
              </Select>
              <Select defaultValue="">
                <option value="" disabled>
                  Interested in
                </option>
              </Select>
              <Select defaultValue="">
                <option value="" disabled>
                  How did you learn about us
                </option>
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
            <InfoList>
              <InfoItem>45 minutes of free consultation</InfoItem>
              <InfoItem>A strict non-disclosure agreement</InfoItem>
              <InfoItem>Free Market & Competitive Analysis</InfoItem>
              <InfoItem>Suggestions on Revenue Models & Go to Market Strategy</InfoItem>
              <InfoItem>No obligation Technical specs & Proposal</InfoItem>
              <InfoItem>Guidance on Pre-launch & Post-launch marketing</InfoItem>
            </InfoList>
          </InfoBox>
        </FormSection>

       
      <AwardsSection>
        <Title>Awards and Recognition</Title>
        <Subtitle>
          "We're proud to be recognized as a top performer by Clutch and
          Appfutura, acknowledging our expertise in IT <br />services, software
          development, and iOS app creation."
        </Subtitle>
        <AwardsGrid>
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
        <AwardsDots>
          <AwardsDot active />
          <AwardsDot />
          <AwardsDot />
          <AwardsDot />
        </AwardsDots>
      </AwardsSection>

        <TrustedSection>
          <TrustedTitle>Trusted By 100+ Happy Brands</TrustedTitle>
          <Subtitle>
            At Solminica, we are dedicated to driving continuous innovation and
            digital transformation for our <br />stakeholders. We help our clients
            stay aligned with the latest technology trends, giving them a <br />
            competitive advantage. We are proud to have maintained a 90% client
            retention rate since 2017.
          </Subtitle>
          <TrustedGrid>
            <TrustedLogo src={trusted_partner_1} alt="Trusted Partner 1" />
            <TrustedLogo src={trusted_partner_2} alt="Trusted Partner 2" />
            <TrustedLogo src={trusted_partner_3} alt="Trusted Partner 3" />
            <TrustedLogo src={trusted_partner_4} alt="Trusted Partner 4" />
            <TrustedLogo src={trusted_partner_5} alt="Trusted Partner 5" />
            <TrustedLogo src={trusted_partner_6} alt="Trusted Partner 6" />
          </TrustedGrid>
        </TrustedSection>

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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
    </AboutWrapper>
  );
};

export default Contact;
