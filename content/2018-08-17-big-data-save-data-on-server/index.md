---
title: "Big Data - Save data on BigData server"
path: blog/big-data-save-data-on-server
tags: [software, bigdata, cassandra, hdfs, mongodb, mysql, neo4j]
cover: ./BigData_Architecture_Stages-Persist.png
date: 2018-08-19T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. Once the data is collected, we may want to save it for further processing.
---

Back to [BigData](../blog/big-data "Big Data")

Once the data is collected using options mentioned in [BigData-Collecting Data](../blog/big-data-collecting-data "BigData-Collecting Data") post, we may want to save it for further processing. It is not necessary that you alway want to persist this data. Sometimes you can directly process this data and transform it and then you may want to persist it. It all depends on what you want to do with this data once it is in the system, either persist it and then transform or transform it first and then persist or you may even do not want to persist it. This persistence is optional based on your use case.

We will consider the case where once the data is in the system we want to persist it. So what are the options to save this data.

- **HDFS**: We can save the data on Hadoop Distributed File System (HDFS).
- **RDBMS**: Surprised? Yes, we can save data into RDBMS. We are into BigData and why do we want to store data into RDBMS? In case of polyglot persistence, some of the configuration, meta-data could be stored in RDBMS like MySql.
- **NoSQL Database**: There are various options available here depending on your project requirement. You can save data into Apache Cassandra, MongoDB, Neo4J, and DB for Elastic Search, Amazon DynamoDB.
- **Cloud services**: You can also push the data on to cloud spaces like Amazon S3 buckets.

Once the data is persisted, then you can use it the way you want it. Transform it and use it for reporting or analytics or any other purpose.

Hope this is helpful

Back to [BigData](../blog/big-data "Big Data")