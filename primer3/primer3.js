function createLinkedList(posts) {
    // Validate posts
    if (!Array.isArray(posts) || posts.length === 0) {
      return null;
    }
  
    // Validate each post
    posts.forEach(post => {
      // More specific order of validations
      if (post.text === undefined || post.timestamp === undefined || post.author === undefined) {
        throw new Error('Post must contain text, timestamp, and author');
      }
  
      // Validate text first
      if (post.text === null || typeof post.text !== 'string') {
        throw new Error('Post text must be a string');
      }
      if (post.text.trim() === '') {
        throw new Error('Post text cannot be empty');
      }
  
      // Validate timestamp
      try {
        const date = new Date(post.timestamp);
        if (isNaN(date.getTime())) {
          throw new Error('Invalid timestamp format');
        }
      } catch {
        throw new Error('Invalid timestamp format');
      }
  
      // Validate author
      if (post.author === null || typeof post.author !== 'string') {
        throw new Error('Author must be a string');
      }
      if (post.author.trim() === '') {
        throw new Error('Author name cannot be empty');
      }
    });
  
    // Create linked list
    const head = { 
      data: posts[0], 
      next: null 
    };
    let current = head;
  
    for (let i = 1; i < posts.length; i++) {
      current.next = { 
        data: posts[i], 
        next: null 
      };
      current = current.next;
    }
  
    return head;
  }
  
  function searchSocialMediaFeed(feed, keyword) {
    if (!feed) return [];
  
    const results = [];
    const normalisedKeyword = keyword.toLowerCase();
    
    let current = feed;
    while (current) {
      const normalisedText = current.data.text.toLowerCase();
      
      // Split into words to handle more granular partial matches
      const textWords = normalisedText.split(/\s+/);
      const keywordWords = normalisedKeyword.split(/\s+/);
  
      // Check if any word partially matches
      const hasPartialMatch = textWords.some(word => 
        textWords.some(textWord => textWord.includes(normalisedKeyword)) || 
        keywordWords.some(keyWord => word.includes(keyWord))
      );
  
      if (hasPartialMatch) {
        results.push(current.data);
      }
      
      current = current.next;
    }
  
    return results;
  }
  
  // For compatibility with tests
  const Node = function() {};
  
  module.exports = { createLinkedList, searchSocialMediaFeed, Node };