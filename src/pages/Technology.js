import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import technology from '../assets/images/technology.png';
import technology_1 from '../assets/images/technology_1.png';
import work_on from '../assets/images/work_on.png';
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
  padding-top: 100px;
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

const WhyChooseSection = styled(Section)`
  text-align: center;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const FeatureItem = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
`;

const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const FeatureContent = styled.div`
  text-align: left;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
`;

const ServicesSection = styled(Section)`
  text-align: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const ServiceItem = styled.div`
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
`;

const ExperienceSection = styled(Section)`
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const ProjectItem = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  padding: 20px;
  margin: 0;
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

const FAQSection = styled(Section)`
  text-align: center;
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
const Technology = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    { title: 'Vast Libraries', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Scalability', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Lower Costs', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Frameworks', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Real-Time Apps', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Proxy Server', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const services = [
    'Custom Node.Js Development',
    'Node.Js Microservices Development',
    'Node.Js Integration Solution',
    'Node.Js Mobile App Services',
    'Node.Js API Development',
    'Node.Js Plugin Development'
  ];

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

  return (
    <PageWrapper>
      <Container>
        <HeroSection data-aos="fade-up">
          <HeroContent>
            <Title>Node.js Development Company & Team Augmentation Services</Title>
            <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
            <Button>Get Quote</Button>
          </HeroContent>
          <HeroImage src={technology} alt="Node.js Development" />
        </HeroSection>
      </Container>

      <WhyChooseSection data-aos="fade-up">
        <Container>
          <Title>Why Choose <span>Node.Js Development?</span></Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon src={technology_1} alt={feature.title} />
                <FeatureContent>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureContent>
              </FeatureItem>
            ))}
          </FeatureGrid>
        </Container>
      </WhyChooseSection>

      <ServicesSection data-aos="fade-up">
        <Container>
          <Title>Our <span>Node.js Development</span> Services</Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceItem key={index}>
                <ServiceTitle>{service}</ServiceTitle>
                <ServiceDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServiceDescription>
              </ServiceItem>
            ))}
          </ServiceGrid>
        </Container>
      </ServicesSection>

      <ExperienceSection data-aos="fade-up">
        <Container>
          <Title>See Our <span>Experience</span></Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <ProjectGrid>
            {[1, 2, 3].map((project) => (
              <ProjectItem key={project}>
                <ProjectImage src={work_on} alt={`Project ${project}`} />
                <ProjectTitle>Rainbow Children's Hospital</ProjectTitle>
              </ProjectItem>
            ))}
          </ProjectGrid>
        </Container>
      </ExperienceSection>

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

      <FAQSection data-aos="fade-up">
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

export default Technology;