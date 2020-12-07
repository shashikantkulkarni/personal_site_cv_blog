---
title: "Software architecture and design"
path: blog/software-architecture-and-design
tags: [software, architecture, design]
cover: ./software_architecture.png
date: 2012-02-03T05:25:44.226Z
excerpt: Blogging and writing about tech stacks is always been my thing. What is the difference between software architecture and software design?.
---

You will find this question on many forums asked by number of people. Everyone has his/her own perspective on this topic. There is no definite final answer to this question but we can see the differences between these and decide on our own where to draw the thin line between the two.

Following are my personal thoughts on this and whatever I have learned till today.

------
| **Architecture is** | **Design is** |
| :---        |          ---: |
| A skeleton on which the functionality would be designed | Make use of architecture skeleton |
| Conceptual | Concrete |
| Structure of components/modules of the entire system | Writing details about each component |
| Covers functional as well as non-functional requirements (-ilities) such as scalability, performance, extensibility, availability, reliability,maintainability, manageability, security, etc | The functional requirements of a solution are covered |
| More concerned with qualities or attributes of the design | More concerned about functional/user requirements |
| Also covers the audit, logging, configuration management, containers (app servers), entity mapping (DB models), people, processes, hardware, software, network, integration with external systems, etc | Model creation of the solution, describing how the product/system shall be built and how it shall behave. Describe the component interfaces, classes and attributes. Describe state transitions, component collaboration, object instances and methods. Make sure that the solution can be traced back to the requirements. |
| Also identifies alternative solutions and evaluates them against evaluation criteria, considering options of reuse, make and buy as well as the design, implementation and verification effort/cost of the design alternatives | The approved solution is used for design |
| Also selects the appropriate design methodology which should be used to design the system, prepare high-level estimates for the selected solution, document design constraints, principles and guidelines, risks associated, assumptions, limitations. Design and document the high-level architecture and components. | The constraints, guidelines, risks, limitations, assumptions are the basis of design |
| In civil engineering jargon it is like a blueprint of the building where it is mentioned how the different parts like floor, wall, windows, and door will fit together as well as their properties & relationships with each other | Making these different parts of the building like what it will require to build the floor, wall, windows, and door can be considered as design |
| Provides the rationale for the software decisions. Why one database is considered over the other, why one technology is considered over the other etc. | Considers the decision made in architecture and proceeds further with it |
| How one approaches a problem | More about how one writes the algorithm/code for the individual part/component |
| One cannot reverse engineer the architecture | Can be reverse engineered |

------

We can take one example here. Say there is a graphical user interface and there is a button on the page. In design we consider what should happen when a user presses a button. In architecture we are more concerned with what happens when ten thousand users press a button. I hope you got my point.

There is a thin border line or may be some overlap between architecture and design. It is difficult to define where the architecture ends and where the design starts. What matters is you need both to develop a good, sustainable solution.
