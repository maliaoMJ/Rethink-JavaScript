// 实现一个简单的深拷贝
var json1 = { "name": "鹏哥", "age": 18, "arr1": [1, 2, 3, 4, 5], "string": 'afasfsafa', "arr2": [1, 2, 3, 4, 5], "arr3": [{ "name1": "李鹏" }, { "job": "前端开发" }] };
function deepClone(origin, result) {
  var result = result || {};
  for (let key in origin) {
    if (typeof origin[key] === 'object') {
      result[key] = Array.isArray(origin[key]) ? [] : {};
      deepClone(origin[key], result[key]);
    } else {
      result[key] = origin[key];
    }
  }
  return result;
}
// var obj = JSON.parse(json1);
var cloneObj = deepClone(json1, {})
console.log(cloneObj);

// 浅拷贝
Object.assign({}, {});

// 防抖动与节流

// 防抖动

function debounce(fn, wait = 50, immediate = true) {
  let timer = null;

  return function () {
    let context = this;
    let args = arguments;
    if (immediate && !timer) {
      fn.apply(context, args);
    };
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait);
  }
}

// 节流

function throttle(fn, wait, immediate) {
  let timer = null;
  let callNow = immediate;
  return function () {
    let context = this;
    let args = arguments;
    if (callNow) {
      fn.apply(context, args);
      callNow = false;
    }
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  }
}