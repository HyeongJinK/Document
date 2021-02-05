const arr = [1, 2, 3];
for (const a of arr) console.log(a);
console.log(arr[Symbol.iterator]);

const set = new Set([1,2,3]);
for (const a of set) console.log(a);

const map = new Map([['a', 1],['b', 2],['c', 3]]);
for (const a of map) console.log(a);

// Symbol.iterator
// 객체의 키로 사용될 수 있다.