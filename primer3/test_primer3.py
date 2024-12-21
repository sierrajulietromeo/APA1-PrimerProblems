import pytest
from datetime import datetime
from primer3 import create_linked_list, search_social_media_feed

def test_create_empty_list():
    """Test creating an empty linked list."""
    feed = create_linked_list([])
    assert feed is None

def test_create_single_post():
    """Test creating a linked list with a single post."""
    posts = [{
        "text": "Hello world!",
        "timestamp": "2024-03-11 10:00:00",
        "author": "Alice"
    }]
    
    feed = create_linked_list(posts)
    assert feed is not None
    assert feed["next"] is None
    assert feed["data"] == posts[0]

def test_create_multiple_posts():
    """Test creating a linked list with multiple posts in correct order."""
    posts = [
        {"text": "First post", "timestamp": "2024-03-11 10:00:00", "author": "Alice"},
        {"text": "Second post", "timestamp": "2024-03-11 11:00:00", "author": "Bob"},
        {"text": "Third post", "timestamp": "2024-03-11 12:00:00", "author": "Charlie"}
    ]
    
    feed = create_linked_list(posts)
    current = feed
    for post in posts:
        assert current["data"] == post
        current = current["next"]
    assert current is None

@pytest.fixture
def sample_feed():
    """Fixture providing a sample feed for testing."""
    posts = [
        {"text": "Hello world!", "timestamp": "2024-03-11 10:00:00", "author": "Alice"},
        {"text": "Having a great day!", "timestamp": "2024-03-11 11:30:00", "author": "Bob"},
        {"text": "Just finished a fantastic game.", "timestamp": "2024-03-11 12:15:00", "author": "Aqil"},
        {"text": "Another great post!", "timestamp": "2024-03-11 13:00:00", "author": "Diana"}
    ]
    return create_linked_list(posts)

def test_exact_keyword_search(sample_feed):
    """Test finding posts containing exact keyword."""
    results = search_social_media_feed(sample_feed, "great")
    assert len(results) == 2
    for post in results:
        assert "great" in post["text"].lower()

def test_case_insensitive_search(sample_feed):
    """Test case-insensitive search."""
    upper_results = search_social_media_feed(sample_feed, "GREAT")
    lower_results = search_social_media_feed(sample_feed, "great")
    assert upper_results == lower_results

def test_partial_matches(sample_feed):
    """Test finding posts containing partial matches."""
    results = search_social_media_feed(sample_feed, "ing")
    assert len(results) == 1  # Only "Having" contains 'ing'

def test_no_matches(sample_feed):
    """Test search with no matching results."""
    results = search_social_media_feed(sample_feed, "nonexistent")
    assert results == []

def test_post_structure_validation():
    """Test validation of post structure."""
    # Valid post
    valid_post = {
        "text": "Valid post",
        "timestamp": "2024-03-11 10:00:00",
        "author": "Alice"
    }
    assert create_linked_list([valid_post]) is not None

    # Test missing properties
    invalid_posts = [
        {"text": "Valid post", "timestamp": "2024-03-11 10:00:00"},  # missing author
        {"timestamp": "2024-03-11 10:00:00", "author": "Alice"},     # missing text
        {"text": "Valid post", "author": "Alice"}                     # missing timestamp
    ]
    for invalid_post in invalid_posts:
        with pytest.raises(ValueError):
            create_linked_list([invalid_post])

    # Test invalid property values
    invalid_posts = [
        {"text": "", "timestamp": "2024-03-11 10:00:00", "author": "Alice"},           # empty text
        {"text": "Valid post", "timestamp": "invalid-date", "author": "Alice"},         # invalid timestamp
        {"text": "Valid post", "timestamp": "2024-03-11 10:00:00", "author": ""}       # empty author
    ]
    for invalid_post in invalid_posts:
        with pytest.raises(ValueError):
            create_linked_list([invalid_post])

def test_large_number_of_posts():
    """Test handling large number of posts."""
    large_posts = [
        {
            "text": f"Post number {i} with some random text",
            "timestamp": "2024-03-11 10:00:00",
            "author": f"Author{i}"
        }
        for i in range(1000)
    ]
    
    feed = create_linked_list(large_posts)
    results = search_social_media_feed(feed, "random")
    assert len(results) == 1000

def test_long_post_content():
    """Test handling posts with long content."""
    long_text = "a" * 10000 + "target" + "b" * 10000
    feed = create_linked_list([{
        "text": long_text,
        "timestamp": "2024-03-11 10:00:00",
        "author": "Alice"
    }])
    
    results = search_social_media_feed(feed, "target")
    assert len(results) == 1