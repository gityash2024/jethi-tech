import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import our_blog from '../assets/images/our_blog.png';
import blog_1 from '../assets/images/blog_1.png';
import blog_2 from '../assets/images/blog_2.png';
import blog_3 from '../assets/images/blog_3.png';
import blog_4 from '../assets/images/blog_4.png';
import blog_5 from '../assets/images/blog_5.png';
import blog_6 from '../assets/images/blog_6.png';
import blog_7 from '../assets/images/blog_7.png';
import card from '../assets/images/card.png';

const BlogPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSection_1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    
    flex-direction: column;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle_1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #434343;
 line-height: 62.4px;
  margin-bottom: 20px;

  span {
    color: #0066CC;
  }
`;

const HeroSubtitle_1 = styled.p`
  font-size: 20px;
  color: #4E4E4E;
  margin-bottom: 0;
  max-width: 600px;
  line-height: 30px;
  font-family: 'poppins';
  font-weight: 400;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
  @media (max-width: 768px) {
  max-width: 100%;
    
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background: #fff;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogCardContent = styled.div`
  padding: 20px;
`;

const BlogCardDate = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const BlogCardTitle = styled.h3`
  font-size: 18px;
  color: #434343;
  margin-bottom: 10px;
`;

const BlogCardReadTime = styled.p`
  font-size: 14px;
  color: #666;
`;

const LoadMoreButton = styled.button`
  background-color: #0066CC;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ResultsCount = styled.p`
  font-size: 16px;
 color: #434343;
    line-height: 24px;
    font-weight: 500;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const FilterDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownSelect = styled.select`
  appearance: none;
  padding: 8px 30px 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: #434343;
  background-color: white;
  cursor: pointer;
`;

const DropdownArrow = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  
  img {
    width: 12px;
    height: 12px;
  }
`;

// card css 

const ServicesPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: url(${card}) no-repeat center center;
  background-size: cover;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px 0;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h2`
  font-size: 18px;
  color: #333333;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const HeroTitle = styled.h1`
  color: #434343;
  font-size: 48px;
`;

const HeroSubtitle = styled.p`
  color: #4E4E4E;
  font-size: 20px;
`;




const Blog = () => {
  const navigate = useNavigate();
  const services = [
    { title: "Web Development", description: "Build high-performing architectures for your projects." },
    { title: "Mobile Solutions", description: "Create seamless mobile solutions." },
    { title: "Cloud and DevOps", description: "Implement efficient cloud solutions and DevOps practices." },
    // Add more services as needed
  ];
  
  return (
    <BlogPage>
      <HeroSection_1>
        <HeroContent>
          <HeroTitle_1>Our <span style={{color: '#0000FF'}}>Blogs</span></HeroTitle_1>
          <HeroSubtitle_1>
            Solminica creates inspirational designs and robust 
            solutions for Web and mobile apps. We combine our 
            expertise in tech & design.
          </HeroSubtitle_1>
        </HeroContent>
        <HeroImage src={our_blog} alt="Our Blogs" />
      </HeroSection_1>

      <BlogHeader>
        <ResultsCount>Showing 1-6 of 13 results</ResultsCount>
        <FilterContainer>
          <FilterDropdown>
            <DropdownSelect>
              <option>Categories</option>
            </DropdownSelect>
            <DropdownArrow>
              <img src={blog_7} alt="Dropdown arrow" />
            </DropdownArrow>
          </FilterDropdown>
          <FilterDropdown>
            <DropdownSelect>
              <option>Tags</option>
            </DropdownSelect>
            <DropdownArrow>
              <img src={blog_7} alt="Dropdown arrow" />
            </DropdownArrow>
          </FilterDropdown>
        </FilterContainer>
      </BlogHeader>

      <BlogGrid>
        {[blog_1, blog_2, blog_3, blog_4, blog_5, blog_6].map((blog, index) => (
          <BlogCard key={index} onClick={() => navigate('/blog-details')}>
            <BlogCardImage src={blog} alt={`Blog ${index + 1}`} />
            <BlogCardContent>
              <BlogCardDate>August 11, 2023</BlogCardDate>
              <BlogCardTitle>Transforming the World with Our Revolutionary Technology.</BlogCardTitle>
              <BlogCardReadTime>3 min read</BlogCardReadTime>
            </BlogCardContent>
          </BlogCard>
        ))}
      </BlogGrid>

      <LoadMoreButton>Load More</LoadMoreButton>
{/* 
      <ServicesPage>
      <HeroSection>
        <HeroTitle>Our Services</HeroTitle>
        <HeroSubtitle>We provide top-notch services in various tech fields.</HeroSubtitle>
      </HeroSection>
      <ServicesGrid>
        {services.map(service => (
          <ServiceCard key={service.title}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesPage> */}
    </BlogPage>
  );
};

export default Blog;
