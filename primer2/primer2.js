function shuffleAndDeal(numPlayers, cardsPerPlayer, numDecks = 1) {
    // Input validation
    if (numPlayers <= 0 || !Number.isInteger(numPlayers)) {
      throw new Error("Invalid number of players. Must be a positive integer.");
    }
    if (cardsPerPlayer <= 0 || !Number.isInteger(cardsPerPlayer)) {
      throw new Error("Invalid cards per hand. Must be a positive integer.");
    }
    const totalCards = numPlayers * cardsPerPlayer;
    const deckSize = numDecks * 52;
    if (totalCards > deckSize) {
      throw new Error(`Not enough cards in ${numDecks} deck(s) to deal ${cardsPerPlayer} cards to ${numPlayers} players.`);
    }
  
    // Create a deck of cards
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    let deck = [];
  
    for (let i = 0; i < numDecks; i++) {
      for (const suit of suits) {
        for (const rank of ranks) {
          deck.push(`${rank} of ${suit}`);
        }
      }
    }
  
    // Shuffle the deck using Fisher-Yates algorithm (O(n) time complexity)
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  
    // Deal cards to players
    const hands = [];
    for (let i = 0; i < numPlayers; i++) {
      hands.push(deck.splice(0, cardsPerPlayer));
    }
  
    return hands;
  }

export default shuffleAndDeal;


















// Don't forget to export functions/classes/objects so they are visible to your tests.