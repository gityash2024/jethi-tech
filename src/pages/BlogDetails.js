import React from 'react';
import styled from 'styled-components';
import mb_blogs from '../assets/images/mb_blogs.png';
import robat from '../assets/images/robat.png';
import connect_blog from '../assets/images/connect_blog.png';
import Frame from '../assets/images/Frame.png';

const BlogContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const BlogTitle = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
  margin-left: 17px;
  color: #434343;
 font-family: 'Poppins';
    font-weight: 600;
    line-height: 66px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-left: 0;
    text-align: center;
    line-height: 45px;

  }
`;

const BlogMeta = styled.div`
  font-size: 14px;
  margin-bottom: 40px;
  margin-left: 22px;
  color: #666;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const BlogContent = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const MainContent = styled.div`
  flex: 2;
`;

const BlogImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const BlogText = styled.p`
      font-size: 18px;
    line-height: 30px;
    margin-bottom: 20px;
    color: #434343;
    font-weight: 400;
    font-family: 'poppins';
`;

const TagsSection = styled.div`
  margin-bottom: 40px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 20px;
  font-size: 14px;
`;

const RelatedPosts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RelatedPost = styled.div`
  flex: 1;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const RelatedPostImage = styled.img`
  width: 100%;
  height: auto;
`;

const RelatedPostImage2 = styled.img`
  width: 100%;
  height: auto;
`;

const RelatedPostTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  color: #434343;
`;

const ReadTime = styled.span`
  font-size: 14px;
  color: #666;
`;

const BlogDetails = () => {
  return (
    <BlogContainer>
      <HeroImage src={mb_blogs} alt="Mobile App Development" />
      <BlogTitle>How Long Does It Take to Develop a Mobile App?</BlogTitle>
      <BlogMeta>
        Category: Name • Posted by: Pavan Kumawat 
        <span style={{ marginLeft: '679px' }}>• 7 min read • August 11, 2023</span>
      </BlogMeta>

      <BlogContent>
        <MainContent>
          <BlogImage src={robat} alt="App Development Illustration" />
          <BlogText>
            Ever dreamed of turning your app idea into reality? But then the questions start swirling: How much will it cost? More <br />importantly, how long will it take? <br />This is a common concern, especially considering the ever-growing app market. While it's impossible to give a one-<br />size-fits-all answer, we can break down the key factors that influence development timelines. The Platform Puzzle: The <br />platform you choose (iOS or Android) can significantly impact development time. Android apps often require more<br /> effort due to the wider range of devices with varying screen sizes and operating systems. However, the app approval <br />process can be faster on Android compared to iOS. Our expert developers are well-versed in the challenges of both <br />platforms and know how to navigate them efficiently. Keeping it Simple vs. Breaking New Ground <br />The complexity of your app idea plays a big role. A straightforward app with basic features will take less time to develop <br />than a groundbreaking concept with innovative functionalities. The clearer your vision and the more detailed your <br />requirements, the smoother the development process will be.
          </BlogText>
          <BlogText>
            <RelatedPost>
              <RelatedPostImage src={connect_blog} alt="Previous Post" />
            </RelatedPost>
            At Solminica, we take the time to understand your app idea thoroughly before diving into development. <br />Features: <br />A Balancing Act: The number and complexity of features you envision will directly impact development time. More <br />features generally mean a longer timeline. It's important to prioritize core functionalities and consider a phased rollout <br />with a Minimum Viable Product (MVP) to test the market and gather valuable user feedback. <br />This allows you to refine your app and add features based on real user data, saving you time and resources in the long <br />run. <br />Knowing Your Audience: Developing an app for a small, targeted audience requires less complexity compared to a <br />large user base. Apps for a broader audience might necessitate additional investment in infrastructure, performance <br />testing, and scalability.<br /> Our focus is on delivering a polished, bug-free app that meets all the crucial performance indicators (KPIs) for a <br />successful launch. The Development Journey: The development process itself can significantly impact timelines. A well-defined approach <br />ensures everything from planning and design to development and testing progresses smoothly. Agile methodologies,<br /> which promote continuous collaboration and iterative development, are ideal for complex projects with evolving  <br />requirements.<br /> We leverage parallel development of different modules to expedite the process and deliver results faster. <br />Communication is Key: Clear and consistent communication between you and your development partner is crucial. <br />Time zone differences or communication gaps can lead to delays in resolving challenges.<br /> Our team is committed to open communication throughout the development lifecycle to keep things moving forward. <br />The Bottom Line: Building a top-notch mobile app takes time, effort, and strategic planning. By understanding the <br /> factors that influence development timelines, you can make informed decisions and set realistic expectations.<br /> If you have any questions about bringing your app idea to life, feel free to contact us today!
          </BlogText>
          <TagsSection>
            Tags: 
            <Tag>Technology</Tag>
            <Tag>AIML</Tag>
            <Tag>Language</Tag>
            <Tag>AI</Tag>
            <Tag>Collaborate</Tag>
            <Tag>Study</Tag>
          </TagsSection>
        </MainContent>
      </BlogContent>

      <RelatedPosts>
        <RelatedPost>
          <RelatedPostImage2 src={Frame} alt="Next Post" />
          <RelatedPostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</RelatedPostTitle>
          <ReadTime>Next Post → • 7 min Read</ReadTime>
        </RelatedPost>
        <RelatedPost>
          <RelatedPostImage2 src={Frame} alt="Next Post" />
          <RelatedPostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</RelatedPostTitle>
          <ReadTime>Next Post → • 7 min Read</ReadTime>
        </RelatedPost>
      </RelatedPosts>
    </BlogContainer>
  );
};

export default BlogDetails;
