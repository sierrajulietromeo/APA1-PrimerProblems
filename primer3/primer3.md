# Primer Challenge 3: Social Media Feed Search

**Scenario:**

Imagine you're building a social media application where users can post short messages or updates. These posts are stored as nodes in a linked list, each containing information like the post text, timestamp, and author. You want to implement a search feature that allows users to find posts containing specific keywords or phrases.

**Challenge:**

Create a Python program that searches for posts in a social media feed represented as a linked list. The programme should:

*   Construct a linked list of posts, where each node has properties like `text`, `timestamp`, and `author`.
*   Implement a search function that takes a keyword or phrase as input and returns a list of all posts containing that keyword/phrase in their `text`.
*   Output the search results to the console.

**Example:**

```python
feed = create_linked_list([
    {"text": "Hello world!", "timestamp": "2024-03-11 10:00:00", "author": "Alice"},
    {"text": "Having a great day!", "timestamp": "2024-03-11 11:30:00", "author": "Bob"},
    {"text": "Just finished a fantastic game.", "timestamp": "2024-03-11 12:15:00", "author": "Aqil"},
])

search_term = "great"
results = search_social_media_feed(feed, search_term)

# Output:
# [{"text": "Having a great day!", "timestamp": "2024-03-11 11:30:00", "author": "Bob"}]
```

### Notes

* You can add additional tests if you determine the current tests don't offer complete coverage. These can be highlighted in your screen recording.
* Existing tests can be altered should your choice of implementation mean that an existing test isn't compatible. These can be highlighted in your screen recording.

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


### Rubric for advanced programming challenges portfolio

|Category|Fail (<40%)|Pass (40-59%)|Merit (60-69%)|Distinction (70-100%)|
|:---|:---|:---|:---|:---|
|Functionality|Program does not run or produces incorrect results for most cases, including additional requirements.|Program runs and handles basic cases correctly but fails on edge cases, invalid inputs, or additional requirements.|Program handles most cases, including some edge cases and additional requirements, with minor errors.|Program is fully functional, handles all cases (including edge cases, invalid inputs, and additional requirements) gracefully, and produces accurate results consistently.|
|Code Quality & Standards|Code is poorly organised, difficult to read, and does not meet basic programming conventions.|Code is somewhat organised, but readability could be improved. Some adherence to coding standards is evident, but inconsistencies exist.|Code is well-organised, readable, and mostly adheres to coding standards. Demonstrates a good understanding of clean code principles.|Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Code is highly maintainable and extensible.|
| Understanding (screen recording) | * Struggles to explain the code's purpose, structure, and functionality in the recording.  * Demonstrates limited understanding of the chosen technologies and implementation choices. *  Has difficulty showcasing and explaining the application's features. *  Unable to discuss testing or debugging approaches. *  Shows weak problem-solving skills and provides unclear explanations. | * Can explain the basic purpose and structure of the code in the recording. * Demonstrates a basic understanding of how the application functions and its key features. * Briefly discusses some implementation choices and testing procedures. * Shows some evidence of problem-solving and debugging skills. * Communicates ideas with reasonable clarity in the recording. | * Clearly explains the code's purpose, structure, and functionality in the recording. * Demonstrates a good understanding of the chosen technologies and the reasons behind implementation choices. * Confidently showcases and explains the application's features. * Discusses testing methodologies and debugging techniques. * Effectively explains concepts and shows good problem-solving skills. * Communicates ideas clearly and uses appropriate technical vocabulary in the recording. | * Provides a comprehensive and insightful walkthrough of the codebase, including intricate details and design patterns. * Confidently discusses and justifies implementation choices and their impact on the application. * Thoroughly demonstrates and explains all features, including any advanced additions. * Shows a strong understanding of testing methodologies and debugging approaches. * Demonstrates excellent problem-solving skills and provides insightful explanations. * Communicates ideas with exceptional clarity and precision in the recording. |