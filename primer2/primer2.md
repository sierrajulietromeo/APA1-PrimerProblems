# Primer Challenge 2: Playing Card Shuffling Simulator

**Challenge:**

Create a Node.js program that simulates shuffling and dealing a deck of cards. The program should:

*   Create a standard 52-card deck.
*   Validate inputs to ensure they are within acceptable ranges and throw errors for invalid inputs (e.g., non-positive integers, requesting more cards than available).
*   Shuffle the deck fairly, so that every possible order of the cards is equally likely.
*   Deal cards to a specified number of players.
*   Output the hands dealt as an array of arrays.

**Example:**

```js
const game = shuffleAndDeal(4, 5);
console.log(game);
[
  ["Ace of Spades", "3 of Clubs", "7 of Diamonds", "Jack of Hearts", "Queen of Spades"],
  ["2 of Diamonds", "5 of Hearts", "6 of Clubs", "9 of Spades", "King of Diamonds"],
  ["4 of Hearts", "8 of Clubs", "10 of Spades", "Jack of Diamonds", "Queen of Clubs"],
  ["Ace of Clubs", "3 of Diamonds", "5 of Spades", "7 of Hearts", "10 of Clubs"]
];
```

### Additional Revisions:

*   Update the program to support shuffling two decks together (104 cards), using the optional third parameter: `shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks)`.

### Notes

*   The "Shuffle quality" test checks that every card is equally likely to be dealt first. Some popular shuffling shortcuts, including ones AI tools often suggest, fail it. If yours fails, find out why before changing your approach.
*   Name your shuffling algorithm and give its Big O time complexity in your `PORTFOLIO.md` table. In your screen recording, explain why it is fair.
*   Run only this primer's tests with `npm test -- primer2`.
* You can add additional tests if you determine the current tests don't offer complete coverage. These can be highlighted in your screen recording.
* Existing tests can be altered should your choice of implementation mean that an existing test isn't compatible, except the "Shuffle quality" test. These can be highlighted in your screen recording.
* Commit and push as you go.
* Your code is marked against the shared rubric in the main [README](../README.md).
