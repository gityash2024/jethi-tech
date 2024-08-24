import React from 'react';
import styled from 'styled-components';
import work from '../assets/images/work.png';
import work_on from '../assets/images/work_on.png';
import award_1 from '../assets/images/award_1.png';
import award_2 from '../assets/images/award_2.png';
import award_3 from '../assets/images/award_3.png';
import award_4 from '../assets/images/award_4.png';
import award_5 from '../assets/images/award_5.png';
import Businesses_1 from '../assets/images/Businesses_1.png';
import Businesses_2 from '../assets/images/Businesses_2.png';
import Businesses_3 from '../assets/images/Businesses_3.png';
import Businesses_4 from '../assets/images/Businesses_4.png';
import Businesses_5 from '../assets/images/Businesses_5.png';
import Businesses_6 from '../assets/images/Businesses_6.png';
import Businesses_7 from '../assets/images/Businesses_7.png';
import Businesses_8 from '../assets/images/Businesses_8.png';
import Businesses_9 from '../assets/images/Businesses_9.png';
import Businesses_10 from '../assets/images/Businesses_10.png';
import Businesses_11 from '../assets/images/Businesses_11.png';
import Businesses_12 from '../assets/images/Businesses_12.png';
import Customers from '../assets/images/Customers.png';
import trusted_partner_1 from '../assets/images/trusted_partner_1.png';
import trusted_partner_2 from '../assets/images/trusted_partner_2.png';
import trusted_partner_3 from '../assets/images/trusted_partner_3.png';
import trusted_partner_4 from '../assets/images/trusted_partner_4.png';
import trusted_partner_5 from '../assets/images/trusted_partner_5.png';
import trusted_partner_6 from '../assets/images/trusted_partner_6.png';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Poppins', sans-serif;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const OurWorkSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const OurWorkContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  span {
    color: #0066CC;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const OurWorkImage = styled.img`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  padding: 15px;
  margin: 0;
`;

const LoadMoreButton = styled.button`
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 22px;
  argin-left: 538px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AwardsSection = styled(Section)`
  text-align: center;
`;

const AwardsTitle = styled.h2`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const AwardsDescription = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AwardsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const AwardImage = styled.img`
  height: 100px;
  width: auto;
`;

const AwardsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const AwardsDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#333' : '#ccc'};
  border-radius: 50%;
`;

const BusinessesSection = styled(Section)`
  text-align: center;
`;

const BusinessesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BusinessIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const BusinessName = styled.p`
  font-size: 14px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BusinessItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TestimonialSection = styled(Section)`
  text-align: center;
`;

const TestimonialTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TestimonialDescription = styled.p`
  font-size: 18px;
  max-width: 1000px;
  margin: 0 auto 40px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TestimonialCard = styled.div`
  display: flex;
  // background-color: #f8f8f8;
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TestimonialImage = styled.img`
  width: 300px;
  margin-right: 40px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const TestimonialContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.6;
  color: #666;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

const TestimonialPosition = styled.p`
  font-size: 14px;
  color: #666;
`;

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TestimonialDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#0066CC' : '#ccc'};
  border-radius: 50%;
  margin: 0 5px;
`;

const TrustedSection = styled(Section)`
  text-align: center;
`;

const TrustedTitle = styled.h2`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const TrustedDescription = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 1000px;
  margin: 0 auto 40px;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TrustedGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const TrustedLogo = styled.img`
  height: 60px;
  width: auto;
`;

const TrustedDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const TrustedDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${props => props.active ? '#333' : '#ccc'};
  border-radius: 50%;
`;

const Work = () => {
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

  return (
    <Container>
      <OurWorkSection>
        <OurWorkContent>
          <Title>Our <span>Work</span></Title>
          <Description>
            Solminica creates inspirational designs and robust solutions for Web and mobile apps. We
            combine our expertise in tech & design to craft innovative digital solutions that lead the way in your industry.
          </Description>
        </OurWorkContent>
        <OurWorkImage src={work} alt="Our Work" />
      </OurWorkSection>

      <Section>
        <ProjectsGrid>
          {[...Array(9)].map((_, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={work_on} alt={`Project ${index + 1}`} />
              <ProjectTitle>Rainbow Children's Hospital</ProjectTitle>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        <LoadMoreButton>Load More</LoadMoreButton>
      </Section>

      <AwardsSection>
        <AwardsTitle>Awards and Recognition</AwardsTitle>
        <AwardsDescription>
          We're proud to be recognized as a top performer by Clutch and Appfutura, acknowledging our
          expertise in IT services, software development, and iOS app creation.
        </AwardsDescription>
        <AwardsGrid>
          <AwardImage src={award_1} alt="Clutch Award" />
          <AwardImage src={award_2} alt="Top Software Development Company" />
          <AwardImage src={award_3} alt="Top App Developers" />
          <AwardImage src={award_4} alt="Top Mobile App Developers" />
          <AwardImage src={award_5} alt="Top Rated App Development Company" />
          <AwardImage src={award_5} alt="Top Rated Software Development Company" />
        </AwardsGrid>
        <AwardsDots>
          <AwardsDot active />
          <AwardsDot />
          <AwardsDot />
          <AwardsDot />
        </AwardsDots>
      </AwardsSection>

      <BusinessesSection>
        <Title>Why Businesses Prefer Us?</Title>
        <Description>
          As the leading IT company, Solminica guarantees client satisfaction through surveys, punctual
          delivery, established SLAs for support, superior quality in deliverables, and a commendable client
          retention record
        </Description>
        <BusinessesGrid>
          {businessReasons.map((item, index) => (
            <BusinessItem key={index}>
              <BusinessIcon src={item.icon} alt={item.text} />
              <BusinessName>{item.text}</BusinessName>
            </BusinessItem>
          ))}
        </BusinessesGrid>
      </BusinessesSection>

      <TestimonialSection>
        <TestimonialTitle>Our Customers love what we do</TestimonialTitle>
        <TestimonialDescription>
          Our customers are at the center of everything we do, and we're passionate about delivering exceptional solutions
          that exceed their expectations. We take pride in providing innovative services that delight and satisfy their needs,
          fostering long-term relationships built on trust, quality, and reliability. Our dedication to customer satisfaction is
          unwavering, and we continually strive to improve and refine our offerings to meet their evolving needs.
        </TestimonialDescription>
        <TestimonialCard>
          <TestimonialImage src={Customers} alt="Customer Testimonial" />
          <TestimonialContent>
            <TestimonialText>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore."
            </TestimonialText>
            <TestimonialAuthor>Mark Rise</TestimonialAuthor>
            <TestimonialPosition>CEO, Founder</TestimonialPosition>
          </TestimonialContent>
        </TestimonialCard>
        <TestimonialDots>
          <TestimonialDot active />
          <TestimonialDot />
          <TestimonialDot />
          <TestimonialDot />
        </TestimonialDots>
      </TestimonialSection>

      <TrustedSection>
        <TrustedTitle>Trusted By 100+ Happy Brands</TrustedTitle>
        <TrustedDescription>
          At Solminica, we are dedicated to driving continuous innovation and digital transformation for our
          stakeholders. We help our clients stay aligned with the latest technology trends, giving them a
          competitive advantage. We are proud to have maintained a 90% client retention rate since 2017.
        </TrustedDescription>
        <TrustedGrid>
          <TrustedLogo src={trusted_partner_1} alt="Trusted Partner 1" />
          <TrustedLogo src={trusted_partner_2} alt="Trusted Partner 2" />
          <TrustedLogo src={trusted_partner_3} alt="Trusted Partner 3" />
          <TrustedLogo src={trusted_partner_4} alt="Trusted Partner 4" />
          <TrustedLogo src={trusted_partner_5} alt="Trusted Partner 5" />
          <TrustedLogo src={trusted_partner_6} alt="Trusted Partner 6" />
        </TrustedGrid>
        <TrustedDots>
          <TrustedDot active />
          <TrustedDot />
          <TrustedDot />
          <TrustedDot />
        </TrustedDots>
      </TrustedSection>
    </Container>
  );
};

export default Work;
