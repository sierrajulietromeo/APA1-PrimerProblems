## Primer Challenge 2: Playing card simulator MVP

In ```primer2.js``` you'll see that two sets have been created. 

### Sets are useful in certain situations.

1. Uniqueness Guarantee

* Sets inherently enforce uniqueness. You can be confident that each element in a set appears only once.
* With arrays, you'd need to manually check for duplicates before adding new elements or use additional logic to prevent duplicates.

2. Efficient Membership Checks

* Sets have highly optimised methods like ```has()``` to check if an element exists. This is very fast, especially for large sets.
* With arrays, you'd typically need to iterate through the entire array to check for membership, which can be slower for large arrays.

3. No Accidental Duplicates

* If you try to add an element that already exists in the set, it will simply be ignored. This prevents accidental duplicates.
* With arrays, it's easy to accidentally introduce duplicates if you're not careful.

### When Arrays Might Be Suitable

* Order Matters: If the order of the elements is important for your logic, then an array might be better since sets don't guarantee any specific order.
* Iteration: If you need to frequently iterate over all the elements in a specific order, an array might be more convenient.


### Instructions

To complete this exercise, create a JS program that:

* Creates a deck of 52 cards (Standard deck size).
* Shuffles the deck of cards.
* Deals _x_ number of players _y_ number of cards each.
* The hands dealt should be output to the console.

### Example:

- **Hand 1:** Ace of Spades, 3 of Clubs, 7 of Diamonds, Jack of Hearts, Queen of Spades
- **Hand 2:** 2 of Diamonds, 5 of Hearts, 6 of Clubs, 9 of Spades, King of Diamonds
- **Hand 3:** 4 of Hearts, 8 of Clubs, 10 of Spades, Jack of Diamonds, Queen of Clubs
- **Hand 4:** Ace of Clubs, 3 of Diamonds, 5 of Spades, 7 of Hearts, 10 of Clubs

### Notes

* Program structure and choice of appropriate data structures are your decision.
* Ensure to commit/push as appropriate.
* Follow TDD. Write your tests, the write code to pass the tests. See the template in ```primer2.test.js```
* Refactor the program as you see fit following industry standard conventions.

### Additional Revisions

 Update the program so that two decks of cards can be shuffled together if required. (Total of 104 cards).  


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
| Functionality | Programme does not run or produces incorrect results for most cases, including any additional requirements. | Programme runs and handles basic cases correctly, but fails on edge cases, invalid inputs, or additional requirements. | Programme handles most cases, including some edge cases and additional requirements, with minor errors. | Programme is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently. |
| Testing | Little to no evidence of testing, or tests are poorly written and do not cover core functionality. | Basic test cases are present, but coverage is limited, and some critical paths are not tested. | Test suite covers most functionality, including edge cases, demonstrating good understanding of test-driven development. | Comprehensive test suite with excellent coverage, including edge cases, error handling, and potential user input errors. Tests are well-structured and maintainable. |
| Code Quality & Standards | Code is poorly organised, difficult to read, and violates basic programming conventions.  | Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.  | Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles. | Code is exemplary, demonstrating professional-level craftsmanship. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible. |
