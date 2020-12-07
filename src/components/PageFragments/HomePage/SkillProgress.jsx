import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';
import style from './SkillProgress.module.less';

const SkillsProgress = () => (
  <div>
    <h2>Primary Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Java" />
        <ProgressBar percent={90} text="JavaEE" />
        <ProgressBar percent={75} text="Spring Boot" />
        <ProgressBar percent={80} text="Python" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={70} text="Hadoop" />
        <ProgressBar percent={85} text="Apache Spark" />
        <ProgressBar percent={80} text="Apache Cassandra" />
        <ProgressBar percent={60} text="Apache Kafka" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Amazon Web Services" />
        <ProgressBar percent={95} text="AWS Serverless" />
        <ProgressBar percent={90} text="AWS Lambda" />
        <ProgressBar percent={85} text="AWS DynamoDB" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={95} text="REST API" />
        <ProgressBar percent={75} text="AWS Pipeline" />
        <ProgressBar percent={75} text="AWS Amplify" />
        <ProgressBar percent={75} text="AWS Cognito" />
      </Col>
    </Row>
    <br />
    <h2>Skill set</h2>
    <Row gutter={[20, 20]}>
      <div id={style.skills}>
        <ul>
          <li>Java</li>
          <li>J2EE</li>
          <li>Spring Boot</li>
          <li>Python</li>
          <li>Hadoop</li>
          <li>Apache Kafka</li>
          <li>Apache Spark</li>
          <li>Apache Cassandra</li>
          <li>Machine Learning</li>
          <li>Pandas</li>
          <li>NumPy</li>
          <li>MatPlotLib</li>
          <li>Jupyter Notebook</li>
          <li>Pycharm</li>
          <li>openCV</li>
          <li>Scikit-Learn</li>
          <li>seaborn</li>
          <li>TensorFlow</li>
          <li>Amazon Web Services</li>
          <li>AWS Serverless</li>
          <li>AWS Lambda</li>
          <li>AWS DynamoDB</li>
          <li>AWS Aurora</li>
          <li>Oracle</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>REST API</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Angular</li>
          <li>ReactJs</li>
          <li>Ionic framework</li>
          <li>Dygraphs</li>
          <li>HighCharts</li>
          <li>Vert.X</li>
          <li>Wordpress</li>
          <li>PHP</li>
          <li>Code Igniter</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Maven</li>
          <li>Ant</li>
          <li>Ansible</li>
          <li>Jenkins</li>
          <li>AWS Pipeline</li>
          <li>JIRA</li>
          <li>Bitbucket</li>
          <li>Github</li>
          <li>GitLab</li>
          <li>AWS CodeCommit</li>
        </ul>
      </div>
      {/* <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Java" />
        <ProgressBar percent={90} text="JavaEE" />
        <ProgressBar percent={75} text="Spring Boot" />
        <ProgressBar percent={80} text="Python" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={70} text="Hadoop" />
        <ProgressBar percent={85} text="Apache Spark" />
        <ProgressBar percent={80} text="Apache Cassandra" />
        <ProgressBar percent={60} text="Apache Kafka" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="Amazon Web Services" />
        <ProgressBar percent={95} text="AWS Serverless" />
        <ProgressBar percent={90} text="AWS Lambda" />
        <ProgressBar percent={85} text="AWS DynamoDB" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={95} text="REST API" />
        <ProgressBar percent={75} text="AWS Pipeline" />
        <ProgressBar percent={75} text="AWS Amplify" />
        <ProgressBar percent={75} text="AWS Cognito" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="Oracle" />
        <ProgressBar percent={85} text="MySql" />
        <ProgressBar percent={75} text="AWS Aurora" />
        <ProgressBar percent={65} text="PostgreSql" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={90} text="JavaScript" />
        <ProgressBar percent={75} text="ReactJS" />
        <ProgressBar percent={70} text="Angular" />
        <ProgressBar percent={65} text="node.Js" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={70} text="Ionic framework" />
        <ProgressBar percent={75} text="Vert.X" />
        <ProgressBar percent={75} text="Maven" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="PHP" />
        <ProgressBar percent={75} text="Code Igniter" />
        <ProgressBar percent={65} text="Wordpress" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="HTML5" />
        <ProgressBar percent={80} text="CSS3" />
        <ProgressBar percent={65} text="SCSS" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="Ant" />
        <ProgressBar percent={80} text="Ansible" />
        <ProgressBar percent={90} text="Jenkins" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="JIRA" />
        <ProgressBar percent={85} text="GitLab" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={85} text="Bitbucket" />
        <ProgressBar percent={90} text="Github" />
      </Col>
    </Row>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={35} text="Machine Learning" />
        <ProgressBar percent={25} text="Pandas" />
        <ProgressBar percent={25} text="NumPy" />
        <ProgressBar percent={25} text="MatPlotLib" />
        <ProgressBar percent={23} text="TensorFlow" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={40} text="Jupyter Notebook" />
        <ProgressBar percent={55} text="Pycharm" />
        <ProgressBar percent={30} text="openCV" />
        <ProgressBar percent={20} text="Scikit-Learn" />
        <ProgressBar percent={20} text="seaborn" />
      </Col> */}
    </Row>
  </div>
);

export default SkillsProgress;
