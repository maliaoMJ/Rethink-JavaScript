// 数据结构 之 集合 我们用ES6来实现

class Collect {
  constructor() {
    this.set = new Set();
  }
  add(element) {
    this.set.add(element);
  }
  delete(element) {
    this.set.delete(element);
  }
  has(element) {
    return this.set.has(element);
  }
  clear() {
    this.set = new Set();
  }
  size() {
    return this.set.size();
  }
  value() {
    return [...this.set]
  }
  // 交集
  intersection(otherSet) {
    let intersectionSet = new Set();
    for (let value of this.set.values()) {
      if (otherSet.has(value)) {
        intersectionSet.add(value)
      }
    }
    return intersectionSet;
  }
  // 并集
  union(otherSet) {
    return new Set([...this.set].concat([...otherSet.set]));
  }
  // 差集
  difference(otherSet) {
    let differSet = new Set();
    for (let value of this.set.values()) {
      if (!otherSet.has(value)) {
        differSet.add(value);
      }
    }
    return differSet;
  }
  // 子集
  subset(childSet) {
    for (let value of childSet.set) {
      if (!this.set.has(value)) {
        return false
      }
    }
    return true
  }
}

let setA = new Collect();
let setB = new Collect();

setA.add(2);
setA.add(3);
setA.add(4);
setA.add(4);
setA.add(5);
setB.add(4);
setB.add(4);
setB.add(5);
console.log(setA.value());
console.log(setB.value());
console.log(setA.has(3));
console.log(setA.union(setB));
console.log(setA.intersection(setB));
console.log(setA.difference(setB));
console.log(setA.subset(setB));
// [ 2, 3, 4, 5 ]
// [ 4, 5 ]
// true
// Set { 2, 3, 4, 5 }
// Set { 4, 5 }
// Set { 2, 3 }
// true