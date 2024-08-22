import { performance } from 'perf_hooks'; 

function startSimulation(numberOfElements) {
  const MAX_RANDOM_NUMBER_SIZE = 100;
  const NUMBER_OF_TEST_RUNS = 100;
  const ITERATIONS = 1000;
  let totalTimeTaken = 0;

  for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {
    // Create a list of x random numbers
    const numbers = Array.from({ length: numberOfElements }, () => Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1);

    let startTime = performance.now();

    for (let j = 0; j < ITERATIONS; j++) {
      // Access a random element
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomElement = numbers[randomIndex]; 
      
    }

    let endTime = performance.now();
    let timeTaken = endTime - startTime;
    totalTimeTaken += timeTaken;
  }

  let averageTimeTaken = totalTimeTaken / 100;
  console.log(`Standard JS Array - Accessing a random item 1000 times`);
  console.log(`Average operation time over 100 runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);
}

// Usage
const numberOfElementsInDataStructure = 10000000;
startSimulation(numberOfElementsInDataStructure);