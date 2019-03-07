var obj = new Proxy({}, {
  get(target, key, receiver) {
    console.log(`get target:${target} get ${key}`);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`set target:${target} set ${key} value: ${value}`);
    return Reflect.set(target, key, value, receiver);
  }
});

obj.name = "majian"
console.log(obj.name);