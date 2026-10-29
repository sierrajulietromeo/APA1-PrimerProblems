# APA1 Assignment 1: Programming Portfolio (40%)

This assignment is a portfolio of four programming primers. Together they cover a range of common data structures, algorithms and design patterns. They are in order of difficulty, so work through them in order.

| Primer | Challenge | Data structures | Algorithms | Design patterns |
|---|---|---|---|---|
| [Primer 1](primer1/primer1.md) | Help desk ticket queue | Queue, stack | | |
| [Primer 2](primer2/primer2.md) | Playing card shuffling simulator | Array | Shuffling | |
| [Primer 3](primer3/primer3.md) | Social media feed search | Linked list | Searching, sorting | |
| [Primer 4](primer4/primer4.md) | OOP stock control system | Map | | Factory, Strategy |

Each primer is worth 10% of the module mark.

## What to submit

1. **Your code**, committed and pushed regularly to this repository. Your last push before the deadline is the version that is marked.
2. **PORTFOLIO.md**: a short table, already set up for you, listing for each primer the data structures, algorithms and patterns you used, the Big O time complexity of the main operations, and any tests you added. Notes in the table are enough: explain your reasoning in the screen recording.
3. **One screen recording** (maximum 20 minutes) covering all four primers. See "Your screen recording" below, and the brief for how to submit it.

## Running the tests

```bash
npm install
npm test              # all primers
npm test -- primer1   # one primer
```

The tests also run automatically on GitHub every time you push. Check the **Actions** tab to see whether they pass.

## Your screen recording

Your recording can be up to **20 minutes** long, so aim for about 5 minutes per primer. Assume the marker is an experienced JavaScript developer who knows the tasks well.

**Do:**

* run the tests for each primer, and show them passing
* explain your approach and why you chose it, rather than reading the code out
* pick out the parts that matter most: the data structure, the algorithm or pattern, and anything you found difficult
* compare your approach with an alternative you considered, using Big O where it helps
* show something you are proud of, and say what you would improve with more time

**Don't:**

* talk through every line of code
* restate the problem from the brief
* spend time on basics such as what a variable or a loop is

**For a Distinction,** show how you used the debugger (breakpoints, stepping through code, inspecting values) to find and fix a real bug.

**Presentation:** use screen recording rather than filming your screen, make sure the code is readable, and check the sound before you submit. Plan what you will say, and rehearse once. Your communication is marked (see the rubric).

### Questions your recording should answer

You don't need to answer every one for every primer, but these are the kinds of questions the marker will be looking for answers to:

* Why did you choose this data structure? What would change if you had used a different one?
* What is the Big O time complexity of your main operations, and how do you know?
* Which test was the most useful, and what did it catch? Did you add tests of your own?
* What was the hardest bug you hit, and how did you find it?
* Where does your code handle invalid input, and why there?
* What would you refactor if you had another hour?
* **Primer 1:** what does serving a ticket cost, and how does your undo work?
* **Primer 2:** which shuffling algorithm did you use, and why is it fair?
* **Primer 3:** how does your search move through the linked list, and how did you sort the results?
* **Primer 4:** how do inheritance, the Factory and the Strategy work together in your design?

## Use of AI tools

This assignment is in the **Green** category: you may use generative AI tools, including to help write code. You must be able to explain, and change, any code you submit, and the screen recording is where you show this. You do not need to record your AI use here or discuss it in your recording: you will reflect on it in the end-of-module AI reflection.

### Adopt and use good programming standards

* Eliminate or minimise code duplication & any unnecessary redundancy.
* Strive for simplicity in logic and flow.
* Use a consistent naming convention for functions, variables, objects, etc to provide clear contextual value, improved comprehension and quick readability.
* Use appropriate and consistent indentation, logical grouping and spaced blocks within your codebases; adopt tabs or a set number of spaces (ideally tabs) for indenting.
* Use spaces consistently to separate operators and delimiters.
* Be consistent when aligning braces.
* Avoid deep nested conditionals.
* Be mindful of single (long) lines of code containing multiple operations; consider 'one line one instruction' unless readable.
* Keep variable lifetimes and scope as short and as small as possible.
* Avoid multipurpose functions and variables.
* Minimise forced type conversion, coercion or casting.
* Know and test your code: adopt a personal and rigorous testing strategy.
* Test early and often, fail fast and resolve effectively.
* Ideally the code should speak for itself. Use comments only when necessary.

## How you are marked

Each primer is worth 10% of the module mark and is marked against the rubric below. The Understanding and Communication marks come from your screen recording and PORTFOLIO.md. Communication is judged once across the whole recording, and that mark is applied to every primer.

## Rubric: Primers 1 to 3

Primer 1's urgent tickets stretch is optional and is not required for any grade band.

| Category | Fail (<40%) | Pass (40-59%) | Merit (60-69%) | Distinction (70-100%) |
|---|---|---|---|---|
| Functionality (35%) |Program does not run or produces incorrect results for most cases, including additional requirements.|Program runs and handles basic cases correctly but fails on edge cases, invalid inputs, or additional requirements.|Program handles most cases, including some edge cases and additional requirements, with minor errors.|Program is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently.|
| Code Quality & Standards (30%) |Code is poorly organised, difficult to read, and does not meet basic programming conventions.|Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.|Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles.|Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible.|
| Understanding (25%) | * Struggles to explain the code's purpose, structure and functionality. * Shows limited understanding of the implementation choices. * Unable to discuss testing or debugging approaches. * The PORTFOLIO.md table is missing or largely incomplete. | * Explains the basic purpose and structure of the code. * Shows a basic understanding of how the program works and its key features. * Briefly discusses some implementation choices and the tests. * States the Big O time complexity of the main operations. | * Clearly explains the code's purpose, structure and functionality. * Gives reasons for implementation choices. * Explains at least one complexity trade-off, for example time against memory, or one data structure against another. * Discusses testing methodologies and debugging techniques. | * Gives a comprehensive and insightful walkthrough, including design patterns where used. * Confidently justifies implementation choices, comparing alternatives using Big O. * Uses the debugger (breakpoints, stepping through code, inspecting values) to show how a real bug was found and fixed. * Reflects critically on what they would improve. |
| Communication (10%) | * The recording is hard to follow: disorganised, unclear or hard to hear, or the code is not readable on screen. * Technical terms are missing or misused. * PORTFOLIO.md notes have frequent errors that obscure meaning. | * The recording is generally clear and audible, with a recognisable structure. * Some technical terms are used correctly. * PORTFOLIO.md notes are understandable despite some errors in spelling or grammar. | * The recording is clear, well structured and well paced. * Technical vocabulary is used accurately. * PORTFOLIO.md notes are accurate, with few errors. | * The recording is concise, confident and professionally delivered, with a clear structure that is easy to follow. * Technical vocabulary is precise. * PORTFOLIO.md notes are accurate and free of errors. |

## Rubric: Primer 4

| Category | Fail (<40%) | Pass (40-59%) | Merit (60-69%) | Distinction (70-100%) |
|---|---|---|---|---|
| Functionality (30%) | Program does not correctly implement inheritance or polymorphism, or the extended functionality (adding, updating, retrieving different product types) does not work as expected. | Program demonstrates basic inheritance and polymorphism, but there are errors or limitations in handling different product types or edge cases. | Program correctly implements inheritance and polymorphism with mostly accurate handling of different product types. Minor errors or edge cases might exist. | Program flawlessly implements inheritance and polymorphism, handles all product types correctly, and functions as expected in all scenarios, including all additional criteria (abstract class, Factory and Strategy patterns), edge cases and error handling. |
| Testing (15%) | Little to no evidence of testing, or tests are poorly written and do not cover core functionality, inheritance, or polymorphic behaviour. | Basic test cases are present, but coverage is limited, and some critical paths or inheritance scenarios are not tested. | Test suite covers most functionality, including inheritance and polymorphism, demonstrating good understanding of test-driven development. Some edge cases might be missing. | Comprehensive test suite with excellent coverage, including inheritance, polymorphism, edge cases, and error handling. Tests are well-structured and maintainable. |
| Code Quality & Standards (20%) | Code is poorly organised, difficult to read, and does not meet basic programming conventions. | Code is somewhat organised, but readability could be improved. Some inconsistencies or deviations from best practices remain. | Code is well-organised, readable, and mostly adheres to coding standards. Inheritance and polymorphism are implemented effectively, demonstrating a good understanding of object-oriented design principles. | Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Inheritance and polymorphism are implemented in a clear, maintainable, and extensible way. |
| Understanding (25%) | * Struggles to explain the code's purpose, structure and functionality. * Shows limited understanding of the implementation choices. * Unable to discuss testing or debugging approaches. * The PORTFOLIO.md table is missing or largely incomplete. | * Explains the basic purpose and structure of the code. * Shows a basic understanding of how the program works and its key features. * Briefly discusses some implementation choices and the tests. * States the Big O time complexity of the main operations. | * Clearly explains the code's purpose, structure and functionality. * Gives reasons for implementation choices. * Explains at least one complexity trade-off, for example time against memory, or one data structure against another. * Discusses testing methodologies and debugging techniques. | * Gives a comprehensive and insightful walkthrough, including design patterns where used. * Confidently justifies implementation choices, comparing alternatives using Big O. * Uses the debugger (breakpoints, stepping through code, inspecting values) to show how a real bug was found and fixed. * Reflects critically on what they would improve. |
| Communication (10%) | * The recording is hard to follow: disorganised, unclear or hard to hear, or the code is not readable on screen. * Technical terms are missing or misused. * PORTFOLIO.md notes have frequent errors that obscure meaning. | * The recording is generally clear and audible, with a recognisable structure. * Some technical terms are used correctly. * PORTFOLIO.md notes are understandable despite some errors in spelling or grammar. | * The recording is clear, well structured and well paced. * Technical vocabulary is used accurately. * PORTFOLIO.md notes are accurate, with few errors. | * The recording is concise, confident and professionally delivered, with a clear structure that is easy to follow. * Technical vocabulary is precise. * PORTFOLIO.md notes are accurate and free of errors. |

**Overall screen recording performance:**

* **Fail:** The recording shows significant gaps in understanding and an inability to demonstrate basic competency in relation to the assignment requirements.
* **Pass:** The recording demonstrates basic understanding of the code and its functionality, and explains core concepts.
* **Merit:** The recording shows a good understanding of the code, its functionality, and related concepts. Explanations are clear and demonstrate problem-solving skills.
* **Distinction:** The recording exhibits a deep understanding, critical thinking, and excellent communication skills. The code is analysed critically, and insightful solutions are offered.
