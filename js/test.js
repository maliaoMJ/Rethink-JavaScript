var name = "majian";

(function(){
    console.log(name)
    if(name="majian"){var name="dachui";console.log('hello '+name)}else{
        console.log('bey'+name);
    }
    console.log(name);
})()

// 利用 filter 和 inclues
var arr = [2,24,24,23,[343,3434,[45,545],34],343];
function flattenArr(array){
//   array.map(item=>{
//       if(Array.isArray(item)){
//           return result.concat(flattenArr(item));
//       }else{
//           return result.push(item);
//       }
//   })
//   return result;


    return array.reduce((result, item) => {
        return result.concat(Array.isArray(item) ? flattenArr(item) : item)
    }, [])
}
console.log(flattenArr(arr));