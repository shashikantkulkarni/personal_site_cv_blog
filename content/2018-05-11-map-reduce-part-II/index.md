---
title: "Map Reduce - Part II"
path: blog/map-reduce-part-II
tags: [software, bigdata, hdfs, mapreduce]
cover: Mapreduce.png
date: 2018-05-11T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. Hadoop MapReduce is a software framework for easily writing applications which process vast amounts of data in-parallel on large clusters of commodity hardware in a reliable, fault-tolerant manner.
---

Hadoop MapReduce is a software framework for easily writing applications which process vast amounts of data (multi-terabyte data-sets) in-parallel on large clusters (thousands of nodes) of commodity hardware in a reliable, fault-tolerant manner.

A MapReduce job usually splits the input data-set into independent chunks which are processed by the map tasks in a completely parallel manner. The framework sorts the outputs of the maps, which are then input to the reduce tasks. Typically both the input and the output of the job are stored in a file-system. The framework takes care of scheduling tasks, monitoring them and re-executes the failed tasks.

**Mapper Maps input key/value pairs to a set of intermediate key/value pairs**. Maps are the individual tasks which transform input records into a intermediate records. The transformed intermediate records need not be of the same type as the input records. A given input pair may map to zero or many output pairs. Map takes a set of data and converts it into another set of data, where individual elements are broken down into tuples (key/value pairs).

All intermediate values associated with a given output key are subsequently grouped by the framework, and passed to a Reducer to determine the final output. Users can control the sorting and grouping. The Mapper outputs are partitioned per Reducer. Users can control which keys (and hence records) go to which Reducer by implementing a custom Partitioner.

**Reducer reduces a set of intermediate values which share a key to a smaller set of values**. Reduce task, which takes the output from a map as an input and combines those data tuples into a smaller set of tuples. As the sequence of the name MapReduce implies, the reduce task is always performed after the map job.

Reducer has 3 primary phases:

1. **Shuffle**: The Reducer copies the sorted output from each Mapper using HTTP across the network.
1. **Sort**: The framework merge sorts Reducer inputs by keys (since different Mappers may have output the same key).
   The shuffle and sort phases occur simultaneously i.e. while outputs are being fetched they are merged.
1. **Reduce**: In this phase the reduce method is called for each <key, (collection of values)> in the sorted inputs.
   The output of the reduce task is typically written to a RecordWriter.
   The output of the Reducer is not **re-sorted**.
