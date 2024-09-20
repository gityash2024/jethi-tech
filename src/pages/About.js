import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import about_as from '../assets/images/about_as.png';
import finding_image from '../assets/images/finding_image.svg';
import vision from '../assets/images/vision.png';
import mission from '../assets/images/mission.png';
import startup from '../assets/images/startup.svg';
import smbs from '../assets/images/smbs.svg';
import enterprise from '../assets/images/enterprise.svg';
import agency from '../assets/images/agency.svg';
import Customers from '../assets/images/Customers.png';
import CountUp from 'react-countup';
import find_1 from '../assets/images/find_1.png';
import find_2 from '../assets/images/find_2.png';
import find_3 from '../assets/images/find_3.png';
import find_4 from '../assets/images/find_4.png';
import find_5 from '../assets/images/find_5.png';
import { useNavigate } from 'react-router-dom';

const AboutWrapper = styled.div`
  font-family: 'Poppins';
`;

const Section = styled.section`
  padding: 20px 0;
`;

const Container = styled.div`
  max-width:75vw;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 30px;
    margin-bottom: 40px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  color: #434343;
  margin-bottom: 20px;
  font-family: 'poppins';
  font-weight: 700;
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
  background-color: #015bcc;
  color: white;
  border: none;
  padding: 20px 30px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background:linear-gradient(to right, #0072FF 0%, #2F69B1 100%);
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 40%;
  @media (max-width: 768px) {
    max-width: 80%;
    margin-bottom: 20px;
  }
`;

const BeliefSection = styled(Section)`
  text-align: center;
`;
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
// const BeliefTitle = styled.h2`
//   font-size: 48px;
//   color: #434343;
//   margin-bottom: 20px;
//   font-family: 'Poppins';
//   font-weight: 700;
//   line-height: 62.4px;
//   text-align: center;
// `;

const BeliefTitle = styled.h2`
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
const TitleOurDigital = styled.h2`
  font-size: 46px;
  background: linear-gradient(270deg, #000000 60%, #1a1a1a 70%, #0072FF 85%, #2F69B1 100%);
  background-size: 200% 200%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${gradientAnimation} 3s ease infinite;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 62.4px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 45px;
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

const VisionMissionCard = styled(motion.div)`
  background-color: #fffff;
  box-shadow: 
    7px 0px 9px 0px rgba(190, 190, 190, 0.25),
    0px 4px 5px 0px rgba(190, 190, 190, 0.25);
  padding: 40px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
   &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #434343;
  margin-bottom: 20px;
`;

const CardText = styled.p`
  font-size: 16px;
  color: #666;
  text-align: left;
`;

const SolutionsSection = styled(Section)``;

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

const SolutionItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
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

const ValueSection = styled(Section)`
  text-align: center;
`;

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
const Section0 = styled.section`
  padding: 0px 0;
  @media (max-width: 768px) {
    padding: 0px 0;
  }
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
const TechnologiesSection = styled(Section0)`
`;
const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    }
    `;
    
    const StatItem = styled(motion.div)`
    `;
    const StatNumber = styled.h3`
    font-size: 36px;
    color: #2f2f2f;
    margin-bottom: 10px;
    border-bottom: 1px solid #5C5C5C;
  `;
  

const StatLabel = styled.p`
  font-size: 16px;
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

const CustomerTestimonial = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #6C6C6C;
  border-radius: 60px;
  padding: 40px;
  margin-top: 25px;
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

const AwardsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const AwardsDot = styled.span`
  width: 10px;
  cursor: pointer;
  height: 10px;
  background-color: ${(props) => (props.active ? "#434343" : "#6C6C6C")};
  border-radius: 50%;
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
  padding: 20px;
  width: 200px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
const GradientText = styled.span`
  background: linear-gradient(90deg, #2f69b1 0%, #0072ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

`;

const CarouselContainer = styled(motion.div)`
  display: flex;
  white-space: nowrap;
`;

const CarouselItem = styled(motion.div)`
  flex: 0 0 auto;
  margin-right: 20px;
`;

const reviewVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,  // Staggering the animation by 0.3 seconds
      duration: 0.5,
    },
  }),
};

const PlatformLogo = styled.img`
  margin-bottom: 10px;
`;

const PlatformRating = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #434343;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
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

const cardVariants2 = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
    },
  }),
};

const About = () => {
  const { ref: refValue, inView: inViewValue } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [activeDot, setActiveDot] = useState(0);

  const navigate=useNavigate();
  const testimonials = [
    {
      text: "Solminica has been a game-changer for our business. Their team delivered a top-notch solution that exceeded our expectations. We're thrilled with the results!",
      author: "Mark Rise",
      position: "CEO, Founder",
    },
    {
      text: "Since implementing Solminica, we've seen a 25% increase in website traffic and a 15% boost in conversions. The team at Solminica truly understands our business needs.",
      author: "Jane Doe",
      position: "Marketing Director",
    },
    {
      text: "Working with Solminica felt like a true partnership. They were responsive, proactive, and always willing to go the extra mile. We highly recommend their services.",
      author: "John Smith",
      position: "CEO, Founder",
    },
  ];
  return (
    <AboutWrapper>
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>The right <GradientText>technology <br/> partner</GradientText> can change<br/> everything</HeroTitle>
            <HeroSubtitle>We are firm believers that the best software comes from <br/>small agile and highly skilled teams.</HeroSubtitle>
            <ConsultButton onClick={()=>{navigate('/contact')}}>Get Quote</ConsultButton>
          </HeroContent>
          <HeroImage src={about_as} alt="About Us" />
        </HeroSection>

        <BeliefSection>
          <BeliefTitle>Our Belief System</BeliefTitle>
          <BeliefText>
            At our core, we believe technology is the key to unlocking a business's true potential. We design software that empowers users,<br/> not intimidates them, prioritizing both human-centered design and cutting-edge functionality. We're a team that thrives on continuous<br/> learning and exploration, constantly seeking ways to push the boundaries of what software can achieve. Collaboration is our fuel – diverse<br/> perspectives coming together to craft exceptional solutions. Building trust with our clients is paramount, fostering open communication and transparency<br/> to ensure the solutions we deliver are exactly what they need. This is more than just developing software; it's about shaping <br/>the future through innovation and strong partnerships.
          </BeliefText>
          <VisionMissionGrid>
            <VisionMissionCard
              custom={0}
              initial="hiddenLeft"
              whileInView="visible"
              variants={cardVariants2}
              viewport={{ once: true }}
            >
              <CardImage src={finding_image} alt="Our Vision" />
              <CardTitle>Our Vision</CardTitle>
              <CardText>
                Our vision is to become a trailblazer in IT development, shaping the future with software that is both innovative and user-centric. We see a world where technology seamlessly integrates with businesses, empowering them through powerful yet intuitive software solutions. We are committed to pushing the boundaries of what's possible, constantly seeking new advancements that will redefine the role of software in driving business success.
              </CardText>
            </VisionMissionCard>
            <VisionMissionCard
              custom={1}
              initial="hiddenRight"
              whileInView="visible"
              variants={cardVariants2}
              viewport={{ once: true }}
            >
              <CardImage src={finding_image} alt="Our Mission" />
              <CardTitle>Our Mission</CardTitle>
              <CardText>
                Our mission is to empower businesses through exceptional software solutions. We craft custom software that exceeds expectations and delivers tangible business value by leveraging the latest technologies and a collaborative approach. We envision a future where technology seamlessly integrates with businesses by creating software that is not only powerful but also intuitive and user-friendly. We strive to be a pioneering force in IT development, shaping the future with innovative and user-centric software, constantly pushing the boundaries of what's possible.
              </CardText>
            </VisionMissionCard>
          </VisionMissionGrid>
        </BeliefSection>

        <SolutionsSection>
          <BeliefTitle>
            Avail Profit-Driven Development Solutions<br />
            to Resolve All-Scale Business Needs
          </BeliefTitle>
          <SolutionsSubtitle>
            Solminica creates enterprise solutions that seamlessly blend traditional methods with the latest innovations.
          </SolutionsSubtitle>
          <SolutionsGrid>
            <SolutionItem
              custom={0}
              initial="hiddenLeft"
              whileInView="visible"
              variants={cardVariants2}
              viewport={{ once: true }}
            >
              <SolutionIcon src={smbs} alt="SMBs" />
              <SolutionContent>
                <SolutionTitle>SMBs</SolutionTitle>
                <SolutionDescription>
                  Seamlessly turn your small business into a well-known brand with the top development assistance. For decades, we have been helping small-scale businesses earn.
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem
              custom={1}
              initial="hiddenRight"
              whileInView="visible"
              variants={cardVariants2}
              viewport={{ once: true }}
            >
              <SolutionIcon src={startup} alt="Startups" />
              <SolutionContent>
                <SolutionTitle>Startups</SolutionTitle>
                <SolutionDescription>
                  Let your startups climb the ladder of success in no time. We offer software development services for startups and help them get more funding as a brand.
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem
              custom={2}
              initial="hiddenLeft"
              whileInView="visible"
              variants={cardVariants2}
              viewport={{ once: true }}
            >
              <SolutionIcon src={enterprise} alt="Enterprises" />
              <SolutionContent>
                <SolutionTitle>Enterprises</SolutionTitle>
                <SolutionDescription>
                  Seek robust and customised enterprise mobility solutions to meet your business needs. Our each development layer is engineered with experience and expertise.
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
            <SolutionItem
              custom={3}
              initial="hiddenRight"
              whileInView="visible"
              variants={cardVariants2}
              viewport={{ once: true }}
            >
              <SolutionIcon src={agency} alt="Agencies" />
              <SolutionContent>
                <SolutionTitle>Agencies</SolutionTitle>
                <SolutionDescription>
                  Our technical approach makes it accessible for offshore agencies to get exposure, improve business' financial growth, and increase sales & marketing potential.
                </SolutionDescription>
              </SolutionContent>
            </SolutionItem>
          </SolutionsGrid>
        </SolutionsSection>

        <ValueSection ref={refValue}>
          <BeliefTitle>Solminica Deliver <br /> Value for Money</BeliefTitle>
          <ValueSubtitle>
            Solminica delivers unparalleled value for money by offering top-quality, innovative technology solutions at competitive prices. Our customized services are designed to fit any budget, ensuring efficiency and productivity enhancements for businesses of all sizes. With exceptional customer support, we are your trusted partner in achieving technological success.
          </ValueSubtitle>
          <StatsGrid
            initial={{ opacity: 0, y: 50 }}
            animate={inViewValue ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {[
              { end: 99, suffix: '%', label: '◾ Satisfied Clients' },
              { end: 160, suffix: '+', label: '◾ Tech Enthusiasts' },
              { end: 30, suffix: '+', label: '◾ Industries covered' },
              { end: 550, suffix: '+', label: '◾ Projects Delivered' },
              { end: 80, suffix: '%+', label: '◾ Impressive growth of Product' },
              { end: 3.4, suffix: 'M+', label: '◾ Lines of Code' },
              { end: 20, suffix: '+', label: '◾ Industry Certified Team members' },
              { end: 850, suffix: '+', label: '◾ On time project delivery.' },
            ].map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewValue ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <StatNumber>
                  <CountUp start={inViewValue ? 0 : null} end={stat.end} suffix={stat.suffix} duration={2.5} />
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
          <BottomRow>
            <BottomText>
              Our expertise in designing and building digital solutions authorizes us to develop bespoke solutions
            </BottomText>
            <ConsultButton>Consult Now!</ConsultButton>
          </BottomRow>
        </ValueSection>

        <TechnologiesSection >
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
            <TestimonialText>{testimonials[activeDot].text}</TestimonialText>
        <TestimonialAuthor>{testimonials[activeDot].author}</TestimonialAuthor>
        <TestimonialPosition>{testimonials[activeDot].position}</TestimonialPosition>
        <AwardsDots>
          {testimonials.map((_, index) => (
            <AwardsDot
              key={index}
              active={index === activeDot}
              onClick={() => setActiveDot(index)}
            />
          ))}
        </AwardsDots>
            </TestimonialContent>
          </CustomerTestimonial>
        </Container>
      </TechnologiesSection>

        <FindUsSection>
          <BeliefTitle>Find us</BeliefTitle>
          <FindUsSubtitle>
            Discover what our team and clients are saying about us! We're proud to be rated <br/> 5.0 on Glassdoor and 4.9 out of 5 on Clutch. Explore our reviews on AmbitionBox,  <br/>GoodFirms, and Trustpilot to learn more about our company culture and<br/> commitment to excellence.
          </FindUsSubtitle>
          <CarouselContainer
  animate={{ x: ['0%', '-100%'] }} // Animate from start to end
  transition={{
    duration: 30, // Duration of one full scroll
    ease: "linear", // Smooth linear animation
    repeat: Infinity // Infinite scroll
  }}
>
  {[{
    src: find_1,
    alt: 'AmbitionBox',
    url: 'https://www.ambitionbox.com'
  }, {
    src: find_2,
    alt: 'Glassdoor',
    url: 'https://www.glassdoor.com'
  }, {
    src: find_3,
    alt: 'Clutch',
    url: 'https://www.clutch.co'
  }, {
    src: find_4,
    alt: 'GoodFirms',
    url: 'https://www.goodfirms.co'
  }, {
    src: find_5,
    alt: 'Trustpilot',
    url: 'https://www.trustpilot.com'
  },{
    src: find_1,
    alt: 'AmbitionBox',
    url: 'https://www.ambitionbox.com'
  }, {
    src: find_2,
    alt: 'Glassdoor',
    url: 'https://www.glassdoor.com'
  }, {
    src: find_3,
    alt: 'Clutch',
    url: 'https://www.clutch.co'
  }, {
    src: find_4,
    alt: 'GoodFirms',
    url: 'https://www.goodfirms.co'
  }, {
    src: find_5,
    alt: 'Trustpilot',
    url: 'https://www.trustpilot.com'
  }].map((platform, index) => (
    <CarouselItem key={platform.alt}>
      <motion.a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        custom={index}
        initial="hidden"
        whileInView="visible"
        variants={reviewVariants}
        viewport={{ once: true }}
      >
        <ReviewPlatform>
          <PlatformLogo src={platform.src} alt={platform.alt} />
        </ReviewPlatform>
      </motion.a>
    </CarouselItem>
  ))}
</CarouselContainer>


        </FindUsSection>
      </Container>
    </AboutWrapper>
  );
}

export default About;
