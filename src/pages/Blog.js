import React from 'react';
import styled from 'styled-components';
import mb_blogs from '../assets/images/mb_blogs.png';
import robat from '../assets/images/robat.png';
import connect_blog from '../assets/images/connect_blog.png';
import Frame from '../assets/images/Frame.png';
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
  color: #333;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 0;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const BlogCard = styled.div`
  background: #fff;
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

// const BlogContainer = styled.div`
//   max-width: 1300px;
//   margin: 0 auto;
//   padding: 40px 20px;
// `;

// const HeroImage = styled.img`
//   width: 100%;
//   height: auto;
//   margin-bottom: 40px;
// `;

// const BlogTitle = styled.h1`
//   font-size: 48px;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const BlogMeta = styled.div`
//   font-size: 14px;
//   margin-bottom: 40px;
//   color: #666;
// `;

// const BlogContent = styled.div`
//   display: flex;
//   gap: 40px;
// `;

// const MainContent = styled.div`
//   flex: 2;
// `;

// const BlogImage = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

// const BlogText = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const TagsSection = styled.div`
//   margin-bottom: 40px;
// `;

// const Tag = styled.span`
//   background-color: #f0f0f0;
//   padding: 5px 10px;
//   margin-right: 10px;
//   border-radius: 20px;
//   font-size: 14px;
// `;

// const RelatedPosts = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 40px;
// `;

// const RelatedPost = styled.div`
//   flex: 1;
//   margin: 0 10px;
// `;

// const RelatedPostImage = styled.img`
//   max-width: 100%;
//   height: auto;
// `;

// const RelatedPostTitle = styled.h3`
//   font-size: 18px;
//   margin-top: 10px;
//   color: #333;
// `;

// const ReadTime = styled.span`
//   font-size: 14px;
//   color: #666;
// `;

const Blog = () => {
  return (
    
    <BlogPage>
    <HeroSection>
      <HeroContent>
        <HeroTitle>Our Blogs</HeroTitle>
        <HeroSubtitle>
          Solminica creates inspirational designs and robust solutions for Web and mobile apps. We combine our expertise in tech & design
        </HeroSubtitle>
      </HeroContent>
      <HeroImage src={our_blog} alt="Our Blogs" />
    </HeroSection>

    <BlogGrid>
      {[blog_1, blog_2, blog_3, blog_4, blog_5, blog_6, blog_1, blog_1, blog_1].map((blog, index) => (
        <BlogCard key={index}>
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



    // <BlogContainer>
    //   <HeroImage src={mb_blogs} alt="Mobile App Development" />
    //   <BlogTitle>How Long Does It Take to Develop a Mobile App?</BlogTitle>
    //   <BlogMeta>Category: Name • Posted by: Pavan Kumawat • 7 min read • August 11, 2023</BlogMeta>

    //   <BlogContent>
    //     <MainContent>
    //       <BlogImage src={robat} alt="App Development Illustration" />
    //       <BlogText>
    //         Ever dreamed of turning your app idea into reality? But then the questions start swirling: How much will it cost? More importantly, how long will it take?
    //         This is a common concern, especially considering the ever-growing app market. While it's impossible to give a one-size-fits-all answer, we can break down the key factors that influence development timelines. The Platform Puzzle: The platform you choose (iOS or Android) can significantly impact development time. Android apps often require more effort due to the wider range of devices with varying screen sizes and operating systems. However, the app approval process can be faster on Android compared to iOS. Our expert developers are well-versed in the challenges of both platforms and know how to navigate them efficiently. Keeping it Simple vs. Breaking New Ground
    //         The complexity of your app idea plays a big role. A straightforward app with basic features will take less time to develop than a groundbreaking concept with innovative functionalities. The clearer your vision and the more detailed your requirements, the smoother the development process will be.
    //       </BlogText>
    //       <BlogText>
    //         At Solminica, we take the time to understand your app idea thoroughly before diving into development.
    //         Features:
    //         A Balancing Act : The number and complexity of features you envision will directly impact development time. More features generally mean a longer timeline. It's important to prioritize core functionalities and consider a phased rollout with a Minimum Viable Product (MVP) to test the market and gather valuable user feedback.
    //         This allows you to refine your app and add features based on real user data, saving you time and resources in the long run.
    //         Knowing Your Audience : Developing an app for a small, targeted audience requires less complexity compared to a large user base. Apps for a broader audience might necessitate additional investment in infrastructure, performance testing, and scalability.
    //         Our focus is on delivering a polished, bug-free app that meets all the crucial performance indicators (KPIs) for a successful launch.
    //         The Development Journey : The development process itself can significantly impact timelines. A well-defined approach ensures everything from planning and design to development and testing progresses smoothly. Agile methodologies, which promote continuous collaboration and iterative development, are ideal for complex projects with evolving requirements.
    //         We leverage parallel development of different modules to expedite the process and deliver results faster.
    //         Communication is Key : Clear and consistent communication between you and your development partner is crucial. Time zone differences or communication gaps can lead to delays in resolving challenges.
    //         Our team is committed to open communication throughout the development lifecycle to keep things moving forward.
    //         The Bottom Line : Building a top-notch mobile app takes time, effort, and strategic planning. By understanding the factors that influence development timelines, you can make informed decisions and set realistic expectations.
    //         If you have any questions about bringing your app idea to life, feel free to contact us today!
    //       </BlogText>
    //       <TagsSection>
    //         Tags: 
    //         <Tag>Technology</Tag>
    //         <Tag>AIML</Tag>
    //         <Tag>Language</Tag>
    //         <Tag>AI</Tag>
    //         <Tag>Collaborate</Tag>
    //         <Tag>Study</Tag>
    //       </TagsSection>
    //     </MainContent>
    //   </BlogContent>

    //   <RelatedPosts>
    //     <RelatedPost>
    //       <RelatedPostImage src={connect_blog} alt="Previous Post" />
    //       <RelatedPostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</RelatedPostTitle>
    //       <ReadTime>← Previous Post • 7 min Read</ReadTime>
    //     </RelatedPost>
    //     <RelatedPost>
    //       <RelatedPostImage src={Frame} alt="Next Post" />
    //       <RelatedPostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</RelatedPostTitle>
    //       <ReadTime>Next Post → • 7 min Read</ReadTime>
    //     </RelatedPost>
    //   </RelatedPosts>
    // </BlogContainer>
  );
};

export default Blog;