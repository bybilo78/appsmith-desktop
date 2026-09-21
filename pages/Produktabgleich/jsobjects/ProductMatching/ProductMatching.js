export default {
  getWords(title) {
    return (title || '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .split(/\s+/)
      .filter(word =>
        word.length > 1 &&
        !/^\d+(ml|g|kg|l|oz|pcs|stk)$/i.test(word)
      );
  },

  findMatches(supplierTitle, products) {
    const words = this.getWords(supplierTitle);

    return products
      .map(product => {
        const title = (product.title || '').toLowerCase();

        const matchedWords = words.filter(word =>
          title.includes(word)
        );

        return {
          ...product,
          matched_words: matchedWords,
          match_count: matchedWords.length,
          match_percent: words.length
            ? Math.round(matchedWords.length / words.length * 100)
            : 0
        };
      })
      .filter(product => product.match_count > 0)
      .sort((a, b) => b.match_count - a.match_count);
  }
}