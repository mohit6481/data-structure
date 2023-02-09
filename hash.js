// Hash function that works with strings only
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

/*  
Problems with above hash functions:
    1. Works only on strings,
    2. Not constant time. Linear with key length
    3. Could be more random. we can have duplicates
*/

function hash1(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME =  31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

/* 
arraylength should also be prime number
Here we are using primenumber to avoid collision.
And we are just calculating till 100 length for each key to reduce calculation time

With this we still have improvement to make. Collision will still happen
*/


class HashTable {
    constructor (size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME =  31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set (key, value) {
        let hashValue = this._hash(key);
        this.keyMap[hashValue] = this.keyMap[hashValue] ? [ ...this.keyMap[hashValue], [key, value]] : [[key, value]];
    }

    get (key) {
        let hashValue = this._hash(key);
        let data = this.keyMap[hashValue];
        return data?.filter(el => el[0] === key)[0];
    }

    keys () {
        let keys = [];
        this.keyMap.forEach(el => el.forEach(key => keys.push(key[0])));
        return keys;
    }

    values () {
        let values = [];
        this.keyMap.forEach(el => el.forEach(key => values.indexOf(key[1]) ===  -1 ? values.push(key[1]) : ''));
        return values;
    }
}

let ht = new HashTable();
ht.set('a', 'A');
ht.set('b', 'B');
ht.set('c', 'C');
ht.set('d', 'D');
ht.set('d', 'D');
ht.get('a');
ht.keys();
ht.values();
