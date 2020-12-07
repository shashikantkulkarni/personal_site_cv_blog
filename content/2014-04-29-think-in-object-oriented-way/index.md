---
title: "Think in object oriented way"
path: blog/think-in-object-oriented-way
tags: [software, architecture, java, oop]
cover: ./oop.png
date: 2018-04-29T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. Think in object oriented way
---

# Think in object oriented way

Following techniques will force you to think in object oriented way, even though you may not yet be aware of them.

1. Do not copy and paste code – ever.
1. Create classes that represent the things you talk about when talking about the functionality – for example, an order entry system will have Orders, Customers, Accounts, etc.
1. When creating these classes, do NOT code any public set and get methods to access the class data members.
1. Add methods to these domain model classes that perform the work on the object in question. Order.invoice(), account.close(), InventoryItem.decrement(). The lack of public get methods will show you the correct location for the code (where the data is – in the appropriate domain object). Remember, an object is data and the code that operates on it – anything short of both is not an object.
1. You will eventually find that you have to add some public get methods for some class members, and that is ok, just hold off until you are forced to do so. Reluctantly add public get methods.
1. At the level of the application, almost every line of code should be moving mountains. In other words, most of the lines of code at the application level should be calling on domain model methods.
1. Put all of the functionality in the domain model objects, then expose that functionality in an application by hooking it up to a user interface. I repeat, put the functionality in the domain model, not the application.

If you follow these guidelines, you will definitely be producing object oriented code, and probably at a much higher level of proficiency than many experienced developers.
