import LinkedList from "./linked-list.js";

/**
 * Simplified Hash Map data structure
 */

export default function HashMap() {
  const LOAD_FACTOR = 0.75;
  let capacity = 16;
  let fullCapacity = Math.floor(capacity * LOAD_FACTOR);
  let buckets = Array.from({ length: capacity }, () => LinkedList());

  // reset the hashmap to double capacity, reload old values
  const reloadMapCapacity = () => {
    const entryArr = entries();

    capacity = capacity * 2;
    fullCapacity = Math.floor(capacity * LOAD_FACTOR);
    buckets = Array.from({ length: capacity }, () => LinkedList());

    entryArr.forEach((entry) => {
      set(entry.key, entry.value);
    });
  };

  // turn key hash code into a valid buckets index
  const hashKeyToIndex = (key) => {
    const index = hash(key) % capacity;
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    return index;
  };

  // make a numerical hash code from key
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 13;
    for (let i = 0; i < key.length; i++) {
      hashCode += primeNumber * (key.charCodeAt(i) % primeNumber);
    }
    return hashCode;
  };

  // if a key exists in a bucket overwrite the old value
  const set = (key, value) => {
    const index = hashKeyToIndex(key);

    if (has(key)) {
      for (let i = 0; i < buckets[index].size(); i++) {
        if (buckets[index].at(i).value.key === key) {
          buckets[index].at(i).value.value = value;
          return;
        }
      }
    }
    buckets[index].append({ key, value });

    if (length() > fullCapacity) reloadMapCapacity();
  };

  // return the value of key
  const get = (key) => {
    const index = hashKeyToIndex(key);

    for (let i = 0; i < buckets[index].size(); i++) {
      if (buckets[index].at(i).value.key === key) {
        return buckets[index].at(i).value.value;
      }
    }
    return null;
  };

  // return true if key exists
  const has = (key) => {
    const index = hashKeyToIndex(key);

    for (let i = 0; i < buckets[index].size(); i++) {
      if (buckets[index].at(i).value.key === key) {
        return true;
      }
    }
    return false;
  };

  // remove the key and return true, else return false
  const remove = (key) => {
    const index = hashKeyToIndex(key);

    for (let i = 0; i < buckets[index].size(); i++) {
      if (buckets[index].at(i).value.key === key) {
        buckets[index].removeAt(i);
        return true;
      }
    }
    return false;
  };

  // returns the number of keys
  const length = () => {
    let listKeys = 0;
    for (let i = 0; i < capacity; i++) {
      listKeys += buckets[i].size();
    }
    return listKeys;
  };

  // removes all entries
  const clear = () => {
    buckets = Array.from({ length: capacity }, () => LinkedList());
  };

  // return array containing all keys
  const keys = () => {
    const arrKeys = [];
    for (let i = 0; i < capacity; i++) {
      for (let j = 0; j < buckets[i].size(); j++) {
        arrKeys.push(buckets[i].at(j).value.key);
      }
    }
    return arrKeys;
  };

  // returns array containing all values
  const values = () => {
    const arrValues = [];
    for (let i = 0; i < capacity; i++) {
      for (let j = 0; j < buckets[i].size(); j++) {
        arrValues.push(buckets[i].at(j).value.value);
      }
    }
    return arrValues;
  };

  // returns array containing all key-value pairs
  const entries = () => {
    const arrObjects = [];
    for (let i = 0; i < capacity; i++) {
      for (let j = 0; j < buckets[i].size(); j++) {
        arrObjects.push(buckets[i].at(j).value);
      }
    }
    return arrObjects;
  };

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
