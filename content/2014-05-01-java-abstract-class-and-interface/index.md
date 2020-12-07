---
title: "Java abstract class and interface"
path: blog/java-abstract-class-and-interface
tags: [software, architecture, java, oop, abstractclass, interface]
cover: abstract-class-and-interface.png
date: 2018-05-01T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. When to use abstract class and interface in Java
---

# When to use abstract class and interface in Java

**Abstract Class** and **Interface** are core part of java programming language and whether to choose interface or abstract class or Interface while designing our system is a design decision that every architect faces. Whether to choose between Interface and abstract class for providing contract for subclasses is a design decision and depends on many factors

Choosing interfaces and abstract classes is not an either/or proposition. If you need to change your design, make it an interface. However, you may have abstract classes that provide some default behavior. Abstract classes are excellent candidates inside of application frameworks.

Abstract classes let you define some behaviors; they force your subclasses to provide others. For example, if you have an application framework, an abstract class may provide default services such as event and message handling. Those services allow your application to plug in to your application framework. However, there is some application-specific functionality that only your application can perform. Such functionality might include startup and shutdown tasks, which are often application-dependent. So instead of trying to define that behavior itself, the abstract base class can declare abstract shutdown and startup methods. The base class knows that it needs those methods, but an abstract class lets your class admit that it doesn’t know how to perform those actions; it only knows that it must initiate the actions. When it is time to start up, the abstract class can call the startup method. When the base class calls this method, Java calls the method defined by the child class.

Here are some guidelines on when to use an abstract class and when to use interfaces in Java:

- An abstract class is good if you think you will plan on using inheritance since it provides a common base class implementation to derived classes.
- An abstract class is also good if you want to be able to declare non-public members. In an interface, all methods must be public.
- If you think you will need to add methods in the future, then an abstract class is a better choice. Because if you add new method headings to an interface, then all of the classes that already implement that interface will have to be changed to implement the new methods. That can be quite a hassle.
- Interfaces are a good choice when you think that the API will not change for a while.
- Interfaces are also good when you want to have something similar to multiple inheritances, since you can implement multiple interfaces.
- Variables declared in a Java interface is by default final. An abstract class may contain non-final variables.
- Members of a Java interface are public by default. A Java abstract class can have the usual flavors of class members like private, protected, etc.
- An interface can extend another Java interface only; an abstract class can extend another Java class and implement multiple Java interfaces.
- If there are a lot of methods in the contract, then abstract class is more useful because we can provide default implementation for some of the methods that are common for all the subclasses. Also if subclasses don’t need to implement particular method, they can avoid providing the implementation but in case of interface, the subclass will have to provide implementation for all the methods even though it’s of no use and implementation is just empty block.
- If our base contract keeps on changing then interfaces can cause issues because we can’t declare additional methods to the interface without changing all the implementation classes, with abstract class we can provide the default implementation and only change the implementation classes that are actually going to use the new methods.
