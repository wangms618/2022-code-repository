class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        const isHasKey = this.cache.has(key);

        if (!isHasKey) {
            return -1;
        } else {
            const val = this.cache.get(key);

            // 此处需先删除再重新插入已更新使用顺序
            this.cache.delete(key);
            this.cache.set(key, val);

            return val;
        }
    }

    put(key, val) {

        if (this.cache.size >= this.capacity) {
            // 删除最久未使用key
            this.cache.delete(this.cache.keys().next().value)
        }

        const isHasKey = this.cache.has(key);
        // 存在时更新顺序
        if (isHasKey) {
            this.cache.delete(key);
        }

        this.cache.set(key, val);
    }
}