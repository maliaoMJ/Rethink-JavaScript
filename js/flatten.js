// 数组扁平化的五种方法

var arr = [1,2,[2,323,434,[2323,[2322,5646],23],255]];

// 第一种方法利用递归方法
var tempArr = [];
function flattenArrFirst(array){
array.map(item=>{
    if(Array.isArray(item)){
        tempArr.concat(flattenArrFirst(item));
    }else{
        tempArr.push(item);
    }
});
return tempArr;
}

console.log(flattenArrFirst(arr));

// 第二种方式利用字符串方法
function flattenARrSecond(array){
    let arrStr = array.toString().split(',');

    return arrStr.map(item=>Number(item));
}
console.log(flattenARrSecond(arr));

// 第三种 利用ES6语法

function flattenArrThird(array){
    while(array.some(item => Array.isArray(item))){
      array = [].concat(...array);
    }
    return array;
}
console.log(flattenArrThird(arr));

// 第四种利用 reduce

function flattenFour(array){
   return array.reduce((result,item)=>{
       return result.concat(Array.isArray(item) ? flattenFour(item) : item)
   },[])
   
}

console.log(flattenFour(arr));

// 第五种利用 jion 和 split 方法

function flattenArrFive(array){
    return arr.join(",").split(",").map(item => Number(item))
}

console.log(flattenArrFive(arr));