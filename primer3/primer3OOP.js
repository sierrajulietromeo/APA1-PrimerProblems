class SocialMediaPost {
    constructor(text, timestamp, author) {
      if (text === undefined || timestamp === undefined || author === undefined) {
        throw new Error('Post must contain text, timestamp, and author');
      }
  
      if (text === null || typeof text !== 'string') {
        throw new Error('Post text must be a string');
      }
      if (text.trim() === '') {
        throw new Error('Post text cannot be empty');
      }
  
      try {
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) {
          throw new Error('Invalid timestamp format');
        }
      } catch {
        throw new Error('Invalid timestamp format');
      }
  
      if (author === null || typeof author !== 'string') {
        throw new Error('Author must be a string');
      }
      if (author.trim() === '') {
        throw new Error('Author name cannot be empty');
      }
  
      this.text = text;
      this.timestamp = timestamp;
      this.author = author;
    }
  }
  
  class Node {
    constructor(data = null) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SocialMediaFeed {
    static createLinkedList(posts) {
      if (!Array.isArray(posts) || posts.length === 0) {
        return null;
      }
  
      // Convert raw posts to SocialMediaPost instances
      const validatedPosts = posts.map(post => new SocialMediaPost(
        post.text, 
        post.timestamp, 
        post.author
      ));
  
      const head = new Node(validatedPosts[0]);
      let current = head;
  
      for (let i = 1; i < validatedPosts.length; i++) {
        current.next = new Node(validatedPosts[i]);
        current = current.next;
      }
  
      return head;
    }
  
    static searchSocialMediaFeed(feed, keyword) {
      if (!feed) return [];
  
      const results = [];
      const normalizedKeyword = keyword.toLowerCase();
      const keywordWords = normalizedKeyword.split(/\s+/);
      
      let current = feed;
      while (current) {
        const normalizedText = current.data.text.toLowerCase();
        const textWords = normalizedText.split(/\s+/);
  
        const hasPartialMatch = keywordWords.some(keyWord => 
          textWords.some(textWord => textWord.includes(keyWord))
        );
  
        if (hasPartialMatch) {
          results.push(current.data);
        }
        
        current = current.next;
      }
  
      return results;
    }
  }
  
  module.exports = { 
    createLinkedList: SocialMediaFeed.createLinkedList, 
    searchSocialMediaFeed: SocialMediaFeed.searchSocialMediaFeed,
    Node 
  };