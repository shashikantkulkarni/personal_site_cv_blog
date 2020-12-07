---
title: "Big Data - data transformation"
path: blog/big-data-transformation
tags: [software, bigdata, spark, hdfs, mapreduce, pentaho]
cover: ./BigData_Architecture_Stages-Transformation.png
date: 2018-08-17T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. Once the data is in the BigData platform, we process it and transform it for getting useful information out of that data.
---

Back to [BigData](../blog/big-data "Big Data")

Once the data is in the BigData platform, we process it and transform it for getting useful information out of that data. Once the raw data is transform, we can use it for various purposes like reporting, recommendations, analysis, fraud detection,  etc

To transform the data, there are various options. Some of them are listed below:

- **Custom-code**: You can write your own custom code to transform the data the way you want. But this is not a recommended approach. The bottom line is do not reinvent the wheel. Make use of the tools and framework available in market as per your project need to save your time and money.
- **Hadoop Map-reduce**: Well, you can write your own map-reduce programs but it is time consuming and will bloat your code like anything. There are various frameworks/libraries available which are based on map-reduce and can do the underline ground work for you. This approach is ok if you do not find any out of the box solution for your problem.
- **Query Languages**: This is another way of writing your logic like PL-SQL. In case of RDBMS, people like to implement some feature directly using database procedures using SQL programming. If you are expert in database programming languages like SQL then you can go for this approach. But in case of NoSql databases this approach has major limitation from the query language itself.
- **Apache Spark**: This is the best solution so far in market for data transformation. It supports various data sources to get data in memory and process it as fast as it can. Writing few lines of code and getting job done to save time and money. It has many libraries to perform different activities like machine learning. It supports various languages like Scala, Java, Python. Based on the skillset of your team you can choose the language and start working. Onboarding time is also very short.
3rd party ETL tools: There are some 3rd party ETL tools available in market which you can use based on the budget of your project. These tools will have rich features which you can use in your project. Some options are Pentaho, Talend, JasperSoft, etc.
 
So you can see that there are multiple options to transform your data. This is not the extensive list of tools/frameworks/libraries for data transformation. There would be many other tools/frameworks/libraries which you can based on your project requirement.

Hope this is helpful

Back to [BigData](../blog/big-data "Big Data")