
import { performance } from 'perf_hooks'; // Part of the Hi-Res time API


function startSimulation(numberOfElements) {

    const MAX_RANDOM_NUMBER_SIZE = 100;
    const NUMBER_OF_TEST_RUNS = 100;
    const ITERATIONS = 1000;
  
    
    let totalTimeTaken = 0;

    for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {

        // Create a list of x random numbers which are between 1 and MAX_RANDOM_NUMBER_SIZE.
         

        const buffer = new ArrayBuffer(numberOfElements); // numberOfElements bytes
        const numbers = new Uint8Array(buffer); // numberOfElements elements   (Unsigned 8 bit, 1 byte per element)

        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1;
          }

        
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
  console.log(`UIntArray - Accessing 1000 items.`);
  console.log(`Average operation time over 100 runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);

}


// Usage

const numberOfElementsInDataStructure = 100000000 ;
startSimulation(numberOfElementsInDataStructure);



