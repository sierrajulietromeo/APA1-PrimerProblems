import { performance } from 'perf_hooks'; // Part of the Hi-Res time API

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Insert a new element into the heap
    insert(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    // Maintain the heap property by comparing the newly added element with its parent
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Remove the minimum element (root of the heap)
    removeMin() {
        if (this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min;
    }


    // Maintain the heap property by comparing the root with its children and swapping if necessary
    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    // Helper method to get the current size of the heap
    size() {
        return this.heap.length;
    }

    // Helper method to check if the heap is empty
    isEmpty() {
        return this.size() === 0;
    }
}



function startSimulation(numberOfElements) {

    let minHeap
    const MAX_RANDOM_NUMBER_SIZE = 100;
    const NUMBER_OF_TEST_RUNS = 100;
    let totalTimeTaken = 0;

    for (let i = 0; i < NUMBER_OF_TEST_RUNS; i++) {

        minHeap = new MinHeap();
        // Create a list of x random numbers which are between 1 and MAX_RANDOM_NUMBER_SIZE.
        const numbers = Array.from({ length: numberOfElements }, () => Math.floor(Math.random() * MAX_RANDOM_NUMBER_SIZE) + 1);
        // Insert into the heap
        numbers.forEach(number => minHeap.insert(number));

        let startTime = performance.now();

        while (!minHeap.isEmpty()) {
            minHeap.removeMin(); // Could be console.logged to show if desired, but slows down the operation. 
        }

        let endTime = performance.now();
        let timeTaken = endTime - startTime;
        totalTimeTaken += timeTaken;
    }

    const averageTimeTaken = totalTimeTaken / 100;
    console.log(`Average operation time over 100 runs for ${numberOfElements} elements: ${averageTimeTaken} milliseconds.`);

}


// Usage

const numberOfElementsInDataStructure = 300000;
startSimulation(numberOfElementsInDataStructure);













