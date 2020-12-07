---
title: "Map Reduce - Part I"
path: blog/map-reduce-part-I
tags: [software, bigdata, hdfs, mapreduce]
cover: Mapreduce.png
date: 2018-05-10T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. Hadoop MapReduce is a software framework for easily writing applications which process vast amounts of data in-parallel on large clusters of commodity hardware in a reliable, fault-tolerant manner.
---

To understand Hadoop’s core concept of **MapReduce** we will look at an analogy with an example. After going through the example, you can get clear idea about what is **MapReduce programming paradigm**. So let’s go…..

You can think of map and reduce tasks as the way a census is conducted in a country, where the census bureau would dispatch its people to each city in each state of that country. Each census taker in each city would be tasked to count the number of people in that city and then return their results to the capital city.

Then, the results from each city would be reduced to a single count (sum of all cities) to determine the overall population of the country. This mapping of people to cities, in parallel, and then combining the results (reducing) is much more efficient than sending a single person to count every person in the empire in a serial fashion.

Points to note here are:

- The data is not moved anywhere (The population)
- The mapper logic program (the census taker) is executed where the data is
- The mappers are run in parallel to complete the activity quickly.

The same way when MapReduce programs are executed, the mappers will run the map program logic on the data and it will be executed where the data is located. All the mappers will run in parallel.

Once the data is mapped and intermediate results are generated then reducers comes in picture and does the aggregation of data based on the required output.

If you understand this explanation then understanding MapReduce programming paradigm will be easy for anyone.

Refer [Part II](../blog/map-reduce-part-II "MapReduce-II")
