// 队列

class Queue {
  constructor() {
    this.items = [];
  }
  // 向队列添加元素
  push(element) {
    this.items.push(element);
  }
  // 从队列移除元素
  shift() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
  // 查看队列头元素
  peek() {
    return this.items[0]
  }
  // 检查队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 打印队列
  print() {
    return this.items.toString();
  }
}

// 循环队列——击鼓传花

function hotPotato(nameList, num) {
  var queue = new Queue();
  var eliminated = "";
  for (let i = 0; i < nameList.length; i++) {
    queue.push(nameList[i]);
  }
  while (queue.size() > 0) {
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift())
    }
    eliminated = queue.shift();
    console.log(`eliminated: ${eliminated}`);
  }
  return eliminated
}
var nameList = ['java', 'cpp', 'c#', 'golang', 'php', 'basic', 'javascript', 'python'];
hotPotato(nameList, 3);

// eliminated: golang
// eliminated: python
// eliminated: php
// eliminated: cpp
// eliminated: java
// eliminated: c#
// eliminated: javascript
// eliminated: basic