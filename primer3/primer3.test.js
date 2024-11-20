// Import the necessary modules
import { createLinkedList, searchSocialMediaFeed } from './primer3.js'; // Adjust paths as needed

// Making sure you are in the same folder, you can run this test file with: jest primer3.test.js
// To run some tests: jest -t "post" primers.test.js (runs all tests with "post" in their name)
// To run one specific test, e.g. jest -t "should handle long post content" primer3.test.js


describe('Social Media Feed Search', () => {
  describe('Linked List Creation', () => {
    test('should create an empty linked list', () => {
      const feed = createLinkedList([]);
      expect(feed).toBeNull();
    });

    test('should create a linked list with single post', () => {
      const posts = [{
        text: 'Hello world!',
        timestamp: '2024-03-11 10:00:00',
        author: 'Alice'
      }];
      
      const feed = createLinkedList(posts);
      expect(feed).toBeTruthy();
      expect(feed.next).toBeNull();
      expect(feed.data).toEqual(posts[0]);
    });

    test('should create a linked list with multiple posts in correct order', () => {
      const posts = [
        { text: 'First post', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
        { text: 'Second post', timestamp: '2024-03-11 11:00:00', author: 'Bob' },
        { text: 'Third post', timestamp: '2024-03-11 12:00:00', author: 'Charlie' }
      ];
      
      const feed = createLinkedList(posts);
      let current = feed;
      posts.forEach(post => {
        expect(current.data).toEqual(post);
        current = current.next;
      });
      expect(current).toBeNull();
    });
  });

  describe('Search Functionality', () => {
    let feed;
    
    beforeEach(() => {
      feed = createLinkedList([
        { text: 'Hello world!', timestamp: '2024-03-11 10:00:00', author: 'Alice' },
        { text: 'Having a great day!', timestamp: '2024-03-11 11:30:00', author: 'Bob' },
        { text: 'Just finished a fantastic game.', timestamp: '2024-03-11 12:15:00', author: 'Aqil' },
        { text: 'Another great post!', timestamp: '2024-03-11 13:00:00', author: 'Diana' }
      ]);
    });

    test('should find posts containing exact keyword', () => {
      const results = searchSocialMediaFeed(feed, 'great');
      expect(results).toHaveLength(2);
      results.forEach(post => {
        expect(post.text.toLowerCase()).toContain('great');
      });
    });

    test('should handle case-insensitive search', () => {
      const results = searchSocialMediaFeed(feed, 'GREAT');
      expect(results).toHaveLength(2);
      const lowerResults = searchSocialMediaFeed(feed, 'great');
      expect(results).toEqual(lowerResults);
    });

    test('should find posts containing partial matches', () => {
      const results = searchSocialMediaFeed(feed, 'ing');
      expect(results).toHaveLength(1); // Only "Having" contains 'ing'
    });

    test('should return empty array for no matches', () => {
      const results = searchSocialMediaFeed(feed, 'nonexistent');
      expect(results).toEqual([]);
    });
  });

  describe('Post Structure Validation', () => {
    test('should require valid post structure', () => {
      // Valid post
      expect(() => {
        createLinkedList([
          { 
            text: 'Valid post', 
            timestamp: '2024-03-11 10:00:00', 
            author: 'Alice' 
          }
        ]);
      }).not.toThrow();

      // Invalid posts (missing properties)
      expect(() => {
        createLinkedList([
          { text: 'Valid post', timestamp: '2024-03-11 10:00:00' } // missing author
        ]);
      }).toThrow();

      expect(() => {
        createLinkedList([
          { timestamp: '2024-03-11 10:00:00', author: 'Alice' } // missing text
        ]);
      }).toThrow();

      expect(() => {
        createLinkedList([
          { text: 'Valid post', author: 'Alice' } // missing timestamp
        ]);
      }).toThrow();

      // Invalid posts (invalid property types/values)
      expect(() => {
        createLinkedList([
          { text: '', timestamp: '2024-03-11 10:00:00', author: 'Alice' } // empty text
        ]);
      }).toThrow();

      expect(() => {
        createLinkedList([
          { text: 'Valid post', timestamp: 'invalid-date', author: 'Alice' } // invalid timestamp
        ]);
      }).toThrow();

      expect(() => {
        createLinkedList([
          { text: 'Valid post', timestamp: '2024-03-11 10:00:00', author: '' } // empty author
        ]);
      }).toThrow();
    });
  });

  describe('Performance Tests', () => {
    test('should handle large number of posts', () => {
      const largePosts = Array(1000).fill(null).map((_, i) => ({
        text: `Post number ${i} with some random text`,
        timestamp: '2024-03-11 10:00:00', // Fixed timestamp to pass validation
        author: `Author${i}`
      }));
      
      const feed = createLinkedList(largePosts);
      const results = searchSocialMediaFeed(feed, 'random');
      expect(results.length).toBe(1000);
    });

    test('should handle long post content', () => {
      const longText = 'a'.repeat(10000) + 'target' + 'b'.repeat(10000);
      const feed = createLinkedList([
        { 
          text: longText,
          timestamp: '2024-03-11 10:00:00',
          author: 'Alice'
        }
      ]);
      
      const results = searchSocialMediaFeed(feed, 'target');
      expect(results).toHaveLength(1);
    });
  });
});