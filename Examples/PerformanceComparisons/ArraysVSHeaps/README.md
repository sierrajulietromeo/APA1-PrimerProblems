
## Arrays in JS

In Javascript, an array is a Hashtable Object type so the interpreter doesn't need to keep track of physical memory and changing the value of an element doesn't affect other elements as they're not stored in a contiguous block of memory.



## Performance comparisons of Heaps v Arrays

Let's compare the performance of removing the smallest items from an array and a heap. 

* Generate a set of random numbers between 1-100. (Sets of 3000, 30000 and 300000).
* Add them to the data structure.
* Ensure they are sorted.
* Start a timer
* We’ll remove the smallest items 1 by 1 from each of the structures, until they are empty.
* Stop the timer and record the time taken.
* Carry out the steps above 100 times and take the average as the time taken.

We'll use ```performance.now()```. This is a part of the High Resolution Time API and provides timestamps with sub-millisecond resolution. It's more accurate at sub-millisecond speeds than ```date.now()```.

### X Random Numbers Emptied

In the ```xRandomNumbersEmptied``` folder you will see two implementations:

1. A custom minimum heap implementation ```minHeapUsingArray.js``` which at its core uses an array to store the elements. This is a common underlying representation for heaps. The implementation includes methods to ensure that the smallest element is always at the root of the heap (index 0 of the array), as well as methods to insert and remove elements to/from the heap. A key aspect to remember about a heap is that it is constantly sorted every time an element is added to it. In this example, once the heap has been populated, no other values are ever added to it.

2. A standard JS dynamic array ```standard JS array```. It's important to note, compared to the minHeap implementation is that the numbers to be stored, the array is sorted once all elements have been generated and stored.  The heap implementation sorts after the addition of each element. (This is important for the next test.)


### Stats - Average of 100 runs

| Number of Elements | minHeap time (ms) | Standard JS array time (ms) |
|-------------------|-------------------|------------------------------|
| 3000              | 0.57             | 0.14                         |
| 30000             | 3.84             | 61.49                        |
| 300000            | 41.94            | 7076.01                      |


##### Conclusion

In my testing, for a data structure with 300,000 elements, emptying the minHeap data structure was approximately *170* times faster compared with the standard JS implementation.


### Constantly changing values

Believe it or not, even with minHeap's impressive performance with larger groups of numbers, its more likely that when a heap is being used, new items are constantly being removed and added to it, maintaining its size. (It would be unusual that a heap would be completely emptied like in the first test above.)

For the second experiment, lets change the rules so every time we remove the smallest element, we add another random element, so that the data structure maintains a constant size.

This does mean that for the standard JS array, we'll need to sort the array each time before removing the smallest. We don't need to do this with the minHeap implementation as any element added is sorted when inserted.

As we can't run this experiment until the data structure is empty (as we are always refilling it), we'll carry it out 1000 times.  We'll do this operation 100 times to find an average time.

### Stats - Average of 100 runs

| Number of Elements | minHeap time (ms) | Standard JS array time (ms) |
|-------------------|-------------------|------------------------------|
| 3000              | 0.34             | 56.20                         |
| 30000             | 0.28             | 710.76                        |
| 300000            | 0.43           | 6592.26                      |


## Conclusion: When to Use a Heap vs. a Standard JS Array

The experiments conducted provide evidence that the choice between a heap and a standard JavaScript array depends significantly on the specific use case and the operations performed on the data structure.

### Heap Advantages

* Dynamic Insertion and Removal: Heaps excel in scenarios where you frequently need to insert new elements and remove the minimum (or maximum, in the case of a max-heap) element. The "constantly changing values" experiment highlights this advantage. The heap's time complexity for these operations remains relatively constant regardless of the data structure's size, while the array's performance degrades considerably as the number of elements grows due to the need for repeated sorting.

* Priority Queues: Heaps are the ideal underlying data structure for implementing priority queues, where elements are processed based on their priority.

### Array Advantages

* Simple Access: Arrays offer straightforward access to elements using their index. If your application primarily involves accessing elements by their position, an array might be a more suitable choice.

* Small Datasets: For relatively small datasets where frequent insertions and deletions of the minimum/maximum element aren't required, the performance difference between heaps and arrays might be negligible. In such cases, the simplicity of arrays could outweigh the potential performance benefits of a heap.

* Already Sorted Data: If your data is already sorted and you only need to retrieve the minimum/maximum element once, an array might be faster, as it avoids the overhead of heap construction and maintenance.


### When to Choose a Heap

Consider using a heap when:

* You need to frequently insert and remove the minimum/maximum element from a large dataset.
* You're implementing a priority queue.
* Performance is critical for operations involving finding and extracting the smallest/largest element.

### When to Choose an Array

Consider using an array when:

* You primarily need to access elements by their index.
* The dataset is relatively small.
* The data is already sorted, and you only need to retrieve the minimum/maximum element once.
* Simplicity and ease of use are more important than optimal performance for specific operations.

In conclusion, both heaps and arrays have their strengths and weaknesses. The best choice depends on the specific requirements of your application and the trade-offs you're willing to make between performance, complexity, and ease of use. Understanding the characteristics of each data structure helps you to make informed decisions and select the most appropriate tool for the task at hand.