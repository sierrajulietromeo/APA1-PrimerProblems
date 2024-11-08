# Primer Challenge 2: Playing Card Simulator MVP

**Challenge:**

Create a NodeJS programme that simulates shuffling and dealing a deck of cards. The programme should:

*   Create a standard 52-card deck.
*   Shuffle the deck.
*   Deal cards to a specified number of players.
*   Output the hands dealt as an array of arrays.

**Example:**

```js
const game = shuffleAndDeal(4, 5);
console.log(game);
[
  ["Ace of Spades", "3 of Clubs", "7 of Diamonds", "Jack of Hearts", "Queen of Spades"],
  ["2 of Diamonds", "5 of Hearts", "6 of Clubs", "9 of Spades", "King of Diamonds"],
  ["4 of Hearts", "8 of Clubs", "10 of Spades", "Jack of Diamonds", "Queen of Clubs"],
  ["Ace of Clubs", "3 of Diamonds", "5 of Spades", "7 of Hearts", "10 of Clubs"]
];
```

### Adopt and use good programming standards

* Eliminate or minimise code duplication & any unnecessary redundancy.
* Strive for simplicity in logic and flow.
* Use a consistent naming convention for functions, variables, objects, etc to provide clear contextual value, improved comprehension and quick readability.
* Use appropriate and consistent indentation, logical grouping and spaced blocks within your codebases; adopt tabs or a set number of spaces (ideally tabs) for indenting.
* Use spaces consistently to separate operators and delimiters.
* Be consistent when aligning braces.
* Avoid deep nested conditionals.
* Be mindful of single (long) lines of code containing multiple operations; consider ‘one line one instruction” unless readable.
* Keep variable lifetimes and scope as short and as small as possible.
* Avoid multipurpose functions and variables.
* Minimise forced type conversion, coercion or casting.
* Know and test your code: adopt a personal and rigorous testing strategy.
* Test early and often, fail fast and resolve effectively.
* Ideally the code should speak for itself. Use comments only when necessary.


### Rubric for advanced programming challenges portfolio

|Category|Fail (<40%)|Pass (40-59%)|Merit (60-69%)|Distinction (70-100%)|
|:---|:---|:---|:---|:---|
|Functionality|Program does not run or produces incorrect results for most cases, including additional requirements.|Program runs and handles basic cases correctly but fails on edge cases, invalid inputs, or additional requirements.|Program handles most cases, including some edge cases and additional requirements, with minor errors.|Program is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently.|
|Testing|Little to no evidence of testing, or tests are poorly written and do not cover core functionality.|Basic test cases are present, but coverage is limited, and some critical paths are not tested.|Test suite covers most functionality, including edge cases, demonstrating good understanding of test-driven development.|Comprehensive test suite with excellent coverage, including edge cases, error handling, and potential user input errors. Tests are well-structured and maintainable.|
|Code Quality & Standards|Code is poorly organised, difficult to read, and does not meet basic programming conventions.|Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.|Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles.|Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible.|