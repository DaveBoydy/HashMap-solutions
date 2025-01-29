import HashMap from "./hashmap.js";

const hashMap = HashMap();

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("lion", "golden");
hashMap.set("moon", "silver");

console.log(hashMap.get("moon"));

hashMap.set("sun", "yellow");

hashMap.set("moon", "red");

console.log(hashMap.get("moon"));

console.log(hashMap.has("apple"));
console.log(hashMap.has("strawberry"));
console.log(hashMap.get("strawberry"));

console.log(hashMap.length());
console.log(hashMap.remove("apple"));
console.log(hashMap.length());

console.log(hashMap.has("apple"));
console.log(hashMap.get("apple"));
console.log(hashMap.get("lion"));

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());

hashMap.clear();

console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
