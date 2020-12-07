import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook, github, stackoverflow, linkedin,
} = Config.social;

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <span>Shashikant</span>
          {' '}
          Kulkarni
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>
        Software Engineer
      </div>
      <div className="centerAlign box">
        <a
          href={facebook}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="facebook-f" />
        </a>
        <a
          href={linkedin}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="linkedin" />
        </a>
        <a
          href={github}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="github" />
        </a>
        <a
          href={stackoverflow}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="stack-overflow" />
        </a>
      </div>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">
          Download CV
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="mail" />
          </span>
          {' '}
          &nbsp; &nbsp;
          {/* <a
            href="mailto:&#115;&#104;&#97;&#115;&#104;&#105;&#107;&#97;
            &#110;&#116;&#46;&#107;&#117;&#108;&#107;&#97;&#114;&#110;&#105;&#64;
            &#103;&#109;&#97;&#105;&#108;&#046;&#099;&#111;&#109;"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a> */}
          <img
            className={style.email}
            src="shashikant_email.png"
            alt="Email"
          />
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="map-pin" />
          </span>
          {' '}
          &nbsp; &nbsp; Pune, India
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />
            {' '}
          </span>
          &nbsp; &nbsp; January 22
        </li>
      </ul>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={7} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={17}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
