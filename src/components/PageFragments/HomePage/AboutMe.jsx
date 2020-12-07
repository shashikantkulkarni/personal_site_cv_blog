import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi! My name is Shashikant Kulkarni. I'm a software engineer, Oracle certified software architect,
    certified Java developer, Cloudera certified hadoop developer, bigdata developer. I'm also a full stack web developer who is
    passionate about various frontend and backend technologies. I like to experiment with different
    technologies. I have an experience of nearly 19 years working with Java, Python, Spring boot, PHP, LAMP stack, JavaEE, Apache Spark,
    Apache Cassandra, Apache Kafka, ReactJS, Angular, AWS. I'm Machine Learning and AI enthusiast. Writing blogs about tech stacks
    is what Shashikant loves to do. Check my blog which I update frequently.`,
  paraTwo: `<b>Currently I provide consultancy in Big Data projects, especially in Apache Spark, Apache Cassandra, AWS Services and Spring boot.</b>
    I also have hands on experience working with cloud infrastructures like <b>AWS</b> and have deployed applications
    keeping scalability, availability, security and performance in mind. Jenkins, AWS code pipeline are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
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
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Aurangabad, Maharashtra, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="worklocation.png"
            height={64}
            alt="Work location image"
            textH4="Work and earn in"
            textH3="Pune, Maharashtra, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.E. in"
            textH3="Production Engineering"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col> */}
      </Row>
    </>
  );
};
export default AboutMe;
