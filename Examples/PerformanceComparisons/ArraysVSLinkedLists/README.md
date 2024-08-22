# JS Arrays v Linked Lists

| Feature       | Linked List                         | JavaScript Array               |
|---------------|-------------------------------------|---------------------------------|
| Memory        | Non-contiguous (dynamic allocation) | Contiguous                     |
| Insertion/Deletion | O(1) (at the beginning or if you have a reference to the node)  | O(n) (shifting elements)      |
| Random Access | O(n) (traverse to the desired index)| O(1) (direct access by index) |
| Size          | Dynamic (can grow or shrink)        | Dynamic, but may involve reallocation |
| Use Cases     | Frequent insertions/deletions, non-sequential access |  Sequential access, random access by index |


## The test

* This test benchmarks the performance of various operations.
* It measures the average time taken to perform these operations multiple times across multiple test runs.

### Operations tested

* addToMiddle: Adding an element to the middle of the data structure
* addToStart: Adding an element to the beginning of the data structure
* addToEnd: Adding an element to the end of the data structure
* removeFromMiddle: Removing an element from the middle of the data structure.

## Array Performance

| Number of Elements | addToMiddle (ms) | addToStart (ms) | addToEnd (ms) | removeFromMiddle (ms) |
|---------------------|-----------------|----------------|---------------|----------------------|
| 100                 | 0.111              | 0.179              | 0.019              | 0.383     | 
| 1000                 | 0.134              | 0.257              | 0.018              | 0.426     | 
| 10000                 | 0.723             | 1.457              | 0.006              | 1.041     |
| 100000                 | 7.652             | 15.786              | 0.006              | 7.508     |
| 1000000                 | 105.156             | 159.861              | 0.006              | 97.248     |
| 10000000                 | 1427.652             | 3170.227              | 0.006              | 1397.291     |

Using a standard CodeSpaces VM, JavaScript's heap ran out of memory and wouldn't run for 100 million.



