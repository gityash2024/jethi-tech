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

const BlogPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  span {
    color: #0066CC;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 0;
  max-width: 600px;
  line-height: 1.5;
  font-family: 'poppins';
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
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
  color: #333;
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
  color: #666;
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
  color: #333;
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

const Blog = () => {
  const navigate = useNavigate();
  return (
    <BlogPage>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Our <span style={{color: '#0000FF'}}>Blogs</span></HeroTitle>
          <HeroSubtitle>
            Solminica creates inspirational designs and robust 
            solutions for Web and mobile apps. We combine our 
            expertise in tech & design.
          </HeroSubtitle>
        </HeroContent>
        <HeroImage src={our_blog} alt="Our Blogs" />
      </HeroSection>

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
    </BlogPage>
  );
};

export default Blog;
