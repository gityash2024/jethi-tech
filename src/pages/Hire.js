import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hire from '../assets/images/hire.png';
import ui from '../assets/images/ui.png';
import web from '../assets/images/web.png';
import mean from '../assets/images/mean.png';
import cross from '../assets/images/cross.png';
import desktop from '../assets/images/desktop.png';
import hire_1 from '../assets/images/hire_1.png';
import hire_2 from '../assets/images/hire_2.png';
import hire_3 from '../assets/images/hire_3.png';
import hire_4 from '../assets/images/hire_4.png';
import hire_5 from '../assets/images/hire_5.png';
import hire_6 from '../assets/images/hire_6.png';
import hire_7 from '../assets/images/hire_7.png';
import hire_8 from '../assets/images/hire_8.png';
import benefits from '../assets/images/benefits.png';
import digitalservices from '../assets/images/digitalservices.png';
import Customers from '../assets/images/Customers.png';
import blogs from '../assets/images/blogs.png';
import negative from '../assets/images/negative.png';
import positive from '../assets/images/positive.png';

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Section = styled.section`
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  span {
    color: #0066CC;
  }
`;  

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
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

const ServicesSection = styled(Section)`
  text-align: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const ServiceItem = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
  text-align: left;
`;

const ServiceIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
`;

const ReasonSection = styled(Section)`
  background-color: #f8f8f8;
`;

const ReasonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const ReasonItem = styled.div`
  text-align: center;
`;

const ReasonIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const ReasonTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const BenefitsSection = styled(Section)``;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BenefitItem = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
`;

const BenefitIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
  font-size: 16px;
`;


const CTASection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const CTAContent = styled.div`
  flex: 1;
  max-width: 50%;
`;

const CTAImage = styled.img`
  flex: 1;
  max-width: 25%;
`;

const TestimonialSection = styled(Section)`
  text-align: center;
`;

const TestimonialCard = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  align-items: center;
`;

const TestimonialImage = styled.img`
  width: 200px;
  margin-right: 40px;
`;

const TestimonialContent = styled.div`
  text-align: left;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
`;
const ViewAllButton = styled(Button)`
  margin-top: 20px;
`;


const TestimonialPosition = styled.p`
  font-size: 14px;
  color: #666;
`;

const FAQSection = styled(Section)`
  // text-align: center;
`;

const FAQContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
`;

const FAQContent = styled.div`
  flex: 1;
  margin-right: 40px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const FAQQuestion = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;

const FAQToggle = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
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
`;

const Hire = () => {
  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(0);

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
            <Title>Hire Developers to build your <span>eCommerce store</span></Title>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
            <Button>Hire Developers</Button>
          </HeroContent>
          <HeroImage src={hire} alt="Hire Developers" />
        </HeroSection>
      </Container>

      <ServicesSection data-aos="fade-up">
        <Container>
          <Title>Our Developers' <span>Expert Services</span></Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <ServiceGrid>
          <ServiceItem>
              <ServiceIcon src={mean} alt="Mean Stack IOT Application Development" />
              <ServiceTitle>Mean Stack IOT Application Development</ServiceTitle>
              <ServiceDescription>Mean Stack is the powerhouse of platforms and software that help the developers to create fastest and slimmest IOT apps which are incredibly efficient. We also provide authentication codes that are used to check the privacy of the data. se.</ServiceDescription>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon src={web} alt="Mean Stack Development & Integration" />
              <ServiceTitle>Mean Stack Development & Integration</ServiceTitle>
              <ServiceDescription>Mean Stack integrates all four top-notch technologies that are a full package for our highly and immersive experienced Mean Stack Developers.</ServiceDescription>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon src={ui} alt="Mean Stack Application Development" />
              <ServiceTitle>Mean Stack Application Development</ServiceTitle>
              <ServiceDescription>The Mean Stack developers of our company are passionate to create highly optimized, robust, and extensive mobile app solution for your business.</ServiceDescription>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon src={desktop} alt="Mean Stack E-Commerce Solutions" />
              <ServiceTitle>Mean Stack E-Commerce Solutions</ServiceTitle>
              <ServiceDescription>E-commerce websites or apps always require flexibility. But Mean Stack is the combination of No-SQL and JS platform that gives much more flexibility while upgradation.</ServiceDescription>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon src={cross} alt="Mean Stack CMS Development" />
              <ServiceTitle>Mean Stack CMS Development</ServiceTitle>
              <ServiceDescription>Mean Stack developers use their extensive experience with the latest and advanced technology to create vigorous, intuitive, and efficient CMS for your business.</ServiceDescription>
            </ServiceItem>
            <ServiceItem>
              <ServiceIcon src={cross} alt="Mean Stack CMS Development" />
              <ServiceTitle>Mean Stack CMS Development</ServiceTitle>
              <ServiceDescription>Mean Stack developers use their extensive experience with the latest and advanced technology to create vigorous, intuitive, and efficient CMS for your business.</ServiceDescription>
            </ServiceItem>
          </ServiceGrid>
        </Container>
      </ServicesSection>

      <ReasonSection data-aos="fade-up">
        <Container>
          <Title>Why Hire Developers From <span>Solminica?</span></Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <ReasonGrid>
          <ReasonItem>
              <ReasonIcon src={hire_1} alt="Highly-skilled Team of Developers" />
              <ReasonTitle>Highly-skilled Team of Developers</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_2} alt="Maintain Oversight & Control" />
              <ReasonTitle>Maintain Oversight & Control</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_3} alt="Flexible Engagement Models" />
              <ReasonTitle>Flexible Engagement Models</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_4} alt="100% In-house Development Staff" />
              <ReasonTitle>100% In-house Development Staff</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_5} alt="Transparency Throughout the Process" />
              <ReasonTitle>Transparency Throughout the Process</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_6} alt="IP Rights Protection" />
              <ReasonTitle>IP Rights Protection</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_7} alt="No Contract Lock-in Periods" />
              <ReasonTitle>No Contract Lock-in Periods</ReasonTitle>
            </ReasonItem>
            <ReasonItem>
              <ReasonIcon src={hire_8} alt="Hand-picked Vetted Talent" />
              <ReasonTitle>Hand-picked Vetted Talent</ReasonTitle>
            </ReasonItem>
          </ReasonGrid>
        </Container>
      </ReasonSection>

      <BenefitsSection data-aos="fade-up">
        <Container>
          <Title>Benefits of Mean Stack Development with <span>Advanced Skill-Sets and Latest Technologies</span></Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <BenefitsGrid>
          <BenefitItem>
              <BenefitIcon src={benefits} alt="Isomorphic Coding" />
              <BenefitTitle>Isomorphic Coding</BenefitTitle>
              <BenefitDescription>Mean Stack technology allows you to code shifting from one framework to another because it uses one language for the coding. So this feature makes it highly reliable.</BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon src={benefits} alt="Easy Switch between Client and Server" />
              <BenefitTitle>Easy Switch between Client and Server</BenefitTitle>
              <BenefitDescription>Mean Stack Development uses only one language for both client-side and server site. Hence, it can easily switch between Client and Server.</BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon src={benefits} alt="Bug-free Development" />
              <BenefitTitle>Bug-free Development</BenefitTitle>
              <BenefitDescription>Our experts deliver secure as well as scalable APIs and also ensure that deliver bug-free Mean Stack Development service. Our developers use rich writing codes and apply stringent quality standards on them.</BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon src={benefits} alt="Mean Stack Functionality and Stability" />
              <BenefitTitle>Mean Stack Functionality and Stability</BenefitTitle>
              <BenefitDescription>Web applications always face the problem of traffic. But mean stack application is developed with Node.JS technology which balances the load on the server in a proper manner.</BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon src={benefits} alt="Mean Stack Consulting" />
              <BenefitTitle>Mean Stack Consulting</BenefitTitle>
              <BenefitDescription>Our Company provides the consultation facility to the clients on their doubts and issues regarding Mean Stack Apps. Our potential Mean Stack developers offer guidance to resolve their issues as well as fulfill their all requirements.</BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon src={benefits} alt="Mean Stack Supports MVC Architecture" />
              <BenefitTitle>Mean Stack Supports MVC Architecture</BenefitTitle>
              <BenefitDescription>Mean Stack development supports MVC architecture to make the development process of Mean Stack hustle-free. MVC architecture is integrated with the JavaScript framework to support asynchronous technique that allows developers to build an app which loads faster.</BenefitDescription>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon src={benefits} alt="Cloud Integration" />
              <BenefitTitle>Cloud Integration</BenefitTitle>
              <BenefitDescription>MongoDB technology of Mean Stack Web Development allows developing, host, and testing app in the cloud. So, MongoDB is minimized the client's disk space cost and the better option for a database system.</BenefitDescription>
            </BenefitItem>
          </BenefitsGrid>
        </Container>
      </BenefitsSection>
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

      <TestimonialSection data-aos="fade-up">
        <Container>
          <Title>Our Customers love what we do</Title>
          <Subtitle>Our customers are at the center of everything we do, and we're passionate about delivering exceptional solutions that exceed their expectations. We take pride in providing innovative services that delight and satisfy their needs, fostering long-term relationships built on trust, quality, and reliability.</Subtitle>
          <TestimonialCard>
            <TestimonialImage src={Customers} alt="Customer Testimonial" />
            <TestimonialContent>
              <TestimonialText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."</TestimonialText>
              <TestimonialAuthor>Mark Rise, CEO, Founder</TestimonialAuthor>
            </TestimonialContent>
          </TestimonialCard>
        </Container>
      </TestimonialSection>

      <FAQSection>
        <Container>
          <Title>FAQ</Title>
          <FAQContainer>
            <FAQContent>
              {faqData.map((item, index) => (
                <FAQItem key={index}>
                  <FAQQuestion onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}>
                    <FAQToggle src={openQuestion === index ? negative : positive} alt="Toggle" />
                    {item.question}
                  </FAQQuestion>
                  {openQuestion === index && <FAQAnswer>{item.answer}</FAQAnswer>}
                </FAQItem>
              ))}
              <ViewAllButton>View all</ViewAllButton>
            </FAQContent>
            <FAQImage src={blogs} alt="FAQ Illustration" />
          </FAQContainer>
        </Container>
      </FAQSection>
    </PageWrapper>
  );
};

export default Hire;