## Arrays - accessing an element by it's index

Standard JS arrays excel at accessing a value by it's index.


### Stats - Average of 100 runs - accessing an element only.

| Number of Elements | Standard JS array time (ms) |
|-------------------|------------------------------|
| 100              |  0.08                         |
| 1000              |  0.06                         |
| 10000             |  0.02                        |
| 100000            |  0.02                      |
| 1000000            |  0.02                      |
| 10000000              |  0.032                      |
| 100000000            |  0.20                      |

Note: The last test (for 100 million) took around 15minutes to run the entire test, but look at the speed of accessing specific elements by its index!

(The largest array size that JavaScript supports is 4.29billion elements, although this might also depend on the amount of memory that your system has. The program may crash if you try with too many elements!)


### Stats - Average of 100 runs - accessing an element and then deleting it.

| Number of Elements | Standard JS array time (ms) |
|-------------------|------------------------------|
| 100              |          0.10                 |
| 1000            |         0.13               |
| 10000             |          0.69                |
| 100000            |         12.01               |
| 1000000            |           249.86  (0.249 sec )   |
| 10000000            |           2720.42 (2.72 sec)    |
| 100000000            |     27989.02 (27.989 sec)          |


Note: The last test (for 100 million) took around 60minutes to run the entire test, and you can see that due to the large number of items this caused a significant performance decrease. This is mainly due to the operation of shifting all elements up one from the deleted item, to close the newly-created space in this dynamic array.



### Stats - Average of 100 runs - Summing 10 random locations 1000 times.

| Number of Elements | Standard JS array time (ms) |
|-------------------|------------------------------|
| 100              |      0.23                     |
| 1000            |       0.22                |
| 10000             |       0.15                   |
| 100000            |      0.15                  |
| 1000000            |     0.32         |
| 10000000            |    0.51           |
| 100000000            |    2.19           |