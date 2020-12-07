import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import ResumePage from '../../components/PageFragments/ResumePage';

const Resume = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Resume"
        description="Hello folks Shashikant here. You can contact me through the given enail address on this page.
                    Please feel free to contact me, don't be shy guys, just remember Shashikant is always open to talk about
                    software projects. I provide consultancy in Big Data projects, especially in Apache Spark, Apache Cassandra, AWS Services"
        path="/contact"
        keywords={[
          'Shashikant',
          'Kulkarni',
          'BigData developer',
          'FullStack developer',
          'Apache Spark',
          'Apache Cassandra',
          'Java',
          'Python',
          'ReactJS',
          'Angular',
          'AWS',
          'AWS Lambda',
          'Serverless',
          'technology',
        ]}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Resume</h1>
        </div>
        <ResumePage />
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Resume;
