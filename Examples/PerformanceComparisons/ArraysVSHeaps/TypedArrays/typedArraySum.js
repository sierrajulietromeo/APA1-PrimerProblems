import { performance } from 'perf_hooks'; 

function startSimulation(numberOfElements) {
    const MAX_RANDOM_NUMBER_SIZE = 100;
    const NUMBER_OF_TEST_RUNS = 100;
    const ITERATIONS = 1000;
    const NUM_RANDOM_LOCATIONS = 10; 

    let totalTimeTaken = 0;

    for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {
        const buffer = new ArrayBuffer(numberOfElements); 
        const numbers = new Uint8Array(buffer); 

        for (let i = 0; i < numbers.length; i++) {
            numbers[i] = Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1;
        }

        let startTime = performance.now();

        for (let j = 0; j < ITERATIONS; j++) {
            let sum = 0;
            for (let k = 0; k < NUM_RANDOM_LOCATIONS; k++) {
                const randomIndex = Math.floor(Math.random() * numbers.length);
                sum += numbers[randomIndex];
            }
            
        }

        let endTime = performance.now();
        let timeTaken = endTime - startTime;
        totalTimeTaken += timeTaken;
    }

    let averageTimeTaken = totalTimeTaken / 100;
    console.log(`UIntArray - Summing 10 random locations 1000 times.`);
    console.log(`Average operation time over 100 runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);
}

// Usage
const numberOfElementsInDataStructure = 100000000 ;
startSimulation(numberOfElementsInDataStructure);