from datetime import datetime

def validate_post(post):
    required_fields = {"text", "timestamp", "author"}
    if not all(field in post for field in required_fields):
        raise ValueError("Post missing required fields")
    
    if not post["text"] or not isinstance(post["text"], str):
        raise ValueError("Post text must be a non-empty string")
    
    if not post["author"] or not isinstance(post["author"], str):
        raise ValueError("Author must be a non-empty string")
    
    try:
        datetime.strptime(post["timestamp"], "%Y-%m-%d %H:%M:%S")
    except ValueError:
        raise ValueError("Invalid timestamp format. Use YYYY-MM-DD HH:MM:SS")

def create_linked_list(posts):
    if not posts:
        return None
    
    # Validate all posts first
    for post in posts:
        validate_post(post)
    
    # Create the head node
    head = {"data": posts[0], "next": None}
    current = head
    
    # Add remaining posts
    for post in posts[1:]:
        current["next"] = {"data": post, "next": None}
        current = current["next"]
    
    return head

def search_social_media_feed(feed, keyword):
    
    if not feed or not keyword:
        return []
    
    results = []
    keyword = keyword.lower()
    current = feed
    
    while current:
        if keyword in current["data"]["text"].lower():
            results.append(current["data"])
        current = current["next"]
    
    return results