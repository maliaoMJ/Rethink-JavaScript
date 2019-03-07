// 实现New 的过程

function Create(){
    const obj = {};
    const Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype
    const result =  Constructor.apply(obj, arguments);
    return typeof result == 'object' ? result : obj 
}

// 实现instanceof的原理  比如： [] instanceof Array   --> true [].__proto__ == Array.prototype

function instanceOf(left, right){
  var prototype = right.prototype;
  var left = left.__proto__;
  while(true){
      if(left == null)
        return false;
      if(left === prototype)
        return true;
      left = left.__proto__;
  }
}

console.log(instanceOf({},Object));

// 实现call
// 1.如果不传入参数默认第一个参数为window
// 2.改变了 this 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除

Function.prototype.myCall = function(context){
  let context = context || window;
  context.fn = this;
  let args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result
}

// 实现apply
Function.prototype.myApply = function(context){
    let context = context || window;
    context.fn = this;
    let result
    if(arguments[1]){
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}

// 实现bind
Function.prototype.mybind = function(context){
    if(typeof this !== "function"){
        throw new TypeError("type is error!");
    }
    let self = this;
    let args = [...arguments].slice(1);
    return function Fn(){
        if(this instanceof Fn){
           return new self(...args, ...arguments);
        }else{
           return self.apply(context, args.concat(...arguments));
        }
    }
}