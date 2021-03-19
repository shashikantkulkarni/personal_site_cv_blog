module.exports = {
  pathPrefix: '/',
  siteUrl: 'http://shashikantkulkarni.com',
  siteTitle: 'Shashikant Kulkarni',
  siteDescription: 'Journal of a software engineer',
  author: 'Shashikant Kulkarni',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://shashikantkulkarni.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    career: 'career',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/shashikantkulkarni',
    facebook: 'https://www.facebook.com/shashikantkulkarnidotcom',
    linkedin: 'https://www.linkedin.com/in/shashikantkulkarni22/',
    stackoverflow: 'https://stackoverflow.com/users/4169583/shashikant-kulkarni?tab=profile',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://formspree.io/f/meqpaypy',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    architect: {
      name: 'architect',
      description: 'Software architect',
      color: '#f0da50',
    },
    certifiedmaster: {
      name: 'Certified Master',
      description: 'Certified Master',
      color: '#90c53f',
    },
    jee: {
      name: 'JEE',
      description: 'Java Enterprise Edition',
      color: '#eb428e',
    },
    oracle: {
      name: 'Oracle',
      description: 'Oracle Certified JavaEE Architect',
      color: '#257acc',
    },
    software: {
      name: 'software',
      description: 'software',
      color: '#61dbfa',
    },
    architecture: {
      name: 'architecture',
      description: 'Software architecture',
      color: '#6f309f',
    },
    design: {
      name: 'Design',
      description: 'Software Design',
      color: '#dd3431',
    },
    apachehadoop: {
      name: 'Apache Hadoop',
      description: 'The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.',
      color: '#43ace0',
    },
    enterprisearchitecture: {
      name: 'Enterprise Architecture',
      description: 'Enterprise Architecture',
      color: '#f9c646',
    },
    java: {
      name: 'Java',
      description: 'Java Is the Language of Possibilities. Java is powering the innovation behind our digital world.',
      color: '#f0da50',
    },
    oop: {
      name: 'OOP',
      description: 'Object Oriented Programming',
      color: '#90c53f',
    },
    inheritance: {
      name: 'Inheritance',
      description: 'Java Inheritance',
      color: '#eb428e',
    },
    interface: {
      name: 'Interface',
      description: 'Java Interfaces',
      color: '#257acc',
    },
    abstractclass: {
      name: 'Abstract Class',
      description: 'Abstract class',
      color: '#61dbfa',
    },
    career: {
      name: 'Career',
      description: 'Software architect career',
      color: '#6f309f',
    },
    bigdata: {
      name: 'BigData',
      description: 'BigData',
      color: '#dd3431',
    },
    hdfs: {
      name: 'HDFS',
      description: 'The Hadoop Distributed File System ( HDFS ) is a distributed file system designed to run on commodity hardware.',
      color: '#43ace0',
    },
    mapreduce: {
      name: 'MapReduce',
      description: 'MapReduce is a processing technique and a program model for distributed computing',
      color: '#f9c646',
    },
    report: {
      name: 'Reports',
      description: 'Management reports',
      color: '#f0da50',
    },
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    cassandra: {
      name: 'Cassandra',
      description: 'The Apache Cassandra database is the right choice when you need scalability and high availability without compromising performance.',
      color: '#f0da50',
    },
    spark: {
      name: 'Spark',
      description: 'Apache Spark is a unified analytics engine for big data processing',
      color: '#90c53f',
    },
    kafka: {
      name: 'Kafka',
      description: 'Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.',
      color: '#eb428e',
    },
    flume: {
      name: 'Flume',
      description: 'Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.',
      color: '#257acc',
    },
    sqoop: {
      name: 'Sqoop',
      description: 'Apache Sqoop(TM) is a tool designed for efficiently transferring bulk data between Apache Hadoop and structured datastores such as relational databases.',
      color: '#61dbfa',
    },
    mongodb: {
      name: 'MongoDB',
      description: 'MongoDB is an open-source document database and leading NoSQL database.',
      color: '#6f309f',
    },
    mysql: {
      name: 'MySQL',
      description: 'MySQL is relational database',
      color: '#dd3431',
    },
    neo4j: {
      name: 'Neo4J',
      description: 'Neo4j is the graph database platform powering mission-critical enterprise applications like artificial intelligence, fraud detection and recommendations.',
      color: '#43ace0',
    },
    pentaho: {
      name: 'Pentaho',
      description: 'Pentaho is business intelligence (BI) software that provides data integration, OLAP services, reporting, information dashboards, data mining and extract, transform, load (ETL) capabilities.',
      color: '#f9c646',
    },
  },
};
