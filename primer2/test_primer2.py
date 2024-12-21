import pytest
import re

from primer2 import shuffle_and_deal

def test_basic_functionality():
    """Test basic card dealing functionality."""
    num_players = 4
    cards_per_hand = 5
    result = shuffle_and_deal(num_players, cards_per_hand)
    
    assert len(result) == num_players
    for hand in result:
        assert len(hand) == cards_per_hand

def test_card_format():
    """Test that each card follows the correct string format."""
    result = shuffle_and_deal(2, 5)
    card_format = r'^(Ace|[2-9]|10|Jack|Queen|King) of (Hearts|Diamonds|Clubs|Spades)$'
    
    for hand in result:
        for card in hand:
            assert re.match(card_format, card) is not None

def test_unique_cards():
    """Test that all cards are unique when dealing entire deck."""
    result = shuffle_and_deal(4, 13)  # Deal entire deck
    all_cards = [card for hand in result for card in hand]
    
    assert len(all_cards) == 52
    assert len(set(all_cards)) == 52

def test_entire_deck():
    """Test dealing the entire deck between two players."""
    result = shuffle_and_deal(2, 26)
    all_cards = [card for hand in result for card in hand]
    
    assert len(all_cards) == 52
    assert len(result) == 2
    assert len(result[0]) == 26
    assert len(result[1]) == 26

def test_single_player():
    """Test dealing all cards to a single player."""
    result = shuffle_and_deal(1, 52)
    
    assert len(result) == 1
    assert len(result[0]) == 52

def test_minimum_cards():
    """Test dealing minimum cards to maximum players."""
    result = shuffle_and_deal(52, 1)
    
    assert len(result) == 52
    for hand in result:
        assert len(hand) == 1

def test_exceed_deck_size():
    """Test that requesting too many cards raises an error."""
    with pytest.raises(ValueError):
        shuffle_and_deal(11, 5)  # 11 * 5 = 55 cards (more than deck)

def test_invalid_players():
    """Test invalid number of players."""
    invalid_values = [0, -1, None]
    for invalid_value in invalid_values:
        with pytest.raises(ValueError):
            shuffle_and_deal(invalid_value, 5)

def test_invalid_cards():
    """Test invalid number of cards per hand."""
    invalid_values = [0, -1, None]
    for invalid_value in invalid_values:
        with pytest.raises(ValueError):
            shuffle_and_deal(4, invalid_value)

def test_two_deck_support():
    """Test shuffling with two decks."""
    result = shuffle_and_deal(8, 13, 2)  # Using 2 decks
    all_cards = [card for hand in result for card in hand]
    
    # Should have 104 cards total
    assert len(all_cards) == 104
    
    # Count occurrences of each card
    card_counts = {}
    for card in all_cards:
        card_counts[card] = card_counts.get(card, 0) + 1
    
    # Each card should appear at most twice
    assert all(count <= 2 for count in card_counts.values())

def test_exceed_two_deck_size():
    """Test that requesting too many cards with two decks raises an error."""
    with pytest.raises(ValueError):
        shuffle_and_deal(21, 5, 2)  # 21 * 5 = 105 cards (more than two decks)

def test_suit_distribution():
    """Test correct distribution of suits in a single deck."""
    result = shuffle_and_deal(4, 13)  # Deal entire deck
    all_cards = [card for hand in result for card in hand]
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    
    for suit in suits:
        suit_count = sum(1 for card in all_cards if suit in card)
        assert suit_count == 13

def test_value_distribution():
    """Test correct distribution of values in a single deck."""
    result = shuffle_and_deal(4, 13)  # Deal entire deck
    all_cards = [card for hand in result for card in hand]
    values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 
              'Jack', 'Queen', 'King']
    
    for value in values:
        value_count = sum(1 for card in all_cards if card.startswith(value))
        assert value_count == 4