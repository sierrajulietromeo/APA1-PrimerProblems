import { performance } from 'perf_hooks'; // Part of the Hi-Res time API


function startSimulation(numberOfElements) {

    const MAX_RANDOM_NUMBER_SIZE = 100;
    const NUMBER_OF_TEST_RUNS = 100;
    
    let totalTimeTaken = 0;

    for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {

        // Create a list of x random numbers which are between 1 and MAX_RANDOM_NUMBER_SIZE.
        const numbers = Array.from({ length: numberOfElements }, () => Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1);
        // Sort the numbers
        numbers.sort(function(a, b) {
            return a - b;
            });
        
        let startTime = performance.now();
    
        while (numbers.length !== 0) {
            numbers.shift()  // Could be console.logged to show if desired, but slows down the operation.
        } 
    
        let endTime = performance.now();
        let timeTaken = endTime - startTime;
        totalTimeTaken += timeTaken;

    }
  
  let averageTimeTaken = totalTimeTaken / 100;
  console.log(`Standard JS Array - Removing all items in order from an array until empty.`);
  console.log(`Average operation time over 100 runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);

}


// Usage

const numberOfElementsInDataStructure = 3000;
startSimulation(numberOfElementsInDataStructure);
