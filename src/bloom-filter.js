class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.storage = new Array(size).fill(false);
    this.hashFunctions = [
      this.hash1,
      this.hash2,
      this.hash3
    ];
  }

  hash1(value) {
    let hash = 0;
    const stringValue = String(value);
    
    for (let i = 0; i < stringValue.length; i++) {
      hash = (hash << 5) - hash + stringValue.charCodeAt(i);
      hash = hash & hash;
    }
    
    return Math.abs(hash % this.size);
  }

  hash2(value) {
    let hash = 5381;
    const stringValue = String(value);
    
    for (let i = 0; i < stringValue.length; i++) {
      hash = ((hash << 5) + hash) + stringValue.charCodeAt(i);
    }
    
    return Math.abs(hash % this.size);
  }

  hash3(value) {
    let hash = 0;
    const stringValue = String(value);
    
    for (let i = 0; i < stringValue.length; i++) {
      hash = ((hash << 5) - hash) + stringValue.charCodeAt(i);
      hash |= 0;
    }
    
    return Math.abs(hash % this.size);
  }

  insert(item) {
    this.hashFunctions.forEach(hashFunc => {
      const hash = hashFunc.call(this, item);
      this.storage[hash] = true;
    });
  }

  mayContain(item) {
    return this.hashFunctions.every(hashFunc => {
      const hash = hashFunc.call(this, item);
      return this.storage[hash];
    });
  }
}

module.exports = {
  BloomFilter
};
