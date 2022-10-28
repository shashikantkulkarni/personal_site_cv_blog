import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hi! My name is Shashikant Kulkarni. I'm a software engineer, <b>AWS certified cloud architect</b>, <b>Oracle certified software architect</b>,
    <b>certified Java developer</b>, <b>Cloudera certified hadoop developer</b>, bigdata developer. I like to experiment with different
    technologies.I have an experience working with <b>AWS services including Route53, Cloudfront, API Gateway, load balancers, EKS, MSK, AWS Organization, AWS Identity Center, Istio, etc</b>, <b>Java, Python, Spring boot, PHP, LAMP stack, JavaEE, Apache Spark,
    Apache Cassandra, Apache Kafka, NiFi</b>, ReactJS, Angular. I'm Machine Learning and AI enthusiast.`,
  paraTwo: `<b>I provide consultancy in AWS services, Big Data projects, especially in Apache Spark, Apache Cassandra and Spring boot.</b>
    I have practical experience working with cloud infrastructures like <b>AWS</b> and have deployed applications
    keeping scalability, availability, security, cost and performance in mind. Jenkins, AWS code pipeline are some of the
    tools I use for <b>CI/CD</b>. I'm always a learner and a self taught programmer.`,
  paraThree: `➢ I am capable of working in a collaborative, multi-site environment to support rapid development and delivery of results and capabilities.
    <br>➢ I have comprehensive experience of architecting, designing, developing and deploying architectures
    for software applications.<br>➢ Experience in handling customers having global presence, <br>➢ Build relationships with business clients through quality work deliveries.
    <br>➢ Ability to interact with clients to define user requirements and application architecture. <br>➢ Assisting Project Manager in planning, team ramp - up,
    <br>➢ Facilitate design / architectural discussions, estimation, status and stand - up meetings, <br>➢ Contributes to documenting design, functional specification, test cases, project risks,
    <br>➢ Experience in transitioning applications from onshore to offshore, <br>➢ Constitute a technical gateway between the project manager and the developers and business
    experts.
    `,
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
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraThree)} />
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
            textH4="Pursued C-DAC"
            textH3="Center for diploma in advance computing"
            height={60}
            width={60}
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
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Keep learning"
            textH3="From people I meet"
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
