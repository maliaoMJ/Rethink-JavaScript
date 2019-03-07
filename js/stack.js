// Javascript 数据结构之 栈

class Stack {
  constructor() {
    this.items = []
  }
  // 进栈
  push(item) {
    this.items.push(item);
  }
  // 出栈
  pop() {
    return this.items.pop();
  }
  // 返回栈顶的元素
  peek() {
    return this.items[this.items.length - 1]
  }
  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 移除栈里的所有元素
  clear() {
    this.items = []
  }
  // 返回栈的长度
  size() {
    return this.items.length;
  }
  // 打印栈
  print() {
    return this.items.toString();
  }
}

// 十进制转二进制

function divideBy2(decNumber) {
  var stack = new Stack();
  var rem = "";
  var binaryString = "";
  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    stack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }
  console.log(stack.print() + '-----');
  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString();
    console.log(binaryString);
  }

  return binaryString;
}
console.log(divideBy2(5));

// 转任意进制

function baseConverter(decNumber, base) {
  let stack = new Stack();
  let binaryString = '';
  let rem = '';
  const DIGITS = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    stack.push(rem);
    decNumber = Math.floor(decNumber / 2);

  }
  while (!stack.isEmpty()) {
    binaryString += DIGITS[stack.pop()]
  }
  return binaryString;
}
console.log(baseConverter(455, 15)); //137EDB825