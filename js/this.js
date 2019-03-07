// 实现一个new 的过程
function create() {
  let obj = {};
  let Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype
  let result = Constructor.apply(obj, arguments);
  return typeof result === 'object' ? result : obj
}
// 实现call
Function.prototype.myCall = function (context) {
  var context = context || window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}
// 实现apply
Function.prototype.myApply = function (context) {
  var context = context || window;
  context.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn
  return result;
}
// 实现bind

Function.prototype.myBind = function (context) {
  if (typeof this != 'object') {
    throw new TypeError('type error');
  }
  var self = this;
  var args = [...arguments].slice(1);
  return function Fn() {
    if (typeof this instanceof Fn) {
      return new self(...args, ...arguments);
    } else {
      return self.apply(context, args.concat(...arguments))
    }
  }
}

// 实现 instanceof

function instanceOf(left, right) {
  let prototype = right.prototype;
  let left = left.__proto__
  while (true) {
    if (left == null) return false
    if (left == prototype) return true
    left = left.__proto__
  }
}