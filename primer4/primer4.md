# Primer Challenge 4: OOP Stock Control System

## Learning Outcomes:

* Apply object-oriented programming principles (inheritance, polymorphism) in a practical scenario.
* Extend existing code to accommodate new requirements.
* Write robust and maintainable code with proper error handling.

Extend the provided inventory management program to support different product types with unique attributes.

*   **Clothing:** With attributes like `size` and `material`.
*   **Electronics:** With attributes like `brand` and `warranty`.

### Base Code:

The base code includes the following classes and methods:

*   **Inventory Class:**
    *  add_product(product)
    *  update_quantity(id, quantity)
    *  get_product(id)
    *  remove_product(id)
    *  get_num_of_items()

*   **Product Class:**
    *   `get_product_details()`

`test_primer4.py` includes the current tests written for this code, and it currently passes them all.

### UML Class Diagram (Base Code)

![UML Class Diagram of original system](images/umlClassDiagram_original.png)


**Tasks:**

1.  **Create Subclasses:**
    *   Create subclasses for `Clothing` and `Electronics` that inherit from the `Product` class.
    *   Add the specific attributes to each subclass.

2.  **Implement Polymorphic Functions:**

    *   Ensure that the `get_product_details()` method is overridden in the subclasses to include the unique attributes.

**Example Usage:**

```javascript
const inventory = new Inventory();

const tshirt = new Clothing('A123', 'T-shirt', 19.99, 100, 'L', 'Cotton');
const laptop = new Electronics('B456', 'Laptop', 799.99, 20, 'Dell', '1 year');

inventory.addProduct(tshirt);
inventory.addProduct(laptop);

const retrievedProduct = inventory.getProduct('B456');
console.log(retrievedProduct); // Should output the laptop details including brand and warranty
```

### UML Class Diagram (Extended version)

![UML Class Diagram of new system](images/umlClassDiagram_new.png)



### Additional Considerations:

1. Error Handling: Ensure that your methods handle errors gracefully (e.g., invalid quantities, incorrect datatypes etc.).
2. Code Quality: Adhere to the provided programming standards for clear, maintainable code. 
3. Testing: Add additional tests (in appropriate nested `describe` blocks) to `primer4.test.js` to verify the functionality of your extended inventory management system.
4. Make `Product.js` an abstract Class so that Product objects cannot be instantiated. You can modify `primer4.test.js` as you require.
5. Implement the Factory design pattern, and add your own testing code in `primer4.js`. You can modify `primer4.test.js` as you require.   



### Rubric for Primer 4


| Category | Fail (<40%) | Pass (40-59%) | Merit (60-69%) | Distinction (70-100%) |
|---|---|---|---|---|
| Functionality | Program does not correctly implement inheritance or polymorphism, or the extended functionality (adding, updating, retrieving different product types) does not work as expected. | Program demonstrates basic inheritance and polymorphism, but there are errors or limitations in handling different product types or edge cases. | Program correctly implements inheritance and polymorphism with mostly accurate handling of different product types. Minor errors or edge cases might exist. | Program flawlessly implements inheritance and polymorphism, handles all product types correctly, and functions as expected in all scenarios, including all additional criteria, edge cases and error handling. |
| Testing | Little to no evidence of testing, or tests are poorly written and do not cover core functionality, inheritance, or polymorphic behaviour. | Basic test cases are present, but coverage is limited, and some critical paths or inheritance scenarios are not tested. | Test suite covers most functionality, including inheritance and polymorphism, demonstrating good understanding of test-driven development. Some edge cases might be missing. | Comprehensive test suite with excellent coverage, including inheritance, polymorphism, edge cases, and error handling. Tests are well-structured and maintainable. |
| Code Quality & Standards | Code is poorly organised, difficult to read, and does not meet basic programming conventions. | Code is somewhat organised, but readability could be improved. Some inconsistencies or deviations from best practices remain. | Code is well-organised, readable, and mostly adheres to coding standards. Inheritance and polymorphism are implemented effectively, demonstrating a good understanding of object-oriented design principles. | Code is exemplary, demonstrating near-professional-level standards. Adheres to industry best practices and coding standards consistently. Inheritance and polymorphism are implemented in a clear, maintainable, and extensible way. |
| Understanding (screen recording) | * Struggles to explain the code's purpose, structure, and functionality in the recording.  * Demonstrates limited understanding of the chosen technologies and implementation choices. *  Has difficulty showcasing and explaining the application's features. *  Unable to discuss testing or debugging approaches. *  Shows weak problem-solving skills and provides unclear explanations. | * Can explain the basic purpose and structure of the code in the recording. * Demonstrates a basic understanding of how the application functions and its key features. * Briefly discusses some implementation choices and testing procedures. * Shows some evidence of problem-solving and debugging skills. * Communicates ideas with reasonable clarity in the recording. | * Clearly explains the code's purpose, structure, and functionality in the recording. * Demonstrates a good understanding of the chosen technologies and the reasons behind implementation choices. * Confidently showcases and explains the application's features. * Discusses testing methodologies and debugging techniques. * Effectively explains concepts and shows good problem-solving skills. * Communicates ideas clearly and uses appropriate technical vocabulary in the recording. | * Provides a comprehensive and insightful walkthrough of the codebase, including intricate details and design patterns. * Confidently discusses and justifies implementation choices and their impact on the application. * Thoroughly demonstrates and explains all features, including any advanced additions. * Shows a strong understanding of testing methodologies and debugging approaches. * Demonstrates excellent problem-solving skills and provides insightful explanations. * Communicates ideas with exceptional clarity and precision in the recording. |
