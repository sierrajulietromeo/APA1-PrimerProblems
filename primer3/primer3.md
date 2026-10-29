# Primer Challenge 3: Social Media Feed Search

**Scenario:**

Imagine you're building a social media application where users can post short messages or updates. These posts are stored as nodes in a linked list, each containing information like the post text, timestamp, and author. You want to implement a search feature that allows users to find posts containing specific keywords or phrases.

**Challenge:**

Create a JavaScript program that searches for posts in a social media feed represented as a linked list. The program should:

*   Construct a linked list of posts with `createLinkedList(posts)`. Each node is an object with two properties: `data` (the post) and `next` (the next node, or `null` at the end). The function returns the first node (the head), or `null` if `posts` is an empty array.
*   Validate every post before building the list, and throw an error if any post is invalid. A valid post has a non-empty `text` string, a non-empty `author` string and a `timestamp` string that is a real date and time, such as `'2024-03-11 10:00:00'`.
*   Search the feed with `searchSocialMediaFeed(feed, keyword)`, which returns an array of every post whose `text` contains the keyword or phrase, ignoring case. Partial words count: `'ing'` matches "Having".
*   Return an empty array when nothing matches or the feed is empty.

**Example:**

```javascript
const feed = createLinkedList([
  { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
  { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
  { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
]);

const searchTerm = 'great';
const results = searchSocialMediaFeed(feed, searchTerm);

// Output:
// [{ text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' }]
```

### Additional Revisions

*   Return the search results sorted **newest first** by `timestamp`. Posts with the same timestamp keep the order they had in the feed.

### Notes

* In your `PORTFOLIO.md`, give the Big O time complexity of searching the feed and of sorting the results, and explain your choice of sorting approach.
* Run only this primer's tests with `npm test -- primer3`.

* You can add additional tests if you determine the current tests don't offer complete coverage. These can be highlighted in your screen recording.
* Existing tests can be altered should your choice of implementation mean that an existing test isn't compatible. These can be highlighted in your screen recording.
* Commit and push as you go.
* Your code is marked against the shared rubric in the main [README](../README.md).
