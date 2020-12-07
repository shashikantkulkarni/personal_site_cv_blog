import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact"
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
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Contact;
