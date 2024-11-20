function createLinkedList(posts) {
    if (!Array.isArray(posts) || posts.length === 0) {
      return null;
    }
  
    for (const post of posts) {
      // Check if all required properties exist and are of correct type
      if (
        !post.text ||
        typeof post.text !== "string" ||
        post.text.trim() === "" ||
        !post.timestamp ||
        !(post.timestamp instanceof Date || !isNaN(new Date(post.timestamp))) ||
        !post.author ||
        typeof post.author !== "string" ||
        post.author.trim() === ""
      ) {
        throw new Error("Invalid post structure");
      }
    }
  
    const head = { data: posts[0], next: null };
    let current = head;
    for (let i = 1; i < posts.length; i++) {
      current.next = { data: posts[i], next: null };
      current = current.next;
    }
  
    return head;
  }
  
  function searchSocialMediaFeed(feed, keyword) {
    if (!feed) return [];
  
    const results = [];
    const normalizedKeyword = keyword.toLowerCase();
    const keywordWords = normalizedKeyword.split(/\s+/);
  
    let current = feed;
    while (current) {
      const normalizedText = current.data.text.toLowerCase();
      const textWords = normalizedText.split(/\s+/);
  
      const hasPartialMatch = keywordWords.some((keyWord) =>
        textWords.some((textWord) => textWord.includes(keyWord))
      );
  
      if (hasPartialMatch) {
        results.push(current.data);
      }
  
      current = current.next;
    }
  
    return results;
  }
  
  export { createLinkedList, searchSocialMediaFeed };