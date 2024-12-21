import random

def shuffle_and_deal(num_players, cards_per_player, num_decks = 1):
    # Input validation
    if not isinstance(num_players, int) or num_players <= 0:
        raise ValueError("Number of players must be a positive integer")
    if not isinstance(cards_per_player, int) or cards_per_player <= 0:
        raise ValueError("Cards per player must be a positive integer")
    if num_decks not in (1, 2):
        raise ValueError("Number of decks must be 1 or 2")
    
    total_cards_needed = num_players * cards_per_player
    total_cards_available = 52 * num_decks
    
    if total_cards_needed > total_cards_available:
        raise ValueError(
            f"Not enough cards: need {total_cards_needed}, "
            f"but only have {total_cards_available}"
        )

    # Create deck(s)
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
              'Jack', 'Queen', 'King']
    
    deck = [f"{value} of {suit}" for suit in suits 
                                for value in values] * num_decks
    
    # Shuffle using Fisher-Yates algorithm (O(n) time complexity)
    for i in range(len(deck) - 1, 0, -1):
        j = random.randint(0, i)
        deck[i], deck[j] = deck[j], deck[i]
    
    # Deal cards
    hands = []
    card_index = 0
    
    for _ in range(num_players):
        hand = deck[card_index:card_index + cards_per_player]
        hands.append(hand)
        card_index += cards_per_player
    
    return hands