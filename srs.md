COS 397:  Computer Science Capstone I
System Requirements Specification Template
(Adapted from Susan Mitchell and Michael Grasso)

General Instructions

1.	Provide a cover page that includes the document name, product name, customer name, team name, team member names, and the current date.
2.	Number the pages of the document.
3.	Number and label all figures.  Refer to the figures by number in the text.
4.	All sections should have an introductory sentence or two.
5.	Do not use vague words and phrases such as may, might, could, possibly, assumed to be, some, a little, and a lot. Use strong, definite words and phrases such as shall, will, will not, can, and cannot.  Words such as “should” can be used to show suggestions, but use it sparingly.
6.	Watch your spelling, punctuation, and grammar.  It is a reflection on your professionalism.

Be sure that your document is

•	Complete - No information is missing 
•	Clear - Every sentence's meaning must be clear to all parties
•	Consistent – The writing style and notation is consistent throughout the document and the document does not contradict itself 
•	Verifiable - All facts stated are verifiable 


Remember that you are required to do a peer review of this document.

When you think you are done with the SRS, ask yourself, "Could someone who was not part of the development of this SRS write the corresponding System Design Document?" 

<br><br>

[Put team logo here]<br><br>
[Put product name here]

<p align="center"><b><h2>System Requirements Specification</h2><b><p>

<p align="center"><b><h3>Table of Contents</h3><b><p>

<b>1.  Introduction</b>

><b>1. Purpose of This Document</b><br>
><b>2. References</b><br>
><b>3. Purpose of the Product</b><br>
><b>4. Product Scope</b>

<b>2.  Functional Requirements</b>

<b>3.  Non-Functional Requirements</b>

<b>4.  User Interface</b>

<b>5.  Deliverables</b>

<b>6.  Open Issues</b>

<b>Appendix A -- Agreement Between Customer and Contractor</b>

<b>Appendix B -- Team Review Sign-off</b>

<b>Appendix C -- Document Contributions</b>

<br>

<b>1.  Introduction</b>

>1.1  Purpose of This Document

>>State the purpose of this document and specify the intended readership.

>1.2  References

>>Provide a list of all applicable and referenced documents and other media (e.g., the Somerville text, UML references, documents provided by the customer, websites).  For each reference, provide the title, author, publisher (if applicable), date, and URL (for websites).

>1.3  Purpose of the Product

>>This section provides a short description of the user’s work and the situation that triggered the need for the product.  It describes the task(s) that the user wants to accomplish with the delivered product.  It is the product justification.

>1.4  Product Scope

>>This section identifies the boundary between the system under development and the outside world.  That is, it identifies what is included in the system and what is not. Typically, a context diagram best describes the boundary.  However, because the systems in this class are small, we will use a combination top-level use case and context diagram.   In addition to referring the reader to the diagram, give a brief summary of how it illustrates the system’s scope.  Make sure to number the use cases in the diagram.

Use The Unified Modeling Language(UML):  A reference is UML Distilled, by Martin Fowler.

<br>
<b>2.  Functional Requirements</b>

It is recommended that each functional requirement should be represented using a use case.  

Refer the reader to the top-level use case/context diagram referred to in Section 1.4.  In addition, include separate use case diagrams, where appropriate, for each of the top-level use cases.

In addition to the diagrams, every use case should be documented using the following use case specification format.

| | |
| ----------- | ----------- |
| <b>Number<b> | < use case number > |
| <b>Name<b> | < use case name - a short active verb phrase > |
| <b>Summary<b> | < a brief summary of the use case > |
| <b>Priority<b> | < how critical this use case is to the customer (1 to 5, 5 being most critical > |
| <b>Preconditions<b> | < conditions that must be true before the use case trigger > |
| <b>Postconditions<b> | < conditions that will be true after the use case completes > |
| <b>Primary Actor<b> | < a role name for the primary actor > |
| <b>Secondary Actors<b> | < other systems that are relied upon to accomplish the use case > |
| <b>Trigger<b> | < the action that starts the use case > |
| <b>Main Scenario<b> | <b>Step</b> / <b>Action</b> |
| | 1.  < steps of the use case from trigger to goal delivery > |
| | 2.  < … > |
| | 3.  < … > |
| <b>Extensions<b> | <b>Step</b> / <b>Branching Action</b> |
| | 1a.  < condition causing branching > : < action or name of sub use case > |
| <b>Open Issues<b> | < list of issues awaiting decisions that affect the use case > |

<br>
(This template was adapted from Alistair Cockburn.) 

Lastly, write the tests that will be used during system and acceptance testing to verify that each requirement has been met.  Note that a single requirement may require multiple tests, so be thorough.  It is also possible that a single test verifies more than one requirement.  The goal is to come up with the minimum number of test cases that thoroughly test the system.  Make sure that the test numbers correspond to the use case numbers.

<br>
<b>3.  Non-Functional Requirements</b>

Decide on a standard format for the non-functional requirements (NFRs).  Included in the format should be a unique number for each NFR, a priority (1 = lowest, 5 = highest), a clear, concise description, and the test(s) that will be used during system and acceptance testing to verify that the requirement has been met.  Make sure that the test numbers correspond to the NFR numbers. Note that you must include a minimum of 10 NFRs specific to product requirements, organizational requirements, and external requirements. 

<br>
<b>4.  User Interface</b>

Simply put a statement such as 

See “User Interface Design Document for your product name.”

here.  

<br>
<b>5.  Deliverables</b>

Provide a list of all deliverable items (that is, all artifacts that you will deliver to the customer).  This list will include items such as the product itself (What format? Source code? Executable code? Object code?), documentation, and training resources (if any).  Specify when (date) and in what format (e.g., hard copy, zip file (how delivered, Git?)) each will be delivered.  A tabular format works well for this section.  We will assume that the deliverable items are as follows:

Hard copies of each of the following:

•	Systems Requirement Specification<br>
•	System Design Document<br>
•	User Interface Design Document<br>
•	User Manual<br>
•	Administrator Manual<br>
•	Copies of all Biweekly Status Reports<br>

An electronic file containing the following: 

•	Systems Requirement Specification<br>
•	System Design Document<br>
•	User Interface Design Document<br>
•	User Manual<br> 
•	Administrator Manual<br> 
•	All source code<br>
•	The executable program<br>
•	Any other software required for installation and execution of the delivered program.

<br>
<b>6.  Open Issues</b>

Issues that have been raised and do not yet have a conclusion.  These issues will be addressed later in the development process.

<br>
<b>Appendix A – Agreement Between Customer and Contractor</b>

Place on a separate page. Describe what the customer and your team are agreeing to when all sign off on this document. [One paragraph] Include a statement that explains the procedure to be used in case there are future changes to the document. [One paragraph] Provide lines for typed names, signatures, and dates for each team member and the customer.  Provide space for customer comments.

<br>
<b>Appendix B – Team Review Sign-off</b>

Place on a separate page. Provide a brief paragraph stating that all members of the team have reviewed the document and agree on its content and format.  Provide lines for typed names, signatures, dates, and comments for each team member. The comment areas are to be used to state any minor points regarding the document that members may not agree with.  Note that there cannot be any major points of contention.

<br>
<b>Appendix C – Document Contributions</b>

Identify how each member contributed to the creation of this document. Include what sections each member worked on and an estimate of the percentage of work they contributed.  Remember that each team member must contribute to the writing (includes diagrams) for each document produced.
