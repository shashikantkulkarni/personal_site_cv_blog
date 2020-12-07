---
title: "Big Data - Reporting"
path: blog/big-data-reporting
tags: [software, bigdata, reports, cassandra, hdfs, spark, kafka]
cover: BigData_Architecture_Stages-Reporting.png
date: 2018-08-20T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. Here we are at the reporting stage. This is the phase where we generate useful information from the transformed data. This is “L” of ETL process.
---

Back to [BigData](../blog/big-data "Big Data")

Ok so here we are at the reporting stage. This is the phase where we generate useful information from the transformed data. This is “L” of ETL process (Extract->Transform->Load). In this stage there are tools to generate various kinds of reports to the different stakeholders in any organisation. Using this information the stakeholders can make business strategies or make some decisions which may help the organisation to grow further in right direction.

There are following tools which can be used in this stage to load the data. Some of these are:

- **Cloudera Impala**: This is in-memory distributed query engine for Hadoop. It is interactive and very fast compare to other similar tools. It supports joins, aggregation. The downside of it is it does not have graphics. It also supports HDFS and HBase only.

- **Spark SQL**: Easy to use. Provides SQL like programming. It is very fast and flexible. This also supports joins, aggregation. Internally it generated Map-Reduce operations on Spark RDDs. It has Machine Learning support as well as can be used for streaming. Performance and scalability is a plus. Supports multiple languages like Java, Scala and Python. The downside is there is no graphics and requires programming skills.

- **3rd Party tools**: There are number of options exists for 3rd party tools. Based on your project budgets you can choose any of them. Tableau, Pentaho, Jasper, Birst are some of the names. These tools have excellent graphical UI support. They also support authorised access to various features. The downside is the cost.

Hope this is helpful

Back to [BigData](../blog/big-data "Big Data")
