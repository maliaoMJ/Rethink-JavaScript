// JavaScript 数据结构值列表
function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  let length = 0;
  let head = null;
  // 添加元素
  this.append = function (element) {
    let node = new Node(element);
    let current;
    if (head == null) {
      head = node
    } else {
      current = head;
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++;
  }
  // 插入元素
  this.insert = function (position, element) {
    if (position > -1 && position <= length) {
      let node = new Node(element);
      let current = head;
      let pervious;
      let index = 0;
      if (position == 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          pervious = current;
          current = current.next;
        }
        node.next = current;
        pervious.next = node;
        length++;
        return true;
      }
    } else {
      return false;
    }
  }
  // 从列表中移除一项
  this.getHead = function () {
    return head;
  }
  // 从列表移除指定的一项
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head;
      let previous;
      let index = 0;
      // 边界检查合法的情况下
      if (position == 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return false;
    }
  }
  // 返回元素在列表中的索引
  this.indexOf = function (element) {
    let current = head;
    index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next();
    }
    return -1;
  }
  // 判断列表是否为空
  this.isEmpty = function () {
    return length === 0;
  }
  // 获取列表的长度
  this.size = function () {
    return length;
  }
  // 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值。
  this.toString = function () {
    let current = head,
      string = '';
    while (current) {
      string += current.element + (current.next ? 'n' : '');
      current = current.next;
    }
    return string;
  }
  this.remove = function (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }
}

let list = new LinkedList();
list.append(15);
list.append(14);
list.append(13);
list.append(13);

console.log(list);
console.log(list.toString());