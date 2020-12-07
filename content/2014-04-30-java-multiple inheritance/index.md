---
title: "Java doesn’t support multiple inheritance"
path: blog/java-does-not-support-multiple-inheritance
tags: [software, architecture, java, oop, inheritance]
cover: inheritance-in-java.jpg
date: 2018-04-30T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. career path of any architect
---

# Why Java doesn’t support multiple inheritance

1. Whenever you find yourself asking why Java has or does not have some feature, consider the design goals behind the Java language. A white paper published in May 1996 that explains some of the reasoning behind Java’s design.

As the white paper states, the Java design team strove to make Java:

- Simple, object oriented, and familiar
- Robust and secure
- Architecture neutral and portable
- High performance
- Interpreted, threaded, and dynamic

The reasons for omitting multiple inheritance from the Java language mostly stem from the “simple, object oriented, and familiar” goal. As a simple language, Java’s creators wanted a language that most developers could grasp without extensive training. To that end, they worked to make the language as similar to C++ as possible (familiar) without carrying over C++’s unnecessary complexity (simple).

In the designers’ opinion, multiple inheritance causes more problems and confusion than it solves. So they cut multiple inheritance from the language (just as they cut operator overloading). The designers’ extensive C++ experience taught them that multiple inheritance just wasn’t worth the headache.

1. Another reason is ambiguity around Diamond problem. This is called Diamond problem because structure on this inheritance scenario is similar to 4 edge diamond
   Multiple inheritance in Java can be achieved through interfaces

1. Next more convincing reason is that **multiple inheritances does complicate the design and creates problem during casting, constructor chaining etc** and given that there are not many scenario on which you need multiple inheritance its wise decision to omit it for the sake of simplicity.
