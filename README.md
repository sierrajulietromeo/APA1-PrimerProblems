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
3. **One screen recording** (maximum 20 minutes) in which you talk through your code for all four primers. See the brief for how to submit it.

## Running the tests

```bash
npm install
npm test              # all primers
npm test -- primer1   # one primer
```

The tests also run automatically on GitHub every time you push. Check the **Actions** tab to see whether they pass.

## Use of AI tools

You may use AI tools as set out in the assignment brief. You must be able to explain, and change, any code you submit. You do not need to keep a record of your AI use: just say briefly in your screen recording where AI helped and what you checked or changed.

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

## Rubric: Primers 1 to 3

Primer 1's urgent tickets stretch is optional and is not required for any grade band.

| Category | Fail (<40%) | Pass (40-59%) | Merit (60-69%) | Distinction (70-100%) |
|---|---|---|---|---|
|Functionality|Program does not run or produces incorrect results for most cases, including additional requirements.|Program runs and handles basic cases correctly but fails on edge cases, invalid inputs, or additional requirements.|Program handles most cases, including some edge cases and additional requirements, with minor errors.|Program is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently.|
|Code Quality & Standards|Code is poorly organised, difficult to read, and does not meet basic programming conventions.|Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.|Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles.|Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible.|
| Understanding (screen recording and PORTFOLIO.md) | * Struggles to explain the code's purpose, structure, and functionality in the recording. * Demonstrates limited understanding of the chosen technologies and implementation choices. * Has difficulty showcasing and explaining the application's features. * Unable to discuss testing or debugging approaches. * The PORTFOLIO.md table is missing or largely incomplete. | * Can explain the basic purpose and structure of the code in the recording. * Demonstrates a basic understanding of how the application functions and its key features. * Briefly discusses some implementation choices and testing procedures. * States the Big O time complexity of the main operations. * Says briefly where AI tools were used, if at all. * Communicates ideas with reasonable clarity in the recording. | * Clearly explains the code's purpose, structure, and functionality in the recording. * Demonstrates a good understanding of the reasons behind implementation choices. * Explains at least one complexity trade-off, for example time against memory, or one data structure against another. * Explains what was changed or rejected in any AI-suggested code, and why. * Discusses testing methodologies and debugging techniques. * Communicates ideas clearly and uses appropriate technical vocabulary. | * Provides a comprehensive and insightful walkthrough of the code, including design patterns where used. * Confidently justifies implementation choices, comparing alternatives using Big O. * Critically evaluates AI-assisted work, showing how it was checked. * Uses the debugger (breakpoints, stepping through code, inspecting values) to show how a real bug was found and fixed. * Communicates ideas with exceptional clarity and precision. |

## Rubric: Primer 4

| Category | Fail (<40%) | Pass (40-59%) | Merit (60-69%) | Distinction (70-100%) |
|---|---|---|---|---|
| Functionality | Program does not correctly implement inheritance or polymorphism, or the extended functionality (adding, updating, retrieving different product types) does not work as expected. | Program demonstrates basic inheritance and polymorphism, but there are errors or limitations in handling different product types or edge cases. | Program correctly implements inheritance and polymorphism with mostly accurate handling of different product types. Minor errors or edge cases might exist. | Program flawlessly implements inheritance and polymorphism, handles all product types correctly, and functions as expected in all scenarios, including all additional criteria (abstract class, Factory and Strategy patterns), edge cases and error handling. |
| Testing | Little to no evidence of testing, or tests are poorly written and do not cover core functionality, inheritance, or polymorphic behaviour. | Basic test cases are present, but coverage is limited, and some critical paths or inheritance scenarios are not tested. | Test suite covers most functionality, including inheritance and polymorphism, demonstrating good understanding of test-driven development. Some edge cases might be missing. | Comprehensive test suite with excellent coverage, including inheritance, polymorphism, edge cases, and error handling. Tests are well-structured and maintainable. |
| Code Quality & Standards | Code is poorly organised, difficult to read, and does not meet basic programming conventions. | Code is somewhat organised, but readability could be improved. Some inconsistencies or deviations from best practices remain. | Code is well-organised, readable, and mostly adheres to coding standards. Inheritance and polymorphism are implemented effectively, demonstrating a good understanding of object-oriented design principles. | Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Inheritance and polymorphism are implemented in a clear, maintainable, and extensible way. |
| Understanding (screen recording and PORTFOLIO.md) | * Struggles to explain the code's purpose, structure, and functionality in the recording. * Demonstrates limited understanding of the chosen technologies and implementation choices. * Has difficulty showcasing and explaining the application's features. * Unable to discuss testing or debugging approaches. * The PORTFOLIO.md table is missing or largely incomplete. | * Can explain the basic purpose and structure of the code in the recording. * Demonstrates a basic understanding of how the application functions and its key features. * Briefly discusses some implementation choices and testing procedures. * States the Big O time complexity of the main operations. * Says briefly where AI tools were used, if at all. * Communicates ideas with reasonable clarity in the recording. | * Clearly explains the code's purpose, structure, and functionality in the recording. * Demonstrates a good understanding of the reasons behind implementation choices. * Explains at least one complexity trade-off, for example time against memory, or one data structure against another. * Explains what was changed or rejected in any AI-suggested code, and why. * Discusses testing methodologies and debugging techniques. * Communicates ideas clearly and uses appropriate technical vocabulary. | * Provides a comprehensive and insightful walkthrough of the code, including design patterns where used. * Confidently justifies implementation choices, comparing alternatives using Big O. * Critically evaluates AI-assisted work, showing how it was checked. * Uses the debugger (breakpoints, stepping through code, inspecting values) to show how a real bug was found and fixed. * Communicates ideas with exceptional clarity and precision. |

**Overall screen recording performance:**

* **Fail:** The recording shows significant gaps in understanding and an inability to demonstrate basic competency in relation to the assignment requirements.
* **Pass:** The recording demonstrates basic understanding of the code and its functionality, and explains core concepts.
* **Merit:** The recording shows a good understanding of the code, its functionality, and related concepts. Explanations are clear and demonstrate problem-solving skills.
* **Distinction:** The recording exhibits a deep understanding, critical thinking, and excellent communication skills. The code is analysed critically, and insightful solutions are offered.
