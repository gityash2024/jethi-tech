import React from 'react';
import styled from 'styled-components';
import about_as from '../assets/images/about_as.png';
import finding_image from '../assets/images/finding_image.png';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import startup from '../assets/images/startup.png';
import smbs from '../assets/images/smbs.png';
import enterprise from '../assets/images/enterprise.png';
import agency from '../assets/images/agency.png';
import digitalservices from '../assets/images/digitalservices.png';
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
import find_1 from '../assets/images/find_1.png';
import find_2 from '../assets/images/find_2.png';
import find_3 from '../assets/images/find_3.png';
import find_4 from '../assets/images/find_4.png';
import find_5 from '../assets/images/find_5.png';

const AboutWrapper = styled.div`
  font-family: 'Poppins';
`;

const Section = styled.section`
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'poppins';
  font-weight: 700;
    font-family: 'poppins';
  span {
    color: #0066CC;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #4E4E4E;
  margin-bottom: 30px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 30px;
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

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
`;

const BeliefSection = styled(Section)`
  text-align: center;
`;

const BeliefTitle = styled.h2`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 62.4px;
  text-align: center;
`;

const BeliefText = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  font-family: 'Poppins';
`;

const VisionMissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

const VisionMissionCard = styled.div`
  background-color: #f8f8f8;
  padding: 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #666;
  text-align: left;
`;


const SolutionsSection = styled(Section)`
  // background-color: #f8f8f8;
`;

const SolutionsTitle = styled.h2`
  font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 62.4px;
`;

const SolutionsSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const SolutionCard = styled.div`
  display: flex;
  align-items: flex-start;
`;



const SolutionText = styled.p`
  font-size: 16px;
  color: #666;
`;

const ValueSection = styled(Section)``;

const ValueTitle = styled.h2`
   font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 62.4px;
`;

const ValueSubtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Poppins';
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 36px;
  color: #0f1010;;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: #666;
`;

const PreferSection = styled(Section)`
  // background-color: #f8f8f8;
`;

const PreferTitle = styled.h2`
   font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 62.4px;
`;

const PreferSubtitle = styled.p`
  font-size: 20px;
  color: #4E4E4E;
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 30px;
`;

const PreferGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const PreferItem = styled.div`
  text-align: center;
`;

const PreferIcon = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

const PreferText = styled.p`
  font-size: 14px;
  color: #666;
`;
const TestimonialSection = styled(Section)`
  text-align: center;
`;

const TestimonialTitle = styled.h2`
   font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 62.4px;;
`;

const TestimonialSubtitle = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  font-family: 'Poppins';
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  display: flex;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const TestimonialImage = styled.img`
  width: 200px;
  margin-right: 40px;
`;

const TestimonialContent = styled.div`
  text-align: left;
`;

const TestimonialQuote = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const TestimonialRole = styled.p`
  font-size: 14px;
  color: #666;
`;

const FindUsSection = styled(Section)`
  text-align: center;
`;

const FindUsTitle = styled.h2`
  font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  font-family: 'Poppins';
  font-weight: 700;
  line-height: 62.4px;;
  text-align: center;

`;

const FindUsSubtitle = styled.p`
  font-size: 20px;
  color: #4E4E4E;
  margin-bottom: 40px;
  font-family: 'Poppins';
  font-weight: 400;
  text-align: center;
  line-height: 30px;
`;

const ReviewPlatforms = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ReviewPlatform = styled.div`
  background-color: #fff;
  border-radius: 10px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 180px;
`;

const PlatformLogo = styled.img`
  margin-bottom: 10px;
`;

const PlatformRating = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SolutionIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
`;

const SolutionContent = styled.div`
  flex: 1;
`;

const SolutionTitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SolutionDescription = styled.p`
  font-size: 16px;
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
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const BottomText = styled.p`
  font-size: 20px;
  color: #434343;
  text-align: left;
  flex: 1;
  line-height: 30px;
    font-weight: 700;
`;

const ConsultButton = styled(Button)`
  width: 20%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const AwardsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const AwardsDot = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  border-radius: 50%;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>The right <span>technology partner</span>  can change everything</HeroTitle>
            <HeroSubtitle>We are firm believers that the best software comes from small agile and highly skilled teams.</HeroSubtitle>
            <Button>Get Quote</Button>
          </HeroContent>
          <HeroImage src={about_as} alt="About Us" />
        </HeroSection>

        <BeliefSection>
  <BeliefTitle>Our Belief System</BeliefTitle>
  <BeliefText>
    At our core, we believe technology is the key to unlocking a business's true potential. We design software that empowers users, not <br />intimidates them, prioritizing both human-centered design and cutting-edge functionality. We're a team that thrives on continuous <br />learning and exploration, constantly seeking ways to push the boundaries of what software can achieve. Collaboration is our fuel – <br />diverse perspectives coming together to craft exceptional solutions. Building trust with our clients is paramount, fostering open <br />communication and transparency to ensure the solutions we deliver are exactly what they need. This is more than just developing <br />software; it's about shaping the future through innovation and strong partnerships.
  </BeliefText>
  <VisionMissionGrid>
    <VisionMissionCard>
      <CardImage src={finding_image} alt="Our Vision" />
      <CardTitle>Our Vision</CardTitle>
      <CardText>
        Our vision is to become a trailblazer in IT development, shaping the future with software that is both innovative and user-centric. We see a world where technology seamlessly integrates with businesses, empowering them through powerful yet intuitive software solutions. We are committed to pushing the boundaries of what's possible, constantly seeking new advancements that will redefine the role of software in driving business success.
      </CardText>
    </VisionMissionCard>
    <VisionMissionCard>
      <CardImage src={finding_image} alt="Our Mission" />
      <CardTitle>Our Mission</CardTitle>
      <CardText>
        Our mission is to empower businesses through exceptional software solutions. We craft custom software that exceeds expectations and delivers tangible business value by leveraging the latest technologies and a collaborative approach. We envision a future where technology seamlessly integrates with businesses by creating software that is not only powerful but also intuitive and user-friendly. We strive to be a pioneering force in IT development, shaping the future with innovative and user-centric software, constantly pushing the boundaries of what's possible.
      </CardText>
    </VisionMissionCard>
  </VisionMissionGrid>
</BeliefSection>


        <SolutionsSection>
          <Title>
            Avail Profit-Driven Development Solutions<br />
            to Resolve All-Scale Business Needs
          </Title>
          <Subtitle>
            Solminica creates enterprise solutions that seamlessly blend
            traditional methods with the latest innovations.
          </Subtitle>
          <SolutionGrid>
            <SolutionItem>
              <SolutionIcon src={smbs} alt="SMBs" />
              <SolutionContent>
                <SolutionTitle>SMBs</SolutionTitle>
                <SolutionDescription>
                  Seamlessly turn your small business into a well-known brand
                  with the top development assistance. For decades, we have been
                  helping small-scale businesses earn.
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem>
              <SolutionIcon src={startup} alt="Startups" />
              <SolutionContent>
                <SolutionTitle>Startups</SolutionTitle>
                <SolutionDescription>
                  Let your startups climb the ladder of success in no time. We
                  offer software development services for startups and help them
                  get more funding as a brand
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem>
              <SolutionIcon src={enterprise} alt="Enterprises" />
              <SolutionContent>
                <SolutionTitle>Enterprises</SolutionTitle>
                <SolutionDescription>
                  Seek robust and customised enterprise mobility solutions to
                  meet your business needs. Our each development layer is
                  engineered with experience and expertise
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem>
              <SolutionIcon src={agency} alt="Agencies" />
              <SolutionContent>
                <SolutionTitle>Agencies</SolutionTitle>
                <SolutionDescription>
                  Our technical approach makes it accessible for offshore
                  agencies to get exposure, improve business' financial growth,
                  and increase sales & marketing potential
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
          </SolutionGrid>
        </SolutionsSection>

        <ValueSection>
          <ValueTitle>Solminica Deliver Value for <br />Money</ValueTitle>
          <ValueSubtitle>Solminica delivers unparalleled value for money by offering top-quality, innovative technology<br /> solutions at competitive prices. Our customized services are designed to fit any budget, ensuring <br />efficiency and productivity enhancements for businesses of all sizes. With exceptional customer <br />support, we are your trusted partner in achieving technological success.</ValueSubtitle>
          <StatsGrid>
            <StatItem>
              <StatNumber>99%</StatNumber>
              <StatLabel>Satisfied Clients</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>160+</StatNumber>
              <StatLabel>Tech Enthusiasts</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>30+</StatNumber>
              <StatLabel>Industries covered</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>550+</StatNumber>
              <StatLabel>Projects Delivered</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>80%+</StatNumber>
              <StatLabel>Impressive growth of Product</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>3.4M+</StatNumber>
              <StatLabel>Lines of Code</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>20+</StatNumber>
              <StatLabel>Industry Certified Team members</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>850+</StatNumber>
              <StatLabel>On time project delivery.</StatLabel>
            </StatItem>
          </StatsGrid>
          <BottomRow>
            <BottomText>
              Our expertise in designing and building digital solutions
              authorises us to develop <br />bespoke solutions
            </BottomText>
            <ConsultButton>Consult Now!</ConsultButton>
          </BottomRow>
        </ValueSection>

        <PreferSection>
          <PreferTitle>Why Businesses Prefer Us?</PreferTitle>
          <PreferSubtitle>As the leading IT company, Solminica guarantees client satisfaction through surveys, punctual <br />delivery, established SLAs for support, superior quality in deliverables, and a commendable client <br />retention record</PreferSubtitle>
          <PreferGrid>
            <PreferItem>
              <PreferIcon src={Businesses_1} alt="SEO and Digital Marketing" />
              <PreferText>SEO and Digital Marketing</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_2} alt="4 months + free post launch support" />
              <PreferText>4 months + free post launch support</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_3} alt="Non-Disclosure Agreement" />
              <PreferText>Non-Disclosure Agreement</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_4} alt="100% value for the money" />
              <PreferText>100% value for the money</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_5} alt="Professional coding and version controls" />
              <PreferText>Professional coding and version controls</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_6} alt="Flexible Payment Plans" />
              <PreferText>Flexible Payment Plans</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_7} alt="Real-time project tracking tools" />
              <PreferText>Real-time project tracking tools</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_8} alt="Custom Tailored support | AMC Plans" />
              <PreferText>Custom Tailored support | AMC Plans</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_9} alt="Quality Assurance and Unit Test Cases" />
              <PreferText>Quality Assurance and Unit Test Cases</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_10} alt="Penalty enforcement in case of Delivery Delay" />
              <PreferText>Penalty enforcement in case of Delivery Delay</PreferText>
            </PreferItem>
            <PreferItem>
              <PreferIcon src={Businesses_11} alt="In-depth analysis of revenue business Models" />
              <PreferText>In-depth analysis of revenue business Models</PreferText>
            </PreferItem>
            {/* <PreferItem>
              <PreferIcon src={Businesses_11} alt="In-depth analysis of revenue business Models" />
              <PreferText>In-depth analysis of revenue business Models</PreferText>
            </PreferItem> */}
            <PreferItem>
              <PreferIcon src={Businesses_12} alt="Mind Maps and video demos" />
              <PreferText>Mind Maps and video demos</PreferText>
            </PreferItem>
          </PreferGrid>
        </PreferSection>
      </Container>
      <TestimonialSection>
        <Container>
          <TestimonialTitle>Our Customers love what we do</TestimonialTitle>
          <TestimonialSubtitle>
            Our customers are at the center of everything we do, and we're passionate about delivering exceptional solutions<br />
            that exceed their expectations. We take pride in providing innovative services that delight and satisfy their needs,<br />
            fostering long-term relationships built on trust, quality, and reliability. Our dedication to customer satisfaction is <br />
            unwavering, and we continually strive to improve and refine our offerings to meet their evolving needs.
          </TestimonialSubtitle>
          <TestimonialCard>
            <TestimonialImage src={Customers} alt="Customer Testimonial" />
            <TestimonialContent>
              <TestimonialQuote>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreconsectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore."
              </TestimonialQuote>
              <TestimonialAuthor>Mark Rise</TestimonialAuthor>
              <TestimonialRole>CEO, Founder</TestimonialRole>
              <AwardsDots>
          <AwardsDot active />
          <AwardsDot />
          <AwardsDot />
          <AwardsDot />
        </AwardsDots>
            </TestimonialContent>
          </TestimonialCard>
        </Container>
      </TestimonialSection>

      <FindUsSection>
        <Container>
          <FindUsTitle>Find us</FindUsTitle>
          <FindUsSubtitle>
            Discover what our team and clients are saying about us! We're proud to be rated<br />
            5.0 on Glassdoor and 4.9 out of 5 on Clutch. Explore our reviews on AmbitionBox,<br />
            GoodFirms, and Trustpilot to learn more about our company culture and <br />
            commitment to excellence.
          </FindUsSubtitle>
          <ReviewPlatforms>
            <ReviewPlatform>
              <PlatformLogo src={find_1} alt="AmbitionBox" />
              {/* <PlatformRating>3.0</PlatformRating>
              <p>(based on 2 reviews)</p> */}
            </ReviewPlatform>
            <ReviewPlatform>
              <PlatformLogo src={find_2} alt="Glassdoor" />
            </ReviewPlatform>
            <ReviewPlatform>
              <PlatformLogo src={find_3} alt="Clutch" />
            </ReviewPlatform>
            <ReviewPlatform>
              <PlatformLogo src={find_4} alt="GoodFirms" />
            </ReviewPlatform>
            <ReviewPlatform>
              <PlatformLogo src={find_5} alt="Trustpilot" />
            </ReviewPlatform>
          </ReviewPlatforms>
        </Container>
      </FindUsSection>
    </AboutWrapper>
  );
}

export default About;