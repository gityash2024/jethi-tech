import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import AOS from 'aos';
import { Link as ScrollLink } from 'react-scroll';

import Customers from "../assets/images/Customers.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about from '../assets/images/about.png';
import award_1 from '../assets/images/award_1.svg';
import award_2 from '../assets/images/award_2.svg';
import award_3 from '../assets/images/award_3.svg';
import award_4 from '../assets/images/award_4.svg';
import award_5 from '../assets/images/award_5.svg';
import award_6 from '../assets/images/award_6.svg';
// import sacred_card from '../assets/images/sacred_card.png';
import trusted_partner_1 from '../assets/images/trusted_partner_1.svg';
import trusted_partner_2 from '../assets/images/trusted_partner_2.svg';
import trusted_partner_3 from '../assets/images/trusted_partner_3.svg';
import trusted_partner_4 from '../assets/images/trusted_partner_4.svg';
import trusted_partner_5 from '../assets/images/trusted_partner_5.svg';
import trusted_partner_6 from '../assets/images/trusted_partner_6.svg';
import trusted_partner_7 from '../assets/images/trusted_partner_7.svg';
import trusted_partner_8 from '../assets/images/trusted_partner_8.svg';
// import trusted_partner_5_card from '../assets/images/trusted_partner_5_card.png';
// import trusted_partner_6_card from '../assets/images/trusted_partner_6_card.png';
import contactUsCard from '../assets/images/contact-us-card.png';
import herosectionbg from '../assets/images/hero-bg-line.png';
import our_digital_left_side_image from '../assets/images/our_digital_left_side_image.png';
import our_digital_web_dev from "../assets/images/our_digital_web_dev.svg";
import our_digital_mobile_dev from "../assets/images/our_digital_mobile_dev.svg";
import our_digital_hire from "../assets/images/our_digital_hire.svg";
import our_digital_blockchain from "../assets/images/our_digital_blockchain.svg";
import our_digital_digi_marketing from "../assets/images/our_digital_digi_marketing.svg";
import our_digital_public_relation from "../assets/images/our_digital_public_relation.svg";
import our_digital_cyber_security from "../assets/images/our_digital_cyber_security.svg";
import our_digital_quality_test from "../assets/images/our_digital_quality_test.svg";
import our_digital_cloud from "../assets/images/our_digital_cloud.svg";
import our_digital_lets_conect_last_card from '../assets/images/our_digital_lets_conect_last_card.png';

const AboutWrapper = styled.div`
  font-family: 'Poppins';
`;

const Section = styled.section`
  padding: 20px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Section0 = styled(Section)`
  padding: 0px 0;
  @media (max-width: 768px) {
    padding: 0px 0;
  }
`;

const Section20 = styled(Section)`
  padding: 40px 0;
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Container = styled.div`
  max-width: 75vw;
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
  line-height: 62.4px;
  font-weight: 700;

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
  @media (max-width: 768px) {
    font-size: 16px;
  }
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

const Title = styled.h2`
  font-size: 46px;
  background: linear-gradient(270deg, #000000 60%, #1a1a1a 70%, #0072FF 85%, #2F69B1 100%);
  background-size: 200% 200%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: ${keyframes`0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; }`} 3s ease infinite;
  margin-bottom: 20px;
  text-align: center; 
  font-weight: 700;
  line-height: 62.4px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 40.4px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #4E4E4E;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 400;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 1.2;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: center;
  grid-column: span 2;
  margin-bottom: 20px;
`;

const CaptchaInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100px;
  margin-right: 10px;
`;

const CaptchaOperator = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const SubmitButton = styled(Button)`
  grid-column: span 2;
  width: 30%;
  margin: 0 auto;
`;

const InfoBox = styled.div`
  flex: 0.8;
  background-image: url(${contactUsCard});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  min-height: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TrustedSection = styled(Section20)`
  text-align: center;
`;

const TrustedGrid = styled(Slider)`
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }
`;

const TrustedLogo = styled.img`
  height: 100px;
  cursor: pointer;
  width: auto;
  margin-bottom:20px;
`;

const ServicesSection = styled(Section20)`
`;

const ServicesContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServicesSideImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-right: 5%;
  @media (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto 20px auto;
  }
`;

const ServicesContent = styled.div`
  flex: 1;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceItem = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #E1E1E1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.3s ease-in-out;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 0;
  font-family: 'Poppins';
    font-weight: 500;
    line-height: 26px;
    color: #434343;
`;

const AwardsSection = styled(Section)`
  text-align: center;
`;

const AwardsGrid = styled(Slider)`
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }
`;

const AwardImage = styled.img`
  height: 100px;
  width: auto;
  margin-bottom: 20px;
`;
const TechnologiesSection = styled(Section0)`
margin-bottom: 50px;
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
  height: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#434343" : "#6C6C6C")};
  border-radius: 50%;
`;
const Contact = () => {
  const [activeDot, setActiveDot] = useState(0);

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
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const carouselSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };
  const carouselSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of images visible in one view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "13px", // Update width for individual dot
          height: "13px", // Update height for individual dot
          backgroundColor: i === 0 ? "#333" : "#ccc", // Color change for active/inactive dots
          borderRadius: "50%", // Making the dots round
          margin: "0 8px", // Spacing between dots (half of the gap)
          opacity: 1, // Ensuring opacity is 1 for full visibility
        }}
      ></div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };
  const carouselSettings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "20px",  // Adjust dot size
          height: "20px", 
          borderRadius: "50%", 
          backgroundColor: "#333", 
          margin: "0 8px",
        }}
      ></div>
    ),
    dotsClass: "slick-dots slick-thumb",
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptchaValue(`${num1} + ${num2}`);
    setCaptchaAnswer((num1 + num2).toString());
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const budget = form.budget.value;
    const interest = form.interest.value;
    const source = form.source.value;
    const requirements = form.requirements.value;
    const captchaInput = form.captcha.value;

    // Validation
    if (name.length > 100) {
      toast.error("Name should be 100 characters or less");
      setIsLoading(false);
      return;
    }

    if (requirements.length > 500) {
      toast.error("Project requirements should be 500 characters or less");
      setIsLoading(false);
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number");
      setIsLoading(false);
      return;
    }

    if (captchaInput !== captchaAnswer) {
      toast.error("Incorrect captcha. Please try again.");
      generateCaptcha();
      setIsLoading(false);
      return;
    }
   
    const formData = {
      name,
      email,
      phone,
      budget,
      interest,
      source,
      requirements,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzbA6ZJzv0JQShWBAnhc0tQcjLVAJdBzZpcCHeLlFynCPTpRniSKSIPWjsifeBKA1Vn/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      toast.success('Form submitted successfully. We will contact you soon!');
      form.reset();
      generateCaptcha();
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AboutWrapper>
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>
              Partner With us to
              <br /> revolutionize Your
              <br /> industry
            </HeroTitle>
            <HeroSubtitle>
              Solminica creates inspirational designs and robust solutions for Web and mobile apps. We combine our expertise in tech & design to craft innovative digital solutions that lead the way in your industry.
            </HeroSubtitle>
            <ScrollLink to="contactForm" smooth={true} duration={500}>
  <Button>Get Quote</Button>
</ScrollLink>

          </HeroContent>
          <img src={about} alt="Partner with us" style={{ maxWidth: '40%' }} />
        </HeroSection>

        <Section id="contactForm">
          <Title>Let's work together to turn your vision into a reality</Title>
          <Subtitle>Fill this form to Take the First Step Towards the Successful Journey.</Subtitle>
          <FormSection >
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Name*" required />
                <Input type="email" name="email" placeholder="Email*" required />
                <Input type="tel" name="phone" placeholder="Contact Number*" required />
                <Select name="budget" defaultValue="" required>
                  <option value="" disabled>Your Budget</option>
                  <option value="0-5000">$0 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </Select>
                <Select name="interest" defaultValue="" required>
                  <option value="" disabled>Interested in</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="other">Other</option>
                </Select>
                <Select name="source" defaultValue="" required>
                  <option value="" disabled>How did you learn about us</option>
                  <option value="search">Search Engine</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </Select>
                <TextArea name="requirements" placeholder="Project Requirements" rows={4} required />
                <Captcha>
                  <CaptchaInput type="text" value={captchaValue} disabled />
                  <CaptchaOperator>=</CaptchaOperator>
                  <CaptchaInput type="text" name="captcha" placeholder="Enter result" required />
                </Captcha>
                <SubmitButton type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send'}
                </SubmitButton>
              </Form>
            </FormContainer>
            <InfoBox />
          </FormSection>
        </Section>


      

        <AwardsSection data-aos="fade-up">
      <Title>Awards and Recognition</Title>
      <Subtitle>
        "We're proud to be recognized as a top performer by Clutch and
        Appfutura, acknowledging our <br/> expertise in IT services, software
        development, and iOS app creation."
      </Subtitle>
      <Slider {...carouselSettings}>
        <AwardImage src={award_1} alt="Clutch Award" />
        <AwardImage src={award_2} alt="Top Software Development Company" />
        <AwardImage src={award_3} alt="Top App Developers" />
        <AwardImage src={award_4} alt="Top Mobile App Developers" />
        <AwardImage src={award_5} alt="Top Rated App Development Company" />
        <AwardImage src={award_6} alt="Top Rated App Development" />
        <AwardImage src={award_1} alt="Clutch Award" />
        <AwardImage src={award_2} alt="Top Software Development Company" />
        <AwardImage src={award_3} alt="Top App Developers" />
        <AwardImage src={award_4} alt="Top Mobile App Developers" />
        <AwardImage src={award_5} alt="Top Rated App Development Company" />
        <AwardImage src={award_6} alt="Top Rated App Development" />
        <AwardImage
          src={award_5}
          alt="Top Rated Software Development Company"
        />
      </Slider>
    </AwardsSection>

    <TrustedSection data-aos="fade-up">
      <Container>
        <Title>Trusted By 100+ Happy Brands</Title>
        <Subtitle>
          At Solminica, we are dedicated to driving continuous innovation and
          digital transformation for our stakeholders. We help our <br/> clients
          stay aligned with the latest technology trends, giving them a <br/>
          competitive advantage. We are proud to have maintained a 90% client
          retention rate since 2017.
        </Subtitle>
        <Slider {...carouselSettings}>
          <div>
            <TrustedLogo onClick={() => window.open("https://www.powergrid.in/", "_blank")} src={trusted_partner_1} alt="Trusted Partner 1" />
          </div>
          <div>
            <TrustedLogo onClick={() => window.open("https://www.rainbowhospitals.in/", "_blank")} src={trusted_partner_2} alt="Trusted Partner 2" />
          </div>
          {/* <div>
            <TrustedLogo onClick={() => window.open("https://www.rainbowhospitals.in/", "_blank")} src={trusted_partner_3} alt="Trusted Partner 3" />
          </div> */}
          <div>
            <TrustedLogo onClick={() => window.open("https://apwrims.ap.gov.in/", "_blank")} src={trusted_partner_4} alt="Trusted Partner 4" />
          </div>
          <div>
            <TrustedLogo onClick={() => window.open("https://bambinoagro.com/", "_blank")} src={trusted_partner_5} alt="Trusted Partner 5" />
          </div>
          <div>
            <TrustedLogo onClick={() => window.open("https://suvarnabhoomiinfra.com/", "_blank")} src={trusted_partner_6} alt="Trusted Partner 6" />
          </div>
          <div>
            <TrustedLogo onClick={() => window.open("https://www.merinolaminates.com/en/", "_blank")} src={trusted_partner_7} alt="Trusted Partner 7" />
          </div>
          <div>
            <TrustedLogo onClick={() => window.open("https://www.bachpanglobal.com/", "_blank")} src={trusted_partner_8} alt="Trusted Partner 8" />
          </div>
        </Slider>
      </Container>
    </TrustedSection>
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
      </Container>
      <ToastContainer position="bottom-right" />

    </AboutWrapper>
  );
};

export default Contact;
