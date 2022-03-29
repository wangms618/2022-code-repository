/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const isHasKey = this.cache.has(key)
    if (!isHasKey) {
        return -1
    } else {
        const val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)
        return val
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const isHasKey = this.cache.has(key);
    // 存在时更新顺序
    if (isHasKey) {
        this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */