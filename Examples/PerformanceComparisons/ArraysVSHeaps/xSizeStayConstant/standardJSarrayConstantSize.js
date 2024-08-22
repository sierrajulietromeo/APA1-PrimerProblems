import { performance } from 'perf_hooks'; // Part of the Hi-Res time API


function startSimulation(numberOfElements) {

    const MAX_RANDOM_NUMBER_SIZE = 100;
    const NUMBER_OF_TEST_RUNS = 100;
    const ITERATIONS = 1000;
    let totalTimeTaken = 0;

    for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {

        // Create a list of x random numbers which are between 1 and MAX_RANDOM_NUMBER_SIZE.
        const numbers = Array.from({ length: numberOfElements }, () => Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1);
        
        let startTime = performance.now();
        
        // Sort the numbers
        numbers.sort(function(a, b) {
            return a - b;
            });
        
        for (let i = 0; i<ITERATIONS; i++){
            
            numbers.sort(function(a, b) {
            return a - b;
            });

            numbers.shift()
            numbers.push(Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1)
        }
            
        let endTime = performance.now();
        let timeTaken = endTime - startTime;
        totalTimeTaken += timeTaken;

    }
  
  let averageTimeTaken = totalTimeTaken / 100;
  console.log(`Standard JS Array - Adding an item, sorting & removing an item 1000 times`);
  console.log(`Average operation time over 100 runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);

}


// Usage

const numberOfElementsInDataStructure = 300000;
startSimulation(numberOfElementsInDataStructure);
