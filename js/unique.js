// 如何对数组去重
var arr = [2,2,2,243,44,36,2645,22,2,53,2323,6454,42,32,2,2,2];

// 第一种利用循环遍历
function uniqueFirst(arr){
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      if(tempArr.indexOf(arr[i]) == -1){
          tempArr.push(arr[i]);
      }
    }
    return tempArr;
}
console.log(uniqueFirst(arr));

// 第二种排序相邻去重法
var arr = [2, 2, 2, 243, 44, 36, 2645, 22, 2, 53, 2323, 6454, 42, 32, 2, 2, 2];
function uniqueSecond(arr){
    arr.sort();
    let tempArr = [arr[0]];
    for(let i = 1; i < arr.length; i++){
       if(tempArr[tempArr.length-1] !== arr[i]){
           tempArr.push(arr[i])
       }
    }
    return tempArr;
}
console.log(uniqueSecond(arr));

// 第三种利用ES6 Set

var arr = [2, 2, 2, 243, 44, 36, 2645, 22, 2, 53, 2323, 6454, 42, 32, 2, 2, 2];
function uniqueThird(arr){
    return Array.from(new Set(arr));
}
console.log(uniqueThird(arr));

// 第四利用reduce

var arr = [2, 2, 2, 243, 44, 36, 2645, 22, 2, 53, 2323, 6454, 42, 32, 2, 2, 2];

function uniqueFour(array) {
    return array.reduce((a,b)=>{
        a.indexOf(b) == -1 ? false : a.push(b);
        return a
    },[])
}
console.log(uniqueFour(arr));

// 第五种利用filter和includes方法

var arr = [2, 2, 2, 243, 44, 36, 2645, 22, 2, 53, 2323, 6454, 42, 32, 2, 2, 2];
function uniqueFive(array){
    let tempArr = [];
   tempArr = array.filter(item=>{
      return tempArr.includes(item)? false : tempArr.push(item)
   });
   return tempArr;
}
console.log(uniqueFive(arr));

// 第六种 对象键值对法
var arr = [2, 2, 2, 243, 44, 36, 2645, 22, 2, 53, 2323, 6454, 42, 32, 2, 2, 2];
function uniqueSix(array){
    let obj = {};
    let tempArr = [];
    for(let i =0;i<array.length;i++){
        if(!obj[array[i]]){
           tempArr.push(array[i]);
           obj[arr[i]] = arr[i];
        }
    }
    return tempArr;
}
console.log(uniqueSix(arr));

// 面试官追问题
// 如何对一个对象数组按照规定的字段去重
var usersArr = [
    { name: "name1", age: "1" },
    { name: "name2", age: "11" },
    { name: "name7", age: "11" },
    { name: "name3", age: "12" },
    { name: "name4", age: "13" },
    { name: "name2", age: "1" },
    { name: "name6", age: "12" }
]

function uniqueByFields(array,fields){
   let hash = {}
   return array.reduce((arr,item)=>{
       hash[item[fields]] ? "" : hash[item[fields]] = true && arr.push(item);
       return arr
   },[])
}

console.log(uniqueByFields(usersArr, "age"));

// 如何对指定字段进行排序

function sortByFileds(arr,fields){
    return arr.sort((a,b)=>{
        return a[fields] - b[fields];
    });
}
console.log(sortByFileds(usersArr, "age"));