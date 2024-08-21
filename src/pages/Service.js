import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import serivce from '../assets/images/serivce.png';
import ui from '../assets/images/ui.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import web from '../assets/images/web.png';
import desktop from '../assets/images/desktop.png';
import cross from '../assets/images/cross.png';
import industries_1 from '../assets/images/industries_1.png';
import industries_2 from '../assets/images/industries_2.png';
import industries_3 from '../assets/images/industries_3.png';
import industries_4 from '../assets/images/industries_4.png';
import industries_5 from '../assets/images/industries_5.png';
import industries_6 from '../assets/images/industries_6.png';
import industries_7 from '../assets/images/industries_7.png';
import industries_8 from '../assets/images/industries_8.png';
import industries_9 from '../assets/images/industries_9.png';
import industries_10 from '../assets/images/industries_10.png';
import developmentProcessImage from '../assets/images/developmentProcessImage.png';
import Customers from '../assets/images/Customers.png';
import blogs from '../assets/images/blogs.png';
import negative from '../assets/images/negative.png';
import positive from '../assets/images/positive.png';

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const Section = styled.section`
  padding: 40px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;



const Button = styled.button`
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 18px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
`;

const DesignSolutionsSection = styled(Section)``;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  background-color: ${props => props.active ? '#0066CC' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #0066CC;
  padding: 20px 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
`;




const ProcessSection = styled(Section)`
  text-align: center;
`;

const ProcessImage = styled.img`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
`;



const CustomerTestimonial = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 40px;
  margin-top: 40px;
`;

const TestimonialImage = styled.img`
  width: 20%;
  margin-right: 40px;
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
const FAQSection = styled(Section)``;

const FAQContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const FAQContent = styled.div`
  flex: 1;
  margin-right: 40px;
`;
const BottomText = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;
const FAQItem = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestion = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;

const FAQToggle = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
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

const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
`;

const HeroTitle = styled.h1`
  font-size: 46px;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const HeroTitle2 = styled.h1`
  font-size: 46px;
  line-height: 1.2;
  margin-bottom: 20px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content: center;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
const Title = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family:'poppins';
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;
const Subtitle2 = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;
const ValueSection = styled.section`
  text-align: center;
  padding: 40px 0;
  // background-color: #f8f8f8;
`;



const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
`;

const StatItem = styled.div``;

const StatNumber = styled.h3`
  font-size: 36px;
  color: #2F2F2F;
  margin-bottom: 10px;
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
const ConsultButton = styled(Button)`
  width: 30%;
`;

const StatLabel = styled.p`
  font-size: 16px;
  margin-left: 30px;
  color: #666;
`;

const SolutionItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
`;

const SolutionIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px; // Adjust space between icon and text
`;

const SolutionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SolutionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SolutionDescription = styled.p`
  font-size: 16px;
`;
const IndustriesSection = styled(Section)`
  // background-color: #f8f8f8;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

const IndustryItem = styled.div`
  text-align: center;
`;

const IndustryIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

const IndustryName = styled.p`
  font-size: 14px;
`;

const IndustrySubsection = styled.div`
  display: flex;
  margin-top: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #2f2f2f;
  justify-content: space-between;
  align-items: center;
`;

const IndustrySubtitle = styled.p`
  font-size: 16px;
  color: #666;
  flex: 1;
`;

const ServiceComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [activeTab, setActiveTab] = useState('Application Design');

  const designSolutions = {
    'Application Design': [
      { icon: ui, title: 'UX/UI Design', description: 'Creating wireframes to be implemented by the developer, understanding the end-user journey, creating and testing/optimizing the site interface, creating mobile app design and interface.' },
      { icon: web, title: 'Web application Design', description: 'Our UX team and web developers will work together to create an intuitive application, optimized for mobile devices and page speed. We also have SEO specialists who can boost your ranking.' },
      { icon: desktop, title: 'Desktop Software Design', description: 'Full-stack design services ranging from software interface development to database redesign.' },
      { icon: cross, title: 'Cross-Platform Design', description: 'Build once, deploy anywhere! We can create custom UX designs that will look superb on all devices.' },
    ],
    'Web Design': [
      { icon: ui, title: 'Responsive Web Design', description: 'Our web developers can adapt your designs to make them easily accessible on mobile devices and tablets.' },
      { icon: web, title: 'E-commerce Solutions', description: 'We create appealing store designs and can create a captivating SEO-optimized copy for your goods.' },
      { icon: desktop, title: 'Brochure Sites (Small 5 page sites)', description: 'If you only need a simpler promotional site with a few static plain pages and user interface design, our web developers can create captivating pages that bring conversions.' },
      { icon: cross, title: 'Blog Design', description: 'Nice Graphics and captivating forms are a must if you want to make the most out of your blogs.' },
    ],
    'Graphic Design': [
      { icon: ui, title: 'Logo Design', description: 'Looking to create a custom logo that communicates your brand identity? Weve got you covered!' },
      { icon: web, title: 'Print Materials', description: 'The best design assets are the ones that you can touch. We can design Print Materials of all formats.' },
      { icon: desktop, title: 'Illustrative Design', description: 'We work with many different styles of illustrations, including images for books and comics, emojis and much more.' },
    ],
    'Brand Identity': [
      { icon: ui, title: 'Corporate Identity Development', description: 'When you present your brand assets, they have to be cohesive! We can help you develop an identity package that will communicate your values effectively.' },
      { icon: web, title: 'Infographics', description: 'One picture tells a thousand words. Communicate your workflows and engage the audience with custom infographic creation services.' },
      { icon: desktop, title: 'Sales Presentations', description: 'Communicate your offering to potential clients with eye-catching presentations.' },
      { icon: cross, title: 'Brochures', description: 'Think of your company brochure as the elevator pitch created for each one of your potential clients.' },
    ],
  };
  
  const [openQuestion, setOpenQuestion] = useState(0);

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
          <HeroContentWrapper>
            <HeroTitle>
            <DarkText>Unleash Your Company's </DarkText>{" "}<GradientText>Creative Vision</GradientText>
              <br /> <DarkText> With Custom UX and UI Design Services.</DarkText>{" "}
            </HeroTitle>
            <Subtitle2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Subtitle2>
            <ConsultButton>Consult Now!</ConsultButton>
          </HeroContentWrapper>
          <HeroImage src={serivce} alt="Transform your business" />
        </HeroSection>

       
      </Container>

      <DesignSolutionsSection  data-aos="fade-up">
        <Container>
        <HeroTitle2><DarkText>Our &nbsp;</DarkText> <GradientText>Design Solutions</GradientText></HeroTitle2>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
          <TabContainer>
            {Object.keys(designSolutions).map(tab => (
              <Tab key={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)}>{tab}</Tab>
            ))}
          </TabContainer>
          <SolutionGrid>
  {designSolutions[activeTab].map((solution, index) => (
    <SolutionItem key={index}>
      <SolutionIcon src={solution.icon} alt={solution.title} />
      <SolutionContent>
        <SolutionTitle>{solution.title}</SolutionTitle>
        <SolutionDescription>{solution.description}</SolutionDescription>
      </SolutionContent>
    </SolutionItem>
  ))}
</SolutionGrid>

        </Container>
      </DesignSolutionsSection>

      <IndustriesSection data-aos="fade-up">
  <Container>
    <Title>Key industries we serve</Title>
    <Subtitle>We understand the unique challenges and opportunities facing each industry we serve. Our tailored digital solutions are designed to streamline operations, enhance customer experiences, and drive growth for businesses of all sizes.</Subtitle>
    <IndustriesGrid>
      {[
        { icon: industries_1, name: 'Banking, Financial Services & Insurance' },
        { icon: industries_2, name: 'Media, News & Entertainment' },
        { icon: industries_3, name: 'Retail & Consumer Services' },
        { icon: industries_4, name: 'Travel, Tourism & Leisure' },
        { icon: industries_5, name: 'EdTech & Learning' },
        { icon: industries_6, name: 'Real estate & Prop Tech' },
        { icon: industries_7, name: 'Pharma & Healthcare' },
        { icon: industries_8, name: 'Business & IT Services' },
        { icon: industries_9, name: 'Automotive & Manufacturing' },
        { icon: industries_10, name: 'Energy & Utilities' },
      ].map((industry, index) => (
        <IndustryItem key={index}>
          <IndustryIcon src={industry.icon} alt={industry.name} />
          <IndustryName>{industry.name}</IndustryName>
        </IndustryItem>
      ))}
    </IndustriesGrid>
    <IndustrySubsection>
      <IndustrySubtitle>Our expertise in designing and building digital solutions authorises us to develop bespoke solutions</IndustrySubtitle>
      <Button>Consult Now!</Button>
    </IndustrySubsection>
  </Container>
</IndustriesSection>


    
      <ValueSection  data-aos="fade-up">
      <Container>
        <Title>
          Solminica Deliver Value <br/> for Money
        </Title>
        <Subtitle>
          Solminica delivers unparalleled value for money by offering top-quality, innovative technology
          solutions at competitive prices. Our customized services are designed to fit any budget, ensuring
          efficiency and productivity enhancements for businesses of all sizes. With exceptional customer
          support, we are your trusted partner in achieving technological success.
        </Subtitle>
        <StatsGrid>
          <StatItem>
            <StatNumber>99%</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>
            <StatLabel>Satisfied Clients</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>160+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Tech Enthusiasts</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>30+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Industries covered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>550+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Projects Delivered</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>80%+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Impressive growth of Product</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>3.4M+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Lines of Code</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>20+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>Industry Certified Team members</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>850+</StatNumber>
            <hr style={{height: '2px', backgroundColor: '#E0E0E0', border: 'none',marginLeft: '90px', marginRight: '20px'}}/>

            <StatLabel>On time project delivery.</StatLabel>
          </StatItem>
        </StatsGrid>
        {/* <Divider /> */}
        <BottomText>
          Our expertise in designing and building digital solutions authorises us to develop bespoke solutions
        </BottomText>
        <ViewAllButton>Consult Now!</ViewAllButton>
      </Container>
    </ValueSection>
    <ProcessSection data-aos="fade-up">
        <Container>
          <Title>Development Process we Follow</Title>
          <Subtitle>
            At Solminica, we follow an agile development methodology,
            emphasizing iterative development, continuous improvement, and
            collaboration among cross-functional teams. Our approach prioritizes
            customer feedback, adapts quickly to changing requirements, and
            delivers high-quality software solutions efficiently.
          </Subtitle>
          <ProcessImage
            src={developmentProcessImage}
            alt="Development Process"
          />
        </Container>
      </ProcessSection>
      <Section data-aos="fade-up">
        <Container>
          <Title>Our Customers love what we do</Title>
          <Subtitle>
            Our customers are at the center of everything we do, and we're
            passionate about delivering exceptional solutions that exceed their
            expectations. We take pride in providing innovative services that
            delight and satisfy their needs, fostering long-term relationships
            built on trust, quality, and reliability. Our dedication to customer
            satisfaction is unwavering, and we continually strive to improve and
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
            </TestimonialContent>
          </CustomerTestimonial>
        </Container>
      </Section>
      <FAQSection  data-aos="fade-up">
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
              {/* <Button>View all</Button> */}
            </FAQContent>
            <FAQImage src={blogs} alt="FAQ Illustration" />
          </FAQContainer>
        </Container>
      </FAQSection>
    </PageWrapper>
  );
};

export default ServiceComponent;