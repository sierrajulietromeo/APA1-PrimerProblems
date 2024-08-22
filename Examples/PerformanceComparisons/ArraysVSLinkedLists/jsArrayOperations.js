import { performance } from 'perf_hooks';

function startSimulation(numberOfElements) {
    const MAX_RANDOM_NUMBER_SIZE = 100;
    const NUMBER_OF_TEST_RUNS = 100;
    const ITERATIONS = 1000;

    let totalTimeTaken = {}; // Object to store timings for each operation

    for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {
        // Create a list of x random numbers
        const numbers = Array.from({ length: numberOfElements }, () => Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1);

        let startTime, endTime;

        // 1. Add to the middle
        const middleIndex = Math.floor(numbers.length / 2);
        startTime = performance.now();
        for (let j = 0; j < ITERATIONS; j++) {
            numbers.splice(middleIndex, 0, MAX_RANDOM_NUMBER_SIZE); // Add at middle
        }
        endTime = performance.now();
        totalTimeTaken['addToMiddle'] = (totalTimeTaken['addToMiddle'] || 0) + (endTime - startTime);

        // 2. Add to the start
        startTime = performance.now();
        for (let j = 0; j < ITERATIONS; j++) {
            numbers.unshift(MAX_RANDOM_NUMBER_SIZE); // Add at start
        }
        endTime = performance.now();
        totalTimeTaken['addToStart'] = (totalTimeTaken['addToStart'] || 0) + (endTime - startTime);

        // 3. Add to the end
        startTime = performance.now();
        for (let j = 0; j < ITERATIONS; j++) {
            numbers.push(MAX_RANDOM_NUMBER_SIZE); // Add at end
        }
        endTime = performance.now();
        totalTimeTaken['addToEnd'] = (totalTimeTaken['addToEnd'] || 0) + (endTime - startTime);

        // 4. Remove from the middle
        startTime = performance.now();
        for (let j = 0; j < ITERATIONS; j++) {
            numbers.splice(middleIndex, 1); // Remove from middle
        }
        endTime = performance.now();
        totalTimeTaken['removeFromMiddle'] = (totalTimeTaken['removeFromMiddle'] || 0) + (endTime - startTime);

        // 5. Output the contents (optional, usually not timed)
        // console.log(numbers); 
    }

    let overallTotalTime = 0;
    for (const operation in totalTimeTaken) {
        let averageTimeTaken = totalTimeTaken[operation] / NUMBER_OF_TEST_RUNS;
        console.log(`Standard JS Array - ${operation} ${ITERATIONS} times.`);
        console.log(`Average operation time over ${NUMBER_OF_TEST_RUNS} runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);
        overallTotalTime += totalTimeTaken[operation];
    }

    let overallAverageTime = overallTotalTime / (NUMBER_OF_TEST_RUNS * Object.keys(totalTimeTaken).length);
    console.log(`\nOverall Average Time for all operations: ${overallAverageTime} milliseconds`);

}

// Usage
const numberOfElementsInDataStructure = 100000000; 
startSimulation(numberOfElementsInDataStructure);