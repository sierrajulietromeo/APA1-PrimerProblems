# Primer Challenge 1: Fahrenheit-Celsius Conversion

**Challenge:**

Create a Python function that converts temperatures between Fahrenheit and Celsius based on input arguments (starting temperature, original scale, and desired scale).

**Conversion Formulae:**

* Celsius to Fahrenheit: 
  * F = (C \* 9 / 5) + 32

* Fahrenheit to Celsius: 
  * C = (F - 32) \* 5 / 9

### Examples:

* `temperature_conversion(60.1, 'C', 'F')  --> 140.18`
* `temperature_conversion(60.1, 'F', 'C')  --> 15.6111`   

### Constraints

* Ensure you support upper and lowercase characters for C and F.
* **Error Handling Requirements:**
  * The function MUST raise a `ValueError` when:
    - Temperature input is not a numeric value (e.g., strings that are not numeric, `None`)
    - Conversion type is not a valid temperature scale (not 'C' or 'F', case-insensitive)
  * Examples of invalid inputs that should trigger errors:
    - `temperature_conversion('abc', 'C', 'F')`
    - `temperature_conversion(None, 'C', 'F')` 
    - `temperature_conversion(32, 'C', 'B')`
    - `temperature_conversion(0, 'C', 'X')`

* Supported conversion scales (case-insensitive):
  * 'C' or 'c': Celsius
  * 'F' or 'f': Fahrenheit

### Additional Revisions

Extend the program to support Kelvin (K) conversions:

**Kelvin Conversion Formulae:**
* Celsius to Kelvin:
  * K = C + 273.15

* Fahrenheit to Kelvin:
  * K = (F - 32) \* 5 / 9 + 273.15

* Kelvin to Celsius:
  * C = K - 273.15

* Kelvin to Fahrenheit:
  * F = (K - 273.15) \* 9 / 5 + 32

**Updated Conversion Scale Requirements:**
* Add support for 'K' or 'k' as a valid conversion type
* Ensure the function can convert between all three temperature scales (Celsius, Fahrenheit, and Kelvin)


### Notes

* Ensure to commit/push as appropriate.
* See the tests in  `test_primer1.py`
* Refactor the program as you see fit following industry standard conventions.

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


### Rubrics for advanced programming challenges portfolio

|Category|Fail (<40%)|Pass (40-59%)|Merit (60-69%)|Distinction (70-100%)|
|:---|:---|:---|:---|:---|
|Functionality|Program does not run or produces incorrect results for most cases, including additional requirements.|Program runs and handles basic cases correctly but fails on edge cases, invalid inputs, or additional requirements.|Program handles most cases, including some edge cases and additional requirements, with minor errors.|Program is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently.|
|Code Quality & Standards|Code is poorly organised, difficult to read, and does not meet basic programming conventions.|Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.|Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles.|Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible.|
| Understanding (screen recording) | * Struggles to explain the code's purpose, structure, and functionality in the recording.  * Demonstrates limited understanding of the chosen technologies and implementation choices. *  Unable to showcase and explain the application's features. *  Unable to discuss testing or debugging approaches. *  Shows weak problem-solving skills and provides unclear explanations. | * Can explain the basic purpose and structure of the code in the recording. * Demonstrates a basic understanding of how the application functions and its key features. * Briefly discusses some implementation choices and testing procedures. * Shows some evidence of problem-solving and debugging skills. * Communicates ideas with reasonable clarity in the recording. | * Clearly explains the code's purpose, structure, and functionality in the recording. * Demonstrates a good understanding of the chosen technologies and the reasons behind implementation choices. * Confidently showcases and explains the application's features. * Discusses testing methodologies and debugging techniques. * Effectively explains concepts and shows good problem-solving skills. * Communicates ideas clearly and uses appropriate technical vocabulary in the recording. | * Provides a comprehensive and insightful walkthrough of the codebase, including intricate details and design patterns. * Confidently discusses and justifies implementation choices and their impact on the application. * Thoroughly demonstrates and explains all features, including any advanced additions. * Shows a strong understanding of testing methodologies and debugging approaches. * Demonstrates excellent problem-solving skills and provides insightful explanations. * Communicates ideas with exceptional clarity and precision in the recording. |