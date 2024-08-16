## Primer Challenge 1: Fahrenheit Celcius Conversion

To complete this exercise, create a JS program that converts temperatures from Fahrenheit to Celcius and Celcius to Fahrenheit based on the input arguments (starting temperature and conversion type) to a function. 

The formula are:

* _C = (F -32) * 5 / 9_
* _F = (C x 9 / 5) + 32_

### Example:

```temperatureConversion(60.1, "C")  --> 15.6111```   

### Notes

* Ensure to commit/push as appropriate.
* Follow TDD. Write your tests, the write code to pass the tests. See the template in ```primer1.test.js```
* Refactor the program as you see fit following industry standard conventions.

### Constraints

* Ensure you support upper and lowercase characters for C and F.
* Ensure the program gracefully handles invalid inputs. 
* Once complete, test and check for correctness (updating as necessary).

### Additional Revisions

 Update the program so that it also supports Kelvin (K).


### Adopt and use good programming standards

* Include good quality, clear, jargon free and up to date internal documentation / comments; adopt the philosophy of writing comments for non-programmers.
* Eliminate or minimise code duplication & any unnecessary redundancy.
* Strive for simplicity in logic and flow.
* Use a consistent naming convention for functions, variables, objects, etc to provide clear contextual value, improved comprehension and quick readability.
* Use appropriate and consistent indentation, logical grouping and spaced blocks within your codebases; adopt tabs or a set number of spaces (ideally tabs) for indenting.
* Use spaces consistently to separate operators and delimiters.
* Be consistent when aligning braces; use a vertically or slanted style.
* Avoid deep nested conditionals.
* Avoid single (long) lines of code containing multiple operations; consider ‘one line one instruction”.
* Keep variable lifetimes and scope as short and as small as possible.
* Avoid multipurpose functions and variables.
* Conserve system resources.
* Minimise forced type conversion, coercion or casting.
* Know and test your code: adopt a personal and rigorous testing strategy; don’t just see it if works - test and fix its limits.
* Test early and often, fail fast and resolve effectively.

### Rubric for advanced programming challenges portfolio

| Category | Fail (<40%) | Pass (40-59%) | Merit (60-69%) | Distinction (70-100%) |
|---|---|---|---|---|
| Functionality | Program does not run or produces incorrect results for most cases, including any additional requirements. | Program runs and handles basic cases correctly, but fails on edge cases, invalid inputs, or additional requirements. | Program handles most cases, including some edge cases and additional requirements, with minor errors. | Program is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently. |
| Testing | Little to no evidence of testing, or tests are poorly written and do not cover core functionality. | Basic test cases are present, but coverage is limited, and some critical paths are not tested. | Test suite covers most functionality, including edge cases, demonstrating good understanding of test-driven development. | Comprehensive test suite with excellent coverage, including edge cases, error handling, and potential user input errors. Tests are well-structured and maintainable. |
| Code Quality & Standards | Code is poorly organised, difficult to read, and does not meet basic programming conventions.  | Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.  | Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles. | Code is exemplary, demonstrating near professional-level standards. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible. |
