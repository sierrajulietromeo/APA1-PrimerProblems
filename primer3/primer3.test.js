// Import the necessary modules
import name from './primer3.js'; // Adjust paths as needed

// Making sure you are in the same folder, you can run this test file with: jest primer1.test.js

// Describe a group of related tests
describe('Primer 3 - Shuffling cards', () => {

  // Test a specific functionality
  test('T01 should do something', () => {
    // Arrange: Set up any necessary data or conditions
    const input = 'some input';
    const expectedOutput = 'expected result';

    // Act: Call the function 
    const result = functionName(inputshere);
    // Assert: Check if the result matches the expectation
    expect(result).toBe(expectedOutput); 
  });

   // Test a specific functionality
   test('T02 should do something else', () => {
    // Arrange: Set up any necessary data or conditions
    const input = 'some input';
    const expectedOutput = 'expected result';

    // Act: Call the function 
    const result = functionName(inputshere);

    // Assert: Check if the result matches the expectation
    expect(result).toBe(expectedOutput); 
  });

  // Add more test cases as needed...
});
