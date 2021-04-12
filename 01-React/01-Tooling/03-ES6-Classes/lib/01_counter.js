class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.map = new Map();
    if (text && text.length > 0) {
      text.split(" ").forEach((term) => {
        const lowerTerm = term.toLowerCase();
        this.map.set(lowerTerm, (this.map.get(lowerTerm) || 0) + 1);
      });
    }
  }

  occurrences(word) {
    // TODO: return the number of occurrences
    return this.map.get(word.toLowerCase()) || 0;
  }
}

module.exports = Counter;

