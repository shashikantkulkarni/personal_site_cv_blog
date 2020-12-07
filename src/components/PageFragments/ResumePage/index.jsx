import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Button, Row, Col } from 'antd';
import SEO from '../../Seo';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    const pageToggle = () => {
      switch (pageNumber) {
        case 1:
          this.setState({ pageNumber: 2 });
          break;
        case 2:
          this.setState({ pageNumber: 3 });
          break;
        case 3:
          this.setState({ pageNumber: 4 });
          break;
        case 4:
          this.setState({ pageNumber: 5 });
          break;
        case 5:
          this.setState({ pageNumber: 1 });
          break;
        default:
          this.setState({ pageNumber: 1 });
          break;
      }
      return 1;
    };

    return (
      <div>
        <SEO
          title="Resume"
          description="My resume consists of my biodata of experience. You can hire me if you feel
          I'm good for any position in your organization. I'm open to various challenges that come
          in the way of building various software applications."
          path="resume"
        />
        <Row justify="center" style={{ background: '' }}>
          <Col span={3}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={pageToggle}>
              {pageNumber < numPages ? 'Next Page' : 'First Page'}
            </Button>
          </Col>
        </Row>
        <Document
          file="resume.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page size="A4" pageNumber={pageNumber} />
        </Document>
        <Row justify="center" style={{ background: '' }}>
          <Col span={3}>
            <p>{`Page ${pageNumber} of ${numPages}`}</p>
          </Col>
          <Col span={2}>
            <Button type="primary" onClick={pageToggle}>
              {pageNumber < numPages ? 'Next Page' : 'First Page'}
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
